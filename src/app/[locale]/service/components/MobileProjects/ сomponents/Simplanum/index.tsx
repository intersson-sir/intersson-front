'use client'

import Image from 'next/image'

import { useProject } from '@/providers/ProjectsModal'

import S from './Simplanum.module.scss'

const Simplanum = () => {
  const { setIsSimplaniumOpen } = useProject()

  return (
    <button className={S.imageSquare} onClick={() => setIsSimplaniumOpen(true)}>
      <Image src={'/images/simplanum.png'} fill alt="ege" />
    </button>
  )
}

export default Simplanum
