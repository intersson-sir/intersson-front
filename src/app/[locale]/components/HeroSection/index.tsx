import Image from 'next/image'
import { useTranslations } from 'next-intl'

import S from './HeroSection.module.scss'

const HeroSection = () => {
  const t = useTranslations('Hero')

  return (
    <div className={S.wrap}>
      <div className="container">
        <div className={S.info}>
          <div className={S.content}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.titleMobile}>{t('titleMobile')}</span>

            <div className={S.peoples}>
              <div className={S.peoplesImages}>
                <Image
                  src={'/images/peoples/1.png'}
                  width={50}
                  height={50}
                  style={{ borderRadius: '50%' }}
                  alt="people"
                />
                <Image
                  src={'/images/peoples/2.png'}
                  width={50}
                  height={50}
                  style={{ borderRadius: '50%' }}
                  alt="people"
                />
                <Image
                  src={'/images/peoples/3.png'}
                  width={50}
                  height={50}
                  style={{ borderRadius: '50%' }}
                  alt="people"
                />
              </div>
              <div className={S.peoplesInfo}>
                <span className={S.peopleTitle}>35+ {t('experts')}</span>
                <span className={S.peopleDesc}>{t('stek')}</span>
              </div>
            </div>
          </div>
          <div className={S.tagsWrap}>
            <div className={S.tags}>
              <span className={S.tag}>AI&ML</span>
              <span className={S.tag}>BigData</span>
              <span className={S.tag}>FinTech</span>
              <span className={S.tag}>Crypto</span>
              <span className={S.tag}>loT</span>
              <span className={S.tag}>BPA</span>
            </div>
          </div>
        </div>
      </div>
      <video
        playsInline
        src="/videos/interssonfinal.mp4"
        muted
        loop
        autoPlay
        className={S.video}
      ></video>
    </div>
  )
}

export default HeroSection
