import { useTranslations } from 'next-intl'

import Card from './components/Card'
import ServiceSwiper from './components/Swiper'
import S from './WorkBlock.module.scss'

const WorkBlock = () => {
  const t = useTranslations('ServicePage.Work')

  return (
    <div className={S.inner}>
      <div className={S.wrap}>
        <div className="container">
          <div className={S.info}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.subTitle}>{t('subTitle')}</span>
          </div>
        </div>
        <div className="container">
          <div className={S.list}>
            <Card
              title={t('sprintTitle')}
              desc={
                <span className={S.cardDesc}>
                  <span>{t('sprintDesc1')}</span>{' '}
                  <span className={S.cardDescBlue}>{t('sprintDesc2')}</span>
                  <br />
                  <span>{t('sprintDesc3')}</span>
                </span>
              }
              footer={t('sprintFooter')}
            />
            <Card
              title={t('fixTitle')}
              desc={
                <span className={S.cardDesc}>
                  <span>{t('fixDesc1')}</span>
                  <span className={S.cardDescBlue}>{t('fixDesc2')}</span>
                  <span>{t('fixDesc3')}</span>
                </span>
              }
              footer={t('fixFooter')}
            />
          </div>
        </div>

        <div className={S.swiper}>
          <ServiceSwiper />
        </div>
      </div>
    </div>
  )
}

export default WorkBlock
