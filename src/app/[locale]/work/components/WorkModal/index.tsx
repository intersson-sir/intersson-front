'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { createWorkForm } from '@/api/services/work'
import URLS from '@/configs/urls'
import { WorkType } from '@/types'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import ModalSlide from '@/ui/ModalSlide'
import TextArea from '@/ui/Textarea'
import Upload from '@/ui/Upload'

import Task from '../Task'
import S from './WorkModal.module.scss'

type WorkModal = {
  isOpen: boolean
  onOpen: (v: boolean) => void
  item: WorkType
}

type FormDto = {
  name: string
  email: string
  desc: string
  phone: string
  file: null | File
}

const WorkModal = ({ isOpen, onOpen, item }: WorkModal) => {
  const tM = useTranslations('ServicePage.Work.Modal')
  const locale = useLocale()
  const router = useRouter()
  const [isChecked, setIsChecked] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<FormDto>({
    mode: 'all',
    defaultValues: {
      email: '',
      desc: '',
      file: null,
      name: '',
      phone: ''
    }
  })

  const STEPS = [
    {
      title: tM('time'),
      value: locale === 'ru' ? item.future_desc : item.future_desc_en
    },
    {
      title: tM('step'),
      value: locale === 'ru' ? item.important_desc : item.important_desc_en
    },
    {
      title: tM('map'),
      value: locale === 'ru' ? item.terms_desc : item.terms_desc_en
    }
  ]

  const onSubmit = async (form: FormDto) => {
    const formData = new FormData()
    const { desc, email, file, name, phone } = form
    if (file) {
      formData.append('file', file)
    }
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('desc', desc)
    formData.append('workId', String(item.id))

    await createWorkForm(formData)

    setValue('desc', '')
    setValue('email', '')
    setValue('file', null)
    setValue('name', '')
    setValue('phone', '')

    onOpen(false)
  }

  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen} className={S.modal}>
      <div className={S.wrap}>
        <div className={S.header}>
          <span className={S.title}>
            {locale === 'ru' ? item.name_en : item.name_en}
          </span>
          <span className={S.desc}>
            {locale === 'ru' ? item.desc : item.desc_en}
          </span>
          {item.required && (
            <div className={S.tags}>
              {locale === 'ru' ? (
                <>
                  {item.required.split(',').map(elem => {
                    return (
                      <span key={elem} className={S.tag}>
                        {elem}
                      </span>
                    )
                  })}
                </>
              ) : (
                <>
                  {item.required_en && (
                    <>
                      {item.required_en.split(',').map(elem => {
                        return (
                          <span key={elem} className={S.tag}>
                            {elem}
                          </span>
                        )
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div className={S.list}>
          {STEPS.map(task => {
            return <Task key={task.title} task={task} />
          })}
          <span className={S.label}>{tM('workTitle')}</span>
          <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
            <Input
              label={tM('name')}
              placeholder={tM('name')}
              {...register('name', {
                required: true
              })}
              errorMessage={errors.name?.message}
            />
            <Input
              placeholder={'Email'}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: 'Not valid'
                }
              })}
              errorMessage={errors.email?.message}
            />
            <Input
              placeholder={tM('phone')}
              {...register('phone', {
                required: true
              })}
              errorMessage={errors.phone?.message}
            />
            <TextArea
              cols={4}
              placeholder={tM('comm')}
              {...register('desc', {
                required: false
              })}
              errorMessage={errors.desc?.message}
            />
            <div className={S.actions}>
              <Upload
                title={tM('file')}
                onChange={v => setValue('file', v)}
                value={watch('file')}
              />
              <div className={S.checkBox}>
                <input
                  type="checkbox"
                  className={S.elCheck}
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className={S.policy}>
                  {tM('checkbox1')}
                  <span
                    onClick={() => router.push(URLS.POLICY)}
                    className={S.policyBlue}
                  >
                    {tM('checkbox2')}
                  </span>
                </span>
              </div>
            </div>
            <Button
              fullWidth
              size="m"
              type="submit"
              disabled={isValid && !isChecked}
            >
              {tM('submit')}
            </Button>
          </form>
        </div>
      </div>
    </ModalSlide>
  )
}

export default WorkModal
