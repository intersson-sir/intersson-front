'use client'

import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'

import S from './StepSwiper.module.scss'

const StepSwiper = () => {
  const t = useTranslations('ServicePage.StepBlock')

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      initialSlide={0}
      centeredSlides={false}
      breakpoints={{
        991: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 3.3,
          centeredSlides: false,
          spaceBetween: 10
        }
      }}
    >
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.cardInner}></div>
          <div className={S.info}>
            <span className={S.title}>{t('analizeTitle')}</span>
            <div className={S.descWrap}>
              <span className={S.desc}>
                <span className={S.descBlue}>{t('param1')}</span> {t('param2')}
              </span>

              <span className={S.desc}>
                {t('param3')} <span className={S.descBlue}>User Stories</span>,{' '}
                {t('param4')}
              </span>
              <span className={S.desc}>
                {t('param5')} <span className={S.descBlue}>{t('param6')}</span>
              </span>
            </div>
            <div className={S.tags}>
              <span className={S.tag}>Project manager</span>
              <span className={S.tag}>{t('param7')}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.cardInner}></div>
          <div className={S.info}>
            <span className={S.title}>{t('structureTitle')}</span>
            <div className={S.descWrap}>
              <span className={S.desc}>
                {t('param8')} <span className={S.descBlue}>{t('param9')}</span>{' '}
                {t('param10')}
              </span>
              <span className={S.desc}>
                {t('param11')}{' '}
                <span className={S.descBlue}>{t('param12')}</span>{' '}
              </span>{' '}
              <span className={S.desc}>
                <span className={S.descBlue}>{t('param13')}</span>{' '}
                {t('param14')}
              </span>
            </div>
            <div className={S.tags}>
              <span className={S.tag}>{t('param15')}</span>
              <span className={S.tag}>{t('p16')}</span>
              <span className={S.tag}>Project manager</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.cardInner}></div>
          <div className={S.info}>
            <span className={S.title}>{t('devTitle')}</span>
            <div className={S.descWrap}>
              <span className={S.desc}>
                <span className={S.descBlue}>{t('p17')}</span> {t('p18')}
              </span>
              <span className={S.desc}>
                <span className={S.descBlue}>{t('p19')}</span> {t('p20')}
              </span>
              <span className={S.desc}>
                <span className={S.descBlue}>{t('p21')}</span> {t('p22')}
              </span>
            </div>
            <div className={S.tags}>
              <span className={S.tag}>{t('p23')}</span>
              <span className={S.tag}>QA</span>
              <span className={S.tag}>{t('param15')}</span>
              <span className={S.tag}>Project manager</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.cardInner}></div>
          <div className={S.info}>
            <span className={S.title}>{t('supportTitle')}</span>
            <div className={S.descWrap}>
              <span className={S.desc}>
                {t('p24')} <span className={S.descBlue}>{t('p25')}</span>{' '}
                {t('p26')}
              </span>
              <span className={S.desc}>
                {t('p27')} <span className={S.descBlue}>{t('p28')}</span>{' '}
                {t('p29')} <span className={S.descBlue}>{t('p30')}</span>{' '}
                {t('p31')}
              </span>
              <span className={S.desc}>
                {t('p32')} <span className={S.descBlue}>{t('p33')}</span>{' '}
                {t('p34')}
              </span>
            </div>
            <div className={S.tags}>
              <span className={S.tag}>{t('p23')}</span>
              <span className={S.tag}>QA</span>
              <span className={S.tag}>Project manager</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default StepSwiper
