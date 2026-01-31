'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { useTranslations } from 'next-intl'

import S from './MapContent.module.scss'

const MapContentDubai = () => {
  const t = useTranslations('Contact')

  return (
    <>
      <YMaps preload={true}>
        <div className={S.mapContent}>
          <Map
            width={1000}
            height={330}
            defaultState={{ center: [25.221_491, 55.286_596], zoom: 15 }}
          >
            <Placemark geometry={[25.221_491, 55.286_596]} />
          </Map>
        </div>
      </YMaps>

      <span className={S.address}>{t('dubaiAddress')}</span>
    </>
  )
}

export default MapContentDubai
