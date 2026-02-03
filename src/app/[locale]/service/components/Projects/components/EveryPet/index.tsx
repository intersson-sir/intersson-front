'use client'
import { useProject } from '@/providers/ProjectsModal'

import S from './EveryPet.module.scss'

const EveryPet = () => {
  const { setIsEverypetOpen } = useProject()

  return (
    <video
      onClick={() => setIsEverypetOpen(true)}
      src="/videos/kite-export.mp4"
      className={S.dropVideoSquare}
      muted
      autoPlay
      playsInline
      loop
    ></video>
  )
}

export default EveryPet
