'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import ErrorIcon from 'public/icons/error.svg'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { createForm } from '@/api/services/form'
import URLS from '@/configs/urls'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import TextArea from '@/ui/Textarea'
import Upload from '@/ui/Upload'

import S from './Wrapper.module.scss'

type FormDto = {
  name: string
  email: string
  desc: string
  phone: string
  file: null | File
}

const FORM_INIT = { email: '', desc: '', file: null, name: '', phone: '' }

const Wrapper = () => {
  const t = useTranslations('Form')
  const router = useRouter()
  // const [isChecked, setIsChecked] = useState(false)
  const [isChangedForm, setIsChange] = useState(false)
  const [isChangedFormOnBtn, setIsChangeOnBtn] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<FormDto>({
    mode: 'all',
    defaultValues: {
      ...FORM_INIT
    }
  })

  const formValues = watch()

  useEffect(() => {
    if (JSON.stringify(formValues) === JSON.stringify(FORM_INIT)) {
      setIsChange(false)
    } else {
      setIsChange(true)
    }
  }, [formValues])

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

    await createForm(formData)

    setValue('desc', '')
    setValue('email', '')
    setValue('file', null)
    setValue('name', '')
    setValue('phone', '')
    router.push(URLS.SUCCESS)
  }
  return (
    <div className={S.wrap}>
      <span className={S.mobileArrow} onClick={() => router.push(URLS.MAIN)}>
        ←
      </span>
      <form className={S.info} onSubmit={handleSubmit(onSubmit)}>
        <span className={S.title}>{t('title')}</span>
        <span className={S.desc}>{t('desc')}</span>
        {!isValid && isChangedForm && isChangedFormOnBtn && (
          <div className={S.error}>
            <ErrorIcon width={28} height={28} />
            <span>{t('error')}</span>
          </div>
        )}
        <div className={S.buttons}>
          <Link href={URLS.TELEGRAM} className={S.socialBtn}>
            TG
          </Link>
          <Link href={URLS.MAIL} className={S.socialBtn}>
            @
          </Link>
        </div>
        <Input
          placeholder={t('name')}
          {...register('name', {
            required: {
              value: true,
              message: t('required')
            }
          })}
          errorMessage={errors.name?.message}
        />
        <Input
          placeholder={'Email'}
          {...register('email', {
            required: {
              value: true,
              message: t('required')
            },
            setValueAs: v => v.trim(),
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: t('emailError')
            }
          })}
          errorMessage={errors.email?.message}
        />
        <Input
          placeholder={t('phone')}
          {...register('phone', {
            required: {
              value: true,
              message: t('required')
            }
          })}
          errorMessage={errors.phone?.message}
        />
        <TextArea
          cols={4}
          placeholder={t('comm')}
          {...register('desc', {
            required: false
          })}
          errorMessage={errors.desc?.message}
        />
        <div className={S.actions}>
          <Upload onChange={v => setValue('file', v)} value={watch('file')} />
          {/* <div className={S.checkBox}>
            <input
              type="checkbox"
              className={S.elCheck}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className={S.policy}>
              {t('checkbox1')}
              <span
                onClick={() => router.push(URLS.POLICY)}
                className={S.policyBlue}
              >
                {t('checkbox2')}
              </span>
            </span>
          </div> */}
        </div>
        <Button
          onClick={() => setIsChangeOnBtn(true)}
          fullWidth
          size="m"
          type="submit"
          disabled={!isValid}
        >
          {t('btn')}
        </Button>
      </form>
    </div>
  )
}

export default Wrapper
