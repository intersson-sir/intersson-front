import { useTranslations } from 'next-intl'
import Drop from 'public/icons/projects/drop.svg'
import Everypet from 'public/icons/projects/everypet.svg'
import Merlines from 'public/icons/projects/merlines.svg'
import Rabbit from 'public/icons/projects/rabbit.svg'
import Ruking from 'public/icons/projects/ruking.svg'
import Marquee from 'react-fast-marquee'

import S from './HeroSection.module.scss'

const HeroSection = () => {
  const t = useTranslations('ServicePage')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <Marquee autoFill>
          <div className={S.block}>
            <div className={S.drop}>
              <Drop />
            </div>
          </div>
          <div className={S.block}>
            <div className={S.ruking}>
              <Ruking />
            </div>
          </div>
          <div className={S.block}>
            <div className={S.everypet}>
              <Everypet />
            </div>
          </div>
          <div className={S.block}>
            <div className={S.merlines}>
              <Merlines />
            </div>
          </div>
          <div className={S.block}>
            <div className={S.rabbit}>
              <Rabbit />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default HeroSection
