import { useTranslations } from 'next-intl'

import S from './Steps.module.scss'

const Steps = () => {
  const t = useTranslations('ServiceMobile.Steps')

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
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Analyze.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>{t('Analyze.sbor')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.treb')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Analyze.opred')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.metr')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Analyze.podgt')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.tz')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>System Analyst</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Project.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>
                      {t('Project.create')}
                    </span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Project.contract')}
                    </span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Project.podg')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Project.server')}{' '}
                    </span>
                    <span className={S.cardGreyText}>{t('Project.back')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Project.ver')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Project.polz')} </span>
                    <span className={S.cardGreyText}>{t('Project.front')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>{t('Project.design')}</span>
                <span className={S.tag}>DevOps</span>
                <span className={S.tag}>{t('Project.backEnd')}</span>
                <span className={S.tag}>{t('Project.frontEnd')}</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Dev.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>{t('Dev.provod')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Dev.system')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.ystr')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.lyb')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Dev.error')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>QA</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Support.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>{t('Support.pomog')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Support.razv')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Support.and')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Support.ylysh')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Support.soot')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Soft Premier Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
