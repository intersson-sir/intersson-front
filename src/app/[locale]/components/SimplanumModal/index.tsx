'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import { useProject } from '@/providers/ProjectsModal'
import Button from '@/ui/Button'
import ModalSlide from '@/ui/ModalSlide'

import S from './SimplanumModal.module.scss'

type SimplanumModal = {
  isOpen: boolean
  onOpen: (value: boolean) => void
}

const SimplanumModal = ({ isOpen, onOpen }: SimplanumModal) => {
  const t = useTranslations('Projects.Simplanium')

  const { setIsEgeOpen, setIsSimplaniumOpen } = useProject()

  const goToNext = () => {
    setIsSimplaniumOpen(false)
    setIsEgeOpen(true)
  }
  return (
    <ModalSlide open={isOpen} toggleOpen={onOpen}>
      <div className={S.wrap}>
        <div className={S.header}>
          <span className={S.year}>2022</span>
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
              src={'/images/simplanum.png'}
              fill
              alt="simplanum"
              style={{
                objectPosition: 'left',
                objectFit: 'cover',
                borderRadius: '24px'
              }}
            />
          </div>
          <div className={S.secondImg}>
            <Image
              src={'/images/simplanum_1.jpg'}
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
              <Button size="m" onClick={() => setIsSimplaniumOpen(false)}>
                ← {t('project')}
              </Button>
            </Link>
          </div>
          <div className={S.footerInfo} onClick={goToNext}>
            <span className={S.nextTitle}>{t('next')}</span>
            <span className={S.nextProject}>
              ЕГЭшка. <span className={S.nextProjectName}>{t('merlines')}</span>
            </span>
            <span className={S.arrow}>→</span>
          </div>
        </div>
      </div>
    </ModalSlide>
  )
}

export default SimplanumModal
