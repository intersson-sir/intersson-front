'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './MerlinesModal.module.scss'

type MerlinesModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const MerlinesModal = ({ isOpen, onOpen }: MerlinesModal) => {
  const t = useTranslations('Projects.Merlines')

  const { setIsEverypetOpen, setIsMerlinesOpen } = useProject()

  const goToNext = () => {
    setIsMerlinesOpen(false)
    setIsEverypetOpen(true)
  }
  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <video
          playsInline
          src="/videos/merlines.mp4"
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
            <span className={S.tag}>React.js</span>
            <span className={S.tag}>MySQL</span>
            <span className={S.tag}>Next.js</span>
            <span className={S.tag}>Redis.io</span>
            <span className={S.tag}>Node.js</span>
            <span className={S.tag}>Docker</span>
            <span className={S.tag}>Redux.js</span>
            <span className={S.tag}>Kubernetes</span>
            <span className={S.tag}>PHP</span>
            <span className={S.tag}>gcp</span>
            <span className={S.tag}>Laravel</span>
            <span className={S.tag}>NGINX</span>
          </div>
          <span className={S.desc}>{t('desc')}</span>
        </div>
        <div className={S.middle}>
          <div className={S.firstImg}>
            <Image
              src={'/images/merlines_2.png'}
              fill
              alt="8bit"
              style={{
                borderRadius: '24px',
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
          </div>
          <div className={S.secondImg}>
            <Image
              src={'/images/merlines_1.png'}
              fill
              alt="8bit"
              style={{
                borderRadius: '24px',
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
          </div>
        </div>
        <div className={S.footer}>
          <span className={S.result}>{t('resultTag')}</span>
          <span className={S.footerDesc}>{t('result')}</span>
          <div className={S.btn}>
            <Link href={URLS.FORM}>
              <Button size="m" onClick={() => setIsMerlinesOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              Everypet.{' '}
              <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default MerlinesModal
