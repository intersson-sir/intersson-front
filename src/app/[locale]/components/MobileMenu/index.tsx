'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Burger from 'public/icons/burger.svg'
import { useState } from 'react'

import URLS from '@/configs/urls'
import Button from '@/ui/Button'
import Dialog from '@/ui/SlideDialog'

import { NavLink } from '../Header'
import LocaleSwitch from '../LocaleSwitch'
import Logo from '../Logo'
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
            <Logo />
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
