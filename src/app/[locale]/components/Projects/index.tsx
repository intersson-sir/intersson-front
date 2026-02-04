import Image from 'next/image'
import { useTranslations } from 'next-intl'

import BitDrop from './components/BitDrop'
import EveryPet from './components/EveryPet'
import Merlines from './components/Merlines'
import Ruking from './components/Ruking'
import S from './Projects.module.scss'

const Projects = () => {
  const t = useTranslations('Projects')
  return (
    <div className="container" id="projects">
      <div className={S.wrap}>
        <div className={S.header}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.desc}>{t('desc')}</span>
        </div>
        <div className={S.list}>
          <div className={S.drop}>
            <div className={S.blockWrap}>
              <BitDrop />
              <div className={S.blockInfo}>
                <span className={S.blockTitle}>Faza Watches</span>
                <div className={S.tags}>
                  <span className={S.tag}>React.js</span>
                  <span className={S.tag}>Next.js</span>
                  <span className={S.tag}>Node.js</span>
                  <span className={S.tag}>+11</span>
                </div>
                <span className={S.blockDesc}>{t('dropDesc')}</span>
              </div>
            </div>
            <div className={S.dropImg}>
              <Image
                src={'/images/fazaicon.png'}
                fill
                alt="Faza Watches"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
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
              <span className={S.blockDesc}>{t('everypetDesc')}</span>
            </div>
          </div>
        </div>
        <div className={S.drop}>
          <div className={S.blockWrap}>
            <Ruking />
            <div className={S.blockInfo}>
              <span className={S.blockTitle}>YSV Brand</span>
              <div className={S.tags}>
                <span className={S.tag}>React.js</span>
                <span className={S.tag}>Next.js</span>
                <span className={S.tag}>Node.js</span>
                <span className={S.tag}>+11</span>
              </div>
              <span className={S.blockDesc}>{t('rukingDesc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
