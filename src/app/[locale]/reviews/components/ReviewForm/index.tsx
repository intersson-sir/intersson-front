'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import ErrorIcon from 'public/icons/error.svg'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { createReview } from '@/api/services/reviews'
import URLS from '@/configs/urls'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import TextArea from '@/ui/Textarea'
import Upload from '@/ui/Upload'

import S from './ReviewForm.module.scss'

type ReviewFormDto = {
  name: string
  company: string
  position: string
  review: string
  file: null | File
}

const FORM_INIT = { name: '', company: '', position: '', review: '', file: null }

const ReviewForm = () => {
  const t = useTranslations('ReviewForm')
  const router = useRouter()
  const [isChangedForm, setIsChange] = useState(false)
  const [isChangedFormOnBtn, setIsChangeOnBtn] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<ReviewFormDto>({
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

  const onSubmit = async (form: ReviewFormDto) => {
    const formData = new FormData()
    const { name, company, position, review, file } = form
    if (file) {
      formData.append('logo', file)
    }
    formData.append('name', name)
    formData.append('company', company)
    formData.append('position', position)
    formData.append('review', review)

    try {
      await createReview(formData)

      setValue('name', '')
      setValue('company', '')
      setValue('position', '')
      setValue('review', '')
      setValue('file', null)
      router.push(URLS.SUCCESS)
    } catch (error) {
      console.error('Failed to submit review:', error)
      // Здесь можно добавить отображение ошибки пользователю, например через стейт
      alert('Ошибка при отправке отзыва. Проверьте соединение с сервером.')
    }
  }

  return (
    <div className={S.wrap}>
      <form className={S.info} onSubmit={handleSubmit(onSubmit)}>
        <span className={S.title}>{t('title')}</span>
        <span className={S.desc}>{t('desc')}</span>
        {!isValid && isChangedForm && isChangedFormOnBtn && (
          <div className={S.error}>
            <ErrorIcon width={28} height={28} />
            <span>{t('error')}</span>
          </div>
        )}
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
          placeholder={t('company')}
          {...register('company', {
            required: {
              value: true,
              message: t('required')
            }
          })}
          errorMessage={errors.company?.message}
        />
        <Input
          placeholder={t('position')}
          {...register('position', {
            required: {
              value: true,
              message: t('required')
            }
          })}
          errorMessage={errors.position?.message}
        />
        <TextArea
          cols={4}
          placeholder={t('review')}
          {...register('review', {
            required: {
              value: true,
              message: t('required')
            }
          })}
          errorMessage={errors.review?.message}
        />
        <div className={S.actions}>
          <Upload onChange={v => setValue('file', v)} value={watch('file')} title={t('logo')} />
        </div>
        <Button
          onClick={() => setIsChangeOnBtn(true)}
          fullWidth
          size="m"
          type="submit"
          disabled={!isValid}
        >
          {t('submit')}
        </Button>
      </form>
    </div>
  )
}

export default ReviewForm
