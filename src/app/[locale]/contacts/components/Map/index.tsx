'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import S from './Map.module.scss'

const Map = () => {
  const t = useTranslations('Contact')

  return (
    <div className="container">
      <div className={S.wrap}>
        <div className={S.info}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.desc}>+39 370 102 24 25 info@intersson.com</span>
          <div className={S.buttons}>
            <Link href={URLS.WHATSAPP} className={S.socialBtn}>
              WA
            </Link>
            <Link href={URLS.TELEGRAM} className={S.socialBtn}>
              TG
            </Link>
            <Link href={URLS.MAIL} className={S.socialBtn}>
              @
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
