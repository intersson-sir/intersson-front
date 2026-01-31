'use client'

import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'

import S from '../../WorkBlock.module.scss'
import Card from '../Card'

const ServiceSwiper = () => {
  const t = useTranslations('ServicePage.Work')

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      initialSlide={0}
      breakpoints={{
        600: {
          slidesPerView: 1.3,
          centeredSlides: false,
          spaceBetween: 20
        }
      }}
    >
      <SwiperSlide style={{ marginLeft: '80px' }}>
        <Card
          title={t('sprintTitle')}
          desc={
            <span className={S.cardDesc}>
              <span>{t('sprintDesc1')}</span>
              <span className={S.cardDescBlue}>{t('sprintDesc2')}</span>
              <span>{t('sprintDesc3')}</span>
            </span>
          }
          footer={t('sprintFooter')}
        />
      </SwiperSlide>
      <SwiperSlide style={{ marginRight: '80px' }}>
        <Card
          title={t('fixTitle')}
          desc={
            <span className={S.cardDesc}>
              <span>{t('fixDesc1')}</span>
              <span className={S.cardDescBlue}>{t('fixDesc2')}</span>
              <span>{t('fixDesc3')}</span>
            </span>
          }
          footer={t('fixFooter')}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default ServiceSwiper
