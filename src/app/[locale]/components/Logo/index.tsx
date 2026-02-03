'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import LogoDark from 'public/icons/logo-dark-new.svg'
import LogoLight from 'public/icons/logo-light-new.svg'

import { localeType } from '@/configs/config'
import { Link } from '@/navigation'

import S from './Logo.module.scss'

const Logo = () => {
  const locale = useLocale() as localeType
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <Link className={S.logo} href={'/'} locale={locale}>
      {isDark ? (
        <LogoDark className={S.logoMain} />
      ) : (
        <LogoLight className={S.logoMain} />
      )}
    </Link>
  )
}

export default Logo
