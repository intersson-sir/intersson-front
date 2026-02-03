import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import EveryPet from './components/EveryPet'
import Merlines from './components/Merlines'
import S from './Projects.module.scss'

const Projects = () => {
  const t = useTranslations('ServicePage.Projects')
  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.desc}>{t('desc')}</span>
        <Link href={URLS.PROJECTS} className={S.moreLink}>
          <button className={S.more}>{t('more')}</button>
        </Link>
        <div className={S.projectInner}>
          <div className={S.blockWrap}>
            <Merlines />
            <div className={S.blockInfo}>
              <span className={S.blockTitle}>Merlines</span>
              <div className={S.tags}>
                <span className={S.tag}>React.js</span>
                <span className={S.tag}>Next.js</span>
                <span className={S.tag}>+11</span>
              </div>
              <span className={S.blockDesc}>{t('merlinesDesc')}</span>
            </div>
          </div>
          <div className={S.blockWrap}>
            <EveryPet />
            <div className={S.blockInfo}>
              <span className={S.blockTitle}>Real Estate</span>
              <div className={S.tags}>
                <span className={S.tag}>React.js</span>
                <span className={S.tag}>Next.js</span>
                <span className={S.tag}>+11</span>
              </div>
              <span className={S.blockDesc}>{t('petDesc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
