'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { useTranslations } from 'next-intl'

import S from './Map.module.scss'

const MapBlock = () => {
  const t = useTranslations('Form')

  return (
    <div className={S.wrap}>
      <YMaps>
        <div className={S.map}>
          <Map
            width={728}
            height={330}
            defaultState={{ center: [55.834_178, 37.292_76], zoom: 12 }}
          >
            <Placemark geometry={[55.834_178, 37.292_76]} />
          </Map>
          <span className={S.title}>{t('map')}</span>
        </div>
      </YMaps>
    </div>
  )
}

export default MapBlock
