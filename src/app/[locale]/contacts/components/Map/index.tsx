'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import URLS from '@/configs/urls'

import MapContentDubai from '../MapContentDubai'
import MapContentMoscow from '../MapContentMoscow'
import S from './Map.module.scss'

const Map = () => {
  const t = useTranslations('Contact')
  const [city, setCity] = useState<'Moscow' | 'Dubai'>('Moscow')

  return (
    <div className="container">
      <div className={S.wrap}>
        <div className={S.info}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.desc}>{t('desc')}</span>
          <div className={S.buttons}>
            <Link href={URLS.TELEGRAM} className={S.socialBtn}>
              TG
            </Link>
            <Link href={URLS.MAIL} className={S.socialBtn}>
              @
            </Link>
          </div>
        </div>
        <div className={S.map}>
          <div className={S.header}>
            <span
              onClick={() => {
                setCity('Moscow')
              }}
              className={classNames(
                S.titleMap,
                city === 'Moscow' && S.titleActive
              )}
            >
              {t('moscow')}
            </span>
            <span
              onClick={() => {
                setCity('Dubai')
              }}
              className={classNames(
                S.titleMap,
                city === 'Dubai' && S.titleActive
              )}
            >
              {t('dubai')}
            </span>
          </div>

          {city === 'Moscow' ? <MapContentMoscow /> : <MapContentDubai />}
        </div>
      </div>
    </div>
  )
}

export default Map
