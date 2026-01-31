import { useTranslations } from 'next-intl'

import S from './Steps.module.scss'

const Steps = () => {
  const t = useTranslations('ServiceAI.Steps')

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
                <span className={S.tag}>ML engineer</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Project.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>{t('Project.vibor')}</span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Project.models')}
                    </span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Project.project')}
                    </span>{' '}
                    <span className={S.cardGreyText}>{t('Project.zero')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Project.podgt')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Project.data')}</span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Project.oneModel')}
                    </span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>System Analyst</span>
                <span className={S.tag}>ML engineer</span>
                <span className={S.tag}>{t('Project.arch')}</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Dev.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.create')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.model')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.study')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.data')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.test')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.work')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>{t('Dev.back')}</span>
                <span className={S.tag}>ML engineer</span>
                <span className={S.tag}>QA</span>
                <span className={S.tag}>DevOps</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Support.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>{t('Support.work')}</span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Support.newData')}
                    </span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Support.obes')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Support.server')}
                    </span>{' '}
                    <span className={S.cardGreyText}>{t('Support.and')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Support.tech')}</span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Support.support')}
                    </span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Support.cons')}</span>{' '}
                    <span className={S.cardGreyText}>
                      {t('Support.future')}
                    </span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>QA</span>
                <span className={S.tag}>Business Analyst</span>
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
