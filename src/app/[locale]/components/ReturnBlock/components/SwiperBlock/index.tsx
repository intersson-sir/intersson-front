'use client'

import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import S from '../../ReturnBlock.module.scss'

const SwiperBlock = () => {
  const t = useTranslations('Return')
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={e => setActiveSlide(e.activeIndex)}
        onSwiper={swiper => console.log(swiper)}
        initialSlide={0}
        breakpoints={{
          600: {
            slidesPerView: 2.3,
            centeredSlides: false,
            spaceBetween: 20
          }
        }}
      >
        <SwiperSlide>
          <div className={classNames(S.block, S.firstBlock)}>
            <video
              src="/videos/dot.mov"
              className={S.videoDot}
              muted
              autoPlay
              loop
              playsInline
            />
            <span className={S.blockTitle}>{t('startTitle')}</span>
            <span className={S.blockDesc}>{t('startDesc')}</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={S.block}>
            <video
              src="/videos/dot-white.mp4"
              className={S.videoWhite}
              muted
              autoPlay
              loop
              playsInline
            />
            <span className={S.blockTitle}>{t('securityTitle')}</span>
            <span className={S.blockDesc}>{t('securityDesc')}</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={S.block}>
            <video
              src="/videos/dot.mov"
              className={S.videoDot}
              muted
              autoPlay
              loop
              playsInline
            />
            <span className={S.blockTitle}>{t('methodTitle')}</span>
            <span className={S.blockDesc}>{t('methodDesc')}</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={S.block}>
            <video
              src="/videos/dot-more.mp4"
              className={S.videoMore}
              muted
              autoPlay
              loop
              playsInline
            />
            <span className={S.blockTitle}>{t('taskTitle')}</span>
            <span className={S.blockDesc}>{t('taskDesc')}</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={S.block}>
            <video
              src="/videos/dot.mov"
              className={S.videoDot}
              muted
              autoPlay
              loop
              playsInline
            />
            <span className={S.blockTitle}>{t('docsTitle')}</span>
            <span className={S.blockDesc}>{t('docsDesc')}</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={S.pagination}>
        {[0, 1, 2, 3, 4].map(item => {
          return (
            <div
              key={item}
              className={classNames(
                S.item,
                activeSlide === item && S.itemActive
              )}
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default SwiperBlock
