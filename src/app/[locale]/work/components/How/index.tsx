import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import S from './How.module.scss'

const How = () => {
  const t = useTranslations('Work.Team')

  return (
    <section className={S.wrapper}>
      <div className={classNames('container', S.inner)}>
        <span className={S.title}>{t('title')}</span>

        <div className={S.grid}>
          <div className={classNames(S.card, S.choice)}>
            <span className={S.cardTitle}>{t('choiceTitle')}</span>
            <span className={S.cardDesc}>{t('choiceDesc')}</span>
            <span className={S.cardCounter}>01</span>
          </div>
          <div className={classNames(S.card, S.resume)}>
            <span className={S.cardTitle}>{t('resumeTitle')}</span>
            <span className={S.cardDesc}>{t('resumeDesc')}</span>
            <span className={S.cardCounter}>02</span>
          </div>
          <div className={classNames(S.card, S.answer)}>
            <span className={S.cardTitle}>{t('answerTitle')}</span>
            <span className={S.cardDesc}>{t('answerDesc')}</span>
            <span className={S.cardCounter}>03</span>
          </div>

          <div className={classNames(S.comment)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M0 10V7.36842C0 6.5692 0.129833 5.72125 0.389499 4.82456C0.658119 3.91813 1.04314 3.04581 1.54457 2.2076C2.05494 1.35965 2.66829 0.623781 3.38462 0L4.70085 1.24269C4.02035 2.10039 3.44729 3.05556 2.98168 4.10819C2.52503 5.15107 2.2967 6.2232 2.2967 7.32456V10H0ZM6.29915 10V7.36842C6.29915 6.5692 6.42898 5.72125 6.68864 4.82456C6.95726 3.91813 7.34229 3.04581 7.84371 2.2076C8.35409 1.35965 8.96744 0.623781 9.68376 0L11 1.24269C10.3195 2.10039 9.74644 3.05556 9.28083 4.10819C8.82418 5.15107 8.59585 6.2232 8.59585 7.32456V10H6.29915Z"
                fill="white"
              />
            </svg>
            <span className={S.commenttext}>{t('comment')}</span>

            <div className={S.commentPersonInner}>
              <Image
                src={'/images/peoples/4.png'}
                width={44}
                height={44}
                alt="person"
              />
              <div className={S.commentInner}>
                <span className={S.commentName}>{t('igor')}</span>
                <span className={S.commentRole}>Project Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
