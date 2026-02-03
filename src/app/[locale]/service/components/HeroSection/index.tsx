import { useTranslations } from 'next-intl'
import MarqueeProjects from '@/app/[locale]/components/MarqueeProjects'

import S from './HeroSection.module.scss'

const HeroSection = () => {
  const t = useTranslations('ServicePage')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <MarqueeProjects />
      </div>
    </div>
  )
}

export default HeroSection
