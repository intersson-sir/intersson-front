import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import S from './HeroSection.module.scss'

const HeroSection = () => {
  const t = useTranslations('AboutPage.Hero')

  return (
    <section className={classNames(S.wrapper, 'container')}>
      <span className={S.title}>{t('title')}</span>

      <video
        playsInline
        muted
        autoPlay
        src="/videos/hero.mp4"
        className={S.video}
      ></video>
    </section>
  )
}

export default HeroSection
