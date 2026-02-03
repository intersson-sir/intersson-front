import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CommentIcon from 'public/icons/comment.svg'

import S from './Service.module.scss'

const Service = () => {
  const t = useTranslations('Service')

  return (
    <div className={S.inner}>
      <div className="container">
        <div className={S.wrap}>
          <span className={S.title}>{t('title')}</span>
          <div className={S.list}>
            <div className={S.empty}></div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('analyticsTitle')}</span>
              <span className={S.cardDesc}>{t('analyticsDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('machineTitle')}</span>
              <span className={S.cardDesc}>{t('machineDesc')}</span>
            </div>
            <div className={S.comment}>
              <CommentIcon width={20} height={20} />
              <span className={S.commentDesc}>{t('comment')}</span>
              <div className={S.manager}>
                <div className={S.managerWrap}>
                  <span className={S.managerName}>{t('igor')}</span>
                  <span className={S.managerDesc}>{t('manager')}</span>
                </div>
              </div>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('designTitle')}</span>
              <span className={S.cardDesc}>{t('designDesc')}</span>
            </div>
            <div className={S.empty}></div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('mobileTitle')}</span>
              <span className={S.cardDesc}>{t('mobileDesc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('web3Title')}</span>
              <span className={S.cardDesc}>{t('web3Desc')}</span>
            </div>
            <div className={S.card}>
              <span className={S.cardTitle}>{t('webTitle')}</span>
              <span className={S.cardDesc}>{t('webDesc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
