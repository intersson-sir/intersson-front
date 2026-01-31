import Image from 'next/image'
import { useTranslations } from 'next-intl'

import S from './MainBlock.module.scss'

const MainBlock = () => {
  const t = useTranslations('ServiceAI')

  return (
    <div className="container">
      <div className={S.wrap}>
        <div className={S.img}>
          <Image src="/images/services/ai.png" fill alt="ai" />
        </div>
        <div className={S.texts}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.desc}>{t('desc')}</span>
        </div>
        <div className={S.blocks}>
          <span className={S.title}>{t('blockTitle')}</span>
          <div className={S.blockLists}>
            <div className={S.cardOpacity}>
              <span className={S.cardTitleOpacity}>20+</span>
              <span className={S.cardDescOpacity}>{t('projects')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('indTitle')}</span>
              <span className={S.cardDesc}>{t('indDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('techTitle')}</span>
              <span className={S.cardDesc}>{t('techDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('integrTitle')}</span>
              <span className={S.cardDesc}>{t('integrDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('proTitle')}</span>
              <span className={S.cardDesc}>{t('proDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('supportTitle')}</span>
              <span className={S.cardDesc}>{t('supportDesc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlock
