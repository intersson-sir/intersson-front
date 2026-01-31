'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Burger from 'public/icons/burger.svg'
import LogoTitle from 'public/icons/logo_title.svg'
import { useState } from 'react'

import URLS from '@/configs/urls'
import Button from '@/ui/Button'
import Dialog from '@/ui/SlideDialog'

import { NavLink } from '../Header'
import LocaleSwitch from '../LocaleSwitch'
import SwitchTheme from '../SwitchTheme'
import S from './MobileMenu.module.scss'

const MobileMenu = ({ links }: { links: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Header')
  const router = useRouter()

  const goToRoute = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={S.btn}>
        <Burger width={15} height={8} />
      </button>
      <Dialog open={isOpen} toggleOpen={setIsOpen} className={S.dialog}>
        <div className={S.wrap}>
          <div className={S.logo}>
            <div className={S.logoImg}>
              <Image src={'/images/logo.png'} alt="logo" fill />
            </div>
            <div className={S.logoTitle}>
              <LogoTitle width={158} height={27} />
            </div>
            <div className={S.logoTitleMobile}>
              <LogoTitle width={124} height={22} />
            </div>
          </div>
          <div className={S.nav}>
            {links.map(elem => {
              return (
                <button
                  key={elem.link}
                  onClick={() => goToRoute(elem.link)}
                  className={S.item}
                >
                  {elem.title}
                </button>
              )
            })}
          </div>
          <div className={S.actions}>
            <SwitchTheme />
            <LocaleSwitch onClick={() => setIsOpen(false)} />
          </div>
          <Button size="m" color="primary" onClick={() => goToRoute(URLS.FORM)}>
            {t('form')}
          </Button>
        </div>
      </Dialog>
    </div>
  )
}

export default MobileMenu
