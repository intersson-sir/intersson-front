import { useTranslations } from 'next-intl'

import S from './Steps.module.scss'

const Steps = () => {
  const t = useTranslations('ServiceDigital.Steps')

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
                    <span className={S.cardBlueText}>{t('Analyze.sbor')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Analyze.treb')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Analyze.opred')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Analyze.potreb')}
                    </span>{' '}
                    <span className={S.cardGreyText}>{t('Analyze.and')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.prior')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Analyze.sozd')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Analyze.plan')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>Project Manager</span>
                <span className={S.tag}>{t('Analyze.kons')}</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Project.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>{t('Project.nastr')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Project.and')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Project.dorab')}{' '}
                    </span>
                    <span className={S.cardGreyText}>
                      {t('Project.system')}
                    </span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>
                      {t('Project.razrab')}{' '}
                    </span>
                    <span className={S.cardGreyText}>{t('Project.neob')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>Development team</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Dev.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardGreyText}>{t('Dev.provod')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Dev.tren')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.sozd')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Dev.faq')}</span>
                  </span>
                  <span>
                    <span className={S.cardBlueText}>{t('Dev.kontrol')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.fast')}</span>{' '}
                    <span className={S.cardBlueText}>{t('Dev.prav')}</span>{' '}
                    <span className={S.cardGreyText}>{t('Dev.neo')}</span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>QA</span>
                <span className={S.tag}>{t('Dev.spec')}</span>
              </div>
            </div>
            <div className={S.card}>
              <div className={S.cardHeader}>
                <span className={S.cardTitle}>{t('Support.title')}</span>
                <div className={S.cardContent}>
                  <span>
                    <span className={S.cardBlueText}>
                      {t('Support.analyze')}
                    </span>{' '}
                    <span className={S.cardGreyText}>{t('Support.post')}</span>
                  </span>
                  <span>
                    <span className={S.cardGreyText}>{t('Support.grow')}</span>{' '}
                    <span className={S.cardBlueText}>
                      {t('Support.korrect')}
                    </span>
                  </span>
                </div>
              </div>
              <div className={S.cardFooter}>
                <span className={S.tag}>{t('Support.support')}</span>
                <span className={S.tag}>Business Analyst</span>
                <span className={S.tag}>Project manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
