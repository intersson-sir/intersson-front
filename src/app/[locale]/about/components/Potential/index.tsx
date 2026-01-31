import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import S from './Potencial.module.scss'

const Potencial = () => {
  const t = useTranslations('AboutPage.Potential')

  return (
    <section className={classNames(S.wrapper, 'container')}>
      <div className={S.inner}>
        <span className={S.title}>{t('title')}</span>
        <span className={S.desc}>{t('desc')}</span>

        <div className={S.attributes}>
          <div className={S.column}>
            <span className={S.columnTitle}>210+</span>
            <span className={S.columnDesc}>{t('developers')}</span>
          </div>

          <div className={S.column}>
            <span className={S.columnTitle}>35+</span>
            <span className={S.columnDesc}>{t('projects')}</span>
          </div>

          <div className={S.column}>
            <span className={S.columnTitle}>8</span>
            <span className={S.columnDesc}>{t('years')}</span>
          </div>
        </div>
      </div>

      <div className={S.image}>
        <Image src={'/images/potential.png'} fill alt="potential" />
      </div>
    </section>
  )
}

export default Potencial
