'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './RuKingModal.module.scss'

type RuKingModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const RuKingModal = ({ isOpen, onOpen }: RuKingModal) => {
  const t = useTranslations('Projects.Ruking')

  const { setIsRuKingOpen, setIs8BitDropOpen } = useProject()

  const goToNext = () => {
    setIsRuKingOpen(false)
    setIs8BitDropOpen(true)
  }
  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <video
          src="/videos/ruking.mp4"
          className={S.video}
          autoPlay
          muted
          playsInline
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
              src={'/images/ruking_2.png'}
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
              src={'/images/ruking_1.png'}
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
              <Button size="m" onClick={() => setIsRuKingOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              8BitDrop.{' '}
              <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default RuKingModal
