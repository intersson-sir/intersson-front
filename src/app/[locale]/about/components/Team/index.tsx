import { useTranslations } from 'next-intl'

import Form from './components/Form'
import TeamSwiper from './components/Swiper'
import S from './Team.module.scss'

const Team = () => {
  const t = useTranslations('Team')

  return (
    <div className="container">
      <div className={S.wrap}>
        <div className={S.info}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.subTitle}>{t('subTitle')}</span>
          <div className={S.tags}>
            <span className={S.tag}>Project manager</span>
            <span className={S.tag}>{t('dev')}</span>
            <span className={S.tag}>QA</span>
            <span className={S.tag}>{t('design')}</span>
          </div>
        </div>
        <div className={S.swiperWrap}>
          <TeamSwiper />
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Team
