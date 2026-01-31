'use client'
import { useProject } from '@/providers/ProjectsModal'

import S from './BitDrop.module.scss'

const BitDrop = () => {
  const { setIs8BitDropOpen } = useProject()

  return (
    <>
      <video
        onClick={() => setIs8BitDropOpen(true)}
        src="/videos/8bit.mp4"
        className={S.dropVideo}
        muted
        autoPlay
        playsInline
        loop
      ></video>
    </>
  )
}

export default BitDrop
