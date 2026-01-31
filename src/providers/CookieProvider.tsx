'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import COOKIES_KEYS from '@/configs/cookies'

import CookieModal from '../app/[locale]/components/CookieModal'

const CookieProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      const isAccept = !Cookies.get(COOKIES_KEYS.COOKIE_ACCEPT)
      setIsOpen(isAccept)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const acceptCookie = () => {
    setIsOpen(false)
    Cookies.set(COOKIES_KEYS.COOKIE_ACCEPT, 'true')
  }

  const discardCookie = () => {
    setIsOpen(false)
    router.push('https://google.com')
  }

  return (
    <>
      {children}
      <CookieModal
        isOpen={isOpen}
        onAccept={() => acceptCookie()}
        onDiscard={discardCookie}
      />
    </>
  )
}

export default CookieProvider
