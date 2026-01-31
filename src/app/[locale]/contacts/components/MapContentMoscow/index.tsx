'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { useTranslations } from 'next-intl'

import S from './MapContent.module.scss'

const MapContentMoscow = () => {
  const t = useTranslations('Contact')

  return (
    <>
      <YMaps preload={true}>
        <div className={S.mapContent}>
          <Map
            width={1000}
            height={330}
            defaultState={{ center: [55.749_398, 37.537_024], zoom: 13 }}
          >
            <Placemark geometry={[55.749_398, 37.537_024]} />
          </Map>
        </div>
      </YMaps>

      <span className={S.address}>{t('moscowAddress')}</span>
    </>
  )
}

export default MapContentMoscow
