'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import S from './TeamSwiper.module.scss'

const TeamSwiper = () => {
  return (
    <Swiper
      className={S.wrap}
      spaceBetween={20}
      slidesPerView={2}
      onSwiper={swiper => console.log(swiper)}
      initialSlide={0}
      // breakpoints={{
      //   991: {
      //     slidesPerView: 1,
      //     centeredSlides: false,
      //     spaceBetween: 10
      //   },
      //   600: {
      //     slidesPerView: 3.3,
      //     centeredSlides: false,
      //     spaceBetween: 10
      //   }
      // }}
    >
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.image}>
            <Image
              src={'/images/peoples/petr.png'}
              fill
              alt="team"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={S.info}>
            <span className={S.title}>Петр Самарцев</span>
            <span className={S.desc}>front lead</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={S.card}>
          <div className={S.image}>
            <Image
              src={'/images/peoples/mariya.png'}
              fill
              alt="team"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div className={S.info}>
            <span className={S.title}>Мария Молоткова</span>
            <span className={S.desc}>Проджект менеджер</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default TeamSwiper
