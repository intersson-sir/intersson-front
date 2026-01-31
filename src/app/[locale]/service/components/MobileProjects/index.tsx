import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import Ege from './ сomponents/Ege'
import Simplanum from './ сomponents/Simplanum'
import S from './Projects.module.scss'

const MobileProjects = () => {
  const t = useTranslations('ServiceMobile.Projects')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.desc}>{t('desc')}</span>
        <Link href={URLS.PROJECTS} className={S.moreLink}>
          <button className={S.more}>{t('more')}</button>
        </Link>
        <div className={S.projectInner}>
          <div className={S.blockWrap}>
            <Ege />
            <div className={S.blockInfo}>
              <span className={S.blockTitle}>ЕГЭшка</span>
              <div className={S.tags}>
                <span className={S.tag}>Swift</span>
                <span className={S.tag}>Java</span>
                <span className={S.tag}>+4</span>
              </div>
              <span className={S.blockDesc}>{t('egeDesc')}</span>
            </div>
          </div>
          <div className={S.blockWrap}>
            <Simplanum />
            <div className={S.blockInfo}>
              <span className={S.blockTitle}>Simplanum</span>
              <div className={S.tags}>
                <span className={S.tag}>Swift</span>
                <span className={S.tag}>Java</span>
                <span className={S.tag}>+4</span>
              </div>
              <span className={S.blockDesc}>{t('simplDesc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileProjects
