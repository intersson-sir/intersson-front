import { useTranslations } from 'next-intl'

import S from './MediaBlock.module.scss'

const MediaBlock = () => {
  const t = useTranslations('Pricing')

  return (
    <div className={S.wrap}>
      <div className={S.header}>
        <h2 className={S.mainTitle}>{t('title')}</h2>
        <div className={S.badge}>{t('soon')}</div>
        <p className={S.subtitle}>{t('subtitle')}</p>
      </div>
      
      <div className={S.cards}>
        {/* Starter Plan */}
        <div className={S.card}>
          <h3 className={S.cardTitle}>{t('starter.title')}</h3>
          <p className={S.cardDesc}>{t('starter.desc')}</p>
          <div className={S.price}>
            <span className={S.priceAmount}>{t('starter.price')}</span>
            <span className={S.priceMonth}>/month</span>
          </div>
          <div className={S.buyout}>{t('starter.buyout')}</div>
          <ul className={S.features}>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature1')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature2')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature3')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature4')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature5')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature6')}</li>
            <li><span className={S.checkmark}>✓</span> {t('starter.feature7')}</li>
          </ul>
          <button className={S.button}>{t('getStarted')}</button>
        </div>

        {/* Professional Plan */}
        <div className={`${S.card} ${S.cardPopular}`}>
          <div className={S.popularBadge}>{t('mostPopular')}</div>
          <h3 className={S.cardTitle}>{t('professional.title')}</h3>
          <p className={S.cardDesc}>{t('professional.desc')}</p>
          <div className={S.price}>
            <span className={S.priceAmount}>{t('professional.price')}</span>
            <span className={S.priceMonth}>/month</span>
          </div>
          <div className={S.buyout}>{t('professional.buyout')}</div>
          <ul className={S.features}>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature1')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature2')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature3')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature4')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature5')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature6')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature7')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature8')}</li>
            <li><span className={S.checkmark}>✓</span> {t('professional.feature9')}</li>
          </ul>
          <button className={`${S.button} ${S.buttonPrimary}`}>{t('getStarted')}</button>
        </div>

        {/* Enterprise Plan */}
        <div className={S.card}>
          <h3 className={S.cardTitle}>{t('enterprise.title')}</h3>
          <p className={S.cardDesc}>{t('enterprise.desc')}</p>
          <div className={S.price}>
            <span className={S.priceAmount}>{t('enterprise.price')}</span>
            <span className={S.priceMonth}>/month</span>
          </div>
          <div className={S.buyout}>{t('enterprise.buyout')}</div>
          <ul className={S.features}>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature1')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature2')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature3')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature4')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature5')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature6')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature7')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature8')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature9')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature10')}</li>
            <li><span className={S.checkmark}>✓</span> {t('enterprise.feature11')}</li>
          </ul>
          <button className={S.button}>{t('getStarted')}</button>
        </div>
      </div>
    </div>
  )
}

export default MediaBlock
