'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import S from './Wrapper.module.scss'

const Wrapper = () => {
  const t = useTranslations('Form.Success')

  return (
    <div className={S.wrap}>
      <div className={S.content}>
        <span className={S.title}>{t('title')}</span>
        <Link href={URLS.MAIN} className={S.link}>
          {t('btn')}
        </Link>
      </div>
      <div className={S.buttons}>
        <Link href={URLS.TELEGRAM} className={S.socialBtn}>
          TG
        </Link>
        <Link href={URLS.MAIL} className={S.socialBtn}>
          @
        </Link>
      </div>
    </div>
  )
}

export default Wrapper
