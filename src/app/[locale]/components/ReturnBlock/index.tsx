import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import SwiperBlock from './components/SwiperBlock'
import S from './ReturnBlock.module.scss'

const ReturnBlock = () => {
  const t = useTranslations('Return')

  return (
    <div className={S.inner}>
      <div className={S.wrap}>
        <div className="container">
          <div className={S.info}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.desc}>{t('desc')}</span>
          </div>
        </div>
        <div className={classNames(S.list, 'container')}>
          <div className={S.block}>
            <video
              src="/videos/dot.mov"
              className={S.videoDot}
              muted
              autoPlay
              playsInline
              loop
            />
            <span className={S.blockTitle}>{t('startTitle')}</span>
            <span className={S.blockDesc}>{t('startDesc')}</span>
          </div>
          <div className={S.block}>
            <video
              src="/videos/dot-white.mp4"
              className={S.videoWhite}
              muted
              autoPlay
              playsInline
              loop
            />
            <span className={S.blockTitle}>{t('securityTitle')}</span>
            <span className={S.blockDesc}>{t('securityDesc')}</span>
          </div>
          <div className={S.block}>
            <video
              src="/videos/dot.mov"
              className={S.videoDot}
              muted
              autoPlay
              playsInline
              loop
            />
            <span className={S.blockTitle}>{t('methodTitle')}</span>
            <span className={S.blockDesc}>{t('methodDesc')}</span>
          </div>
          <div className={S.block}>
            <video
              src="/videos/dot-more.mp4"
              className={S.videoMore}
              muted
              autoPlay
              playsInline
              loop
            />
            <span className={S.blockTitle}>{t('taskTitle')}</span>
            <span className={S.blockDesc}>{t('taskDesc')}</span>
          </div>
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
        </div>
        <div className={S.swiper}>
          <SwiperBlock />
        </div>
      </div>
    </div>
  )
}

export default ReturnBlock
