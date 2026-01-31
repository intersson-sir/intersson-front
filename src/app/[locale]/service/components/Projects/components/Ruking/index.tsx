'use client'
import { useProject } from '@/providers/ProjectsModal'

import S from './Ruking.module.scss'

const Ruking = () => {
  const { setIsRuKingOpen } = useProject()

  return (
    <video
      onClick={() => setIsRuKingOpen(true)}
      src="/videos/ruking.mp4"
      className={S.dropVideo}
      muted
      autoPlay
      loop
      playsInline
    ></video>
  )
}

export default Ruking
