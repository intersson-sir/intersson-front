import classNames from 'classnames'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'
import Button from '@/ui/Button'

import LocaleSwitch from '../LocaleSwitch'
import Logo from '../Logo'
import MobileMenu from '../MobileMenu'
import SwitchTheme from '../SwitchTheme'
import S from './Header.module.scss'

export type NavLink = {
  title: string
  link: string
}

const Header = () => {
  const t = useTranslations('Header')

  const LINKS: NavLink[] = [
    {
      title: t('about'),
      link: URLS.ABOUT
    },
    {
      title: t('prices'),
      link: URLS.SERVICE
    },
    {
      title: t('work'),
      link: URLS.WORK
    },
    {
      title: t('projects'),
      link: URLS.PROJECTS
    },
    {
      title: t('contacts'),
      link: URLS.CONTACTS
    }
  ]

  return (
    <header className={S.inner}>
      <div className={classNames('container', S.headerWrap)}>
        <div className={S.wrap}>
          <Logo />
          <nav className={S.nav}>
            {LINKS.map(elem => {
              return (
                <Link key={elem.link} href={elem.link} className={S.item}>
                  {elem.title}
                </Link>
              )
            })}
          </nav>
          <div className={S.actions}>
            <LocaleSwitch />
            <SwitchTheme />
            <Link href={URLS.FORM}>
              <Button size="m" color="primary">
                {t('form')}
              </Button>
            </Link>
          </div>
          <div className={S.mobileMenu}>
            <MobileMenu links={LINKS} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
