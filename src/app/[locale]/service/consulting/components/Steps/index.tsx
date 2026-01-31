import { useTranslations } from 'next-intl'

import S from './Steps.module.scss'

const Steps = () => {
  const t = useTranslations('ServiceConsulting.Steps')

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
                    <span className={S.cardBlueText}>{t('Analyze.opred')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Analyze.and')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.audit')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Analyze.sbor')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Analyze.infr')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>Project Manager</span>
                <span className={S.tag}>L4 engineer</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Project.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>
                      {t('Project.provod')}
                    </span>{' '}
                    <span className={S.cardBlueText}>{t('Project.audit')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Project.vp')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Project.nagruz')}{' '}
                    </span>
                    <span className={S.cardGreyText}>{t('Project.and')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Project.bez')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>
                      {t('Project.analyze')}{' '}
                    </span>
                    <span className={S.cardGreyText}>{t('Project.code')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>DevOps</span>
                <span className={S.tag}>SecOps</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Dev.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.report')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.risk')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>Project Manager</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Support.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>
                      {t('Support.razrab')}
                    </span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Support.problem')}
                    </span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Support.give')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Support.rek')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Support.pers')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>
                      {t('Support.support')}
                    </span>{' '}
                    <span className={S.cardGreyText}>{t('Support.eks')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>Project manager</span>
                <span className={S.tag}>Development team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
