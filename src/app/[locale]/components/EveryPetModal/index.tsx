'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './EveryPetModal.module.scss'

type EveryPetModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const EveryPetModal = ({ isOpen, onOpen }: EveryPetModal) => {
  const t = useTranslations('Projects.EveryPet')

  const { setIsRuKingOpen, setIsEverypetOpen } = useProject()

  const goToNext = () => {
    setIsEverypetOpen(false)
    setIsRuKingOpen(true)
  }
  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <video
          playsInline
          src="/videos/everypet.mp4"
          className={S.video}
          autoPlay
          muted
          loop
        ></video>
        <div className={S.header}>
          <span className={S.year}>2023</span>
          <div className={S.headerInfo}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.subTitle}>{t('subTitle')}</span>
          </div>
          <div className={S.steks}>
            <span className={S.tag}>VueJS</span>
            <span className={S.tag}>PHP</span>
            <span className={S.tag}>Laravel</span>
          </div>
          <span className={S.desc}>{t('desc')}</span>
        </div>
        <div className={S.middle}>
          <div className={S.firstImg}>
            <Image
              src={'/images/everypet_2.png'}
              fill
              alt="8bit"
              style={{
                objectPosition: 'left',
                objectFit: 'cover',
                borderRadius: '24px'
              }}
            />
          </div>
          <div className={S.secondImg}>
            <Image
              src={'/images/everypet_1.png'}
              fill
              alt="8bit"
              style={{ borderRadius: '24px', objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={S.footer}>
          <span className={S.result}>{t('resultTag')}</span>
          <span className={S.footerDesc}>{t('result')}</span>
          <div className={S.btn}>
            <Link href={URLS.FORM}>
              <Button size="m" onClick={() => setIsEverypetOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              RuKing. <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default EveryPetModal
