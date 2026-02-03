'use client'
import { useProject } from '@/providers/ProjectsModal'

import S from './Ruking.module.scss'

const Ruking = () => {
  const { setIsRuKingOpen } = useProject()

  return (
    <video
      onClick={() => setIsRuKingOpen(true)}
      src="/videos/ysv.mp4"
      className={S.dropVideo}
      muted
      playsInline
      autoPlay
      loop
    ></video>
  )
}

export default Ruking
