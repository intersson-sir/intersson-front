import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CommentIcon from 'public/icons/comment.svg'

import StepSwiper from '../StepSwiper'
import S from './StepBlock.module.scss'

const StepBlock = () => {
  const t = useTranslations('ServicePage.StepBlock')

  return (
    <div className={classNames('container', S.container)}>
      <div className={S.wrap}>
        <div className={S.info}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.subTitle}>{t('subTitle')}</span>
        </div>
        <div className={S.comment}>
          <CommentIcon width={10} height={10} />
          <span className={S.commentDesc}>{t('comment')}</span>
          <div className={S.manager}>
            <Image
              src={'/images/peoples/4.png'}
              width={45}
              height={45}
              alt="manager"
              style={{ borderRadius: '50%' }}
            />
            <div className={S.managerWrap}>
              <span className={S.managerName}>{t('igor')}</span>
              <span className={S.managerDesc}>{t('manager')}</span>
            </div>
          </div>
        </div>
        <div className={S.swiper}>
          <StepSwiper />
        </div>
      </div>
    </div>
  )
}

export default StepBlock
