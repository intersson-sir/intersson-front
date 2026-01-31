'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './EgeModal.module.scss'

type EgeModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const EgeModal = ({ isOpen, onOpen }: EgeModal) => {
  const t = useTranslations('Projects.Ege')

  const { setIsEgeOpen, setIsSimplaniumOpen } = useProject()

  const goToNext = () => {
    setIsEgeOpen(false)
    setIsSimplaniumOpen(true)
  }
  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <div className={S.header}>
          <span className={S.year}>2023</span>
          <div className={S.headerInfo}>
            <span className={S.title}>{t('title')}</span>
            <span className={S.subTitle}>{t('subTitle')}</span>
          </div>
          <div className={S.steks}>
            <span className={S.tag}>Swift</span>
            <span className={S.tag}>Java</span>
          </div>
          <span className={S.desc}>{t('desc')}</span>
        </div>
        <div className={S.middle}>
          <div className={S.firstImg}>
            <Image
              src={'/images/ege_2.png'}
              fill
              alt="ege"
              style={{
                objectPosition: 'left',
                objectFit: 'cover',
                borderRadius: '24px'
              }}
            />
          </div>
          <div className={S.secondImg}>
            <Image
              src={'/images/ege_16/9.jpg'}
              fill
              alt="ege"
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
              <Button size="m" onClick={() => setIsEgeOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              Simplanum.{' '}
              <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default EgeModal
