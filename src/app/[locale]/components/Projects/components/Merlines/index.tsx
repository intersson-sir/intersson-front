'use client'
import { useProject } from '@/providers/ProjectsModal'

import S from './Merlines.module.scss'

const Merlines = () => {
  const { setIsMerlinesOpen } = useProject()

  return (
    <video
      onClick={() => setIsMerlinesOpen(true)}
      src="/videos/merlines.mp4"
      className={S.dropVideo}
      muted
      autoPlay
      playsInline
      loop
    ></video>
  )
}

export default Merlines
