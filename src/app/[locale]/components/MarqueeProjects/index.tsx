import Drop from 'public/icons/projects/drop.svg'
import Everypet from 'public/icons/projects/everypet.svg'
import FazaWatches from 'public/icons/projects/FazaWatches.svg'
import JwMarriott from 'public/icons/projects/JW-Marriott.svg'
import Merlines from 'public/icons/projects/merlines.svg'
import Neom from 'public/icons/projects/neom5478-removebg-preview.svg'
import Photo2024 from 'public/icons/projects/photo_2024_10_26_12_15_18-removebg-preview.svg'
import Rabbit from 'public/icons/projects/rabbit.svg'
import Ruking from 'public/icons/projects/ruking.svg'
import Marquee from 'react-fast-marquee'

import S from './MarqueeProjects.module.scss'

const MarqueeProjects = () => {
  return (
    <div className={S.wrap}>
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
        <div className={S.block}>
          <div className={S.neom}>
            <Neom />
          </div>
        </div>
        <div className={S.block}>
          <div className={S.photo2024}>
            <Photo2024 />
          </div>
        </div>
        <div className={S.block}>
          <div className={S.jwMarriott}>
            <JwMarriott />
          </div>
        </div>
        <div className={S.block}>
          <div className={S.fazaWatches}>
            <FazaWatches />
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeProjects
