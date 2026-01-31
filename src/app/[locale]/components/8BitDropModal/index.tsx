'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './BitDropModal.module.scss'

type BitDropModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const BitDropModal = ({ isOpen, onOpen }: BitDropModal) => {
  const t = useTranslations('Projects.8Bit')
  const { setIs8BitDropOpen, setIsMerlinesOpen } = useProject()

  const goToNext = () => {
    setIs8BitDropOpen(false)
    setIsMerlinesOpen(true)
  }

  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <video
          playsInline
          src="/videos/8bit.mp4"
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
              src={'/images/8bit_1.png'}
              fill
              alt="8bit"
              style={{ borderRadius: '24px' }}
            />
          </div>
          <div className={S.secondImg}>
            <Image
              src={'/images/8bit_2.png'}
              fill
              alt="8bit"
              style={{ borderRadius: '24px' }}
            />
          </div>
        </div>
        <div className={S.footer}>
          <span className={S.result}>{t('resultTag')}</span>
          <span className={S.footerDesc}>{t('result')}</span>
          <div className={S.btn}>
            <Link href={URLS.FORM}>
              <Button size="m" onClick={() => setIs8BitDropOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              Merlines.{' '}
              <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default BitDropModal
