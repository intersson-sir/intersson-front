'use client'

import Image from 'next/image'

import { useProject } from '@/providers/ProjectsModal'

import S from './Ege.module.scss'

const Ege = () => {
  const { setIsEgeOpen } = useProject()
  return (
    <button className={S.image} onClick={() => setIsEgeOpen(true)}>
      <Image src={'/images/ege.png'} fill alt="ege" />
    </button>
  )
}

export default Ege
