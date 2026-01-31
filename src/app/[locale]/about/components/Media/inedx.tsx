import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Forbes from 'public/images/forbes.svg'
import Vcru from 'public/images/vc.svg'

import S from './Media.module.scss'

const Media = () => {
  const t = useTranslations('AboutPage.Media')

  return (
    <section className={classNames(S.wrapper, 'container')}>
      <span className={S.title}>{t('title')}</span>

      <div className={S.list}>
        <div className={S.mediaItem}>
          <div className={S.imageWrapper}>
            <Image src={'/images/media1.png'} alt="media" fill />
          </div>
          <span className={S.mediaItemTitle}>{t('mock_title1')}</span>
          <span className={S.mediaItemDesc}>{t('mock_desc1')}</span>
          <Vcru width={60} height={20} />
        </div>

        <div className={S.mediaItem}>
          <div className={S.imageWrapper}>
            <Image src={'/images/media2.png'} alt="media" fill />
          </div>
          <span className={S.mediaItemTitle}>{t('mock_title2')}</span>
          <span className={S.mediaItemDesc}>{t('mock_desc2')}</span>
          <Forbes width={70} height={20} />
        </div>
      </div>
    </section>
  )
}

export default Media
