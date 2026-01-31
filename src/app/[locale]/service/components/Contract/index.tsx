import { useTranslations } from 'next-intl'
import Info from 'public/icons/info.svg'

import S from './Contract.module.scss'

const Contract = () => {
  const t = useTranslations('ServicePage.Contract')

  return (
    <div className={S.inner}>
      <div className="container">
        <div className={S.wrap}>
          <div className={S.info}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.subTitle}>{t('subTitle')}</span>
          </div>
          <div className={S.list}>
            <div className={S.mobileLine}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="606"
                viewBox="0 0 6 606"
                fill="none"
              >
                <path
                  d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 605.887L5.88675 603L3 600.113L0.113249 603L3 605.887ZM2.5 3V603H3.5V3H2.5Z"
                  fill="#5348D1"
                />
              </svg>
            </div>
            <div className={S.block}>
              <span className={S.stepTitle}>{t('start')}</span>
              <div className={S.line}></div>
              <div className={S.content}>
                <div className={S.contentInner}>
                  <span>{t('step1')}</span>
                </div>
              </div>
            </div>
            <div className={S.block}>
              <span className={S.stepTitle} style={{ color: '#5348D1' }}>
                {t('middle')}
              </span>
              <div className={S.lineBlue}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="383"
                  viewBox="0 0 6 383"
                  fill="none"
                >
                  <path
                    d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 382.887L5.88675 380L3 377.113L0.113249 380L3 382.887ZM2.5 3V380H3.5V3H2.5Z"
                    fill="#5348D1"
                  />
                </svg>
              </div>
              <div className={S.content} style={{ top: '60px' }}>
                <div className={S.contentInner}>
                  <span>{t('step2')}</span>
                  <div className={S.footer}>
                    <Info width={16} height={16} />
                    <span className={S.footerText}>{t('step2Desc')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={S.block}>
              <div className={S.line} style={{ left: '50%' }}></div>
              <div className={S.content} style={{ top: '160px' }}>
                <div className={S.contentInner}>
                  <span>{t('step3')}</span>
                </div>
              </div>
            </div>
            <div className={S.block}>
              <div className={S.line} style={{ left: '80%' }}></div>
              <div className={S.content} style={{ top: '200px' }}>
                <div className={S.contentInner}>
                  <span>{t('step4')}</span>
                </div>
              </div>
            </div>
            <div className={S.block}>
              <span className={S.stepTitle} style={{ textAlign: 'right' }}>
                {t('finish')}
              </span>
              <div className={S.line} style={{ left: '80%' }}></div>
              <div className={S.content} style={{ top: '230px' }}>
                <div className={S.contentInner}>
                  <span>{t('step5')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contract
