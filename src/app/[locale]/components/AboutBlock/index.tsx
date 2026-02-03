import Image from 'next/image'
import { useTranslations } from 'next-intl'

import S from './AboutBlock.module.scss'

const AboutBlock = () => {
  const t = useTranslations('About')
  return (
    <div className="container">
      <div className={S.wrap}>
        <div className={S.info}>
          <div className={S.infoWrap}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.subTitle}>{t('subTitle')}</span>
            <span className={S.desc}>{t('desc')}</span>
          </div>
        </div>
        <div className={S.content}>
          <div className={S.block}>
            <span className={S.blockTitle}>120+</span>
            <video
              playsInline
              src="/videos/Logo-4-remix 2.mp4"
              autoPlay
              muted
              loop
              className={S.video}
            />
            <span className={S.blockDesc}>{t('projects')}</span>
          </div>
          <div className={S.block}>
            <span className={S.blockTitle}>35+</span>
            <div className={S.imgList}>
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
              <Image
                src={'/images/peoples/4.png'}
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
                alt="people"
              />
            </div>
            <span className={S.blockDesc}>{t('team')}</span>
          </div>
          <div className={S.block}>
            <span className={S.blockTitle}>8</span>
            <div className={S.projectList}>
              <Image
                src={'/images/project1.png'}
                width={55}
                height={55}
                alt="people"
              />
              <Image
                src={'/images/project2.png'}
                width={55}
                height={55}
                alt="people"
              />
              <Image
                src={'/images/project3.png'}
                width={55}
                height={55}
                alt="people"
              />
            </div>
            <span className={S.blockDesc}>{t('dev')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlock
