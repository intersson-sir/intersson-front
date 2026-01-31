import { Pathnames } from 'next-intl/navigation'

export type localeType = 'en' | 'ru'

export const locales: localeType[] = ['en', 'ru']

export type LocaleType = typeof locales

export const pathnames = {
  '/': '/'
  // '/pathnames': {
  //   en: '/pathnames',
  //   de: '/pfadnamen'
  // }
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
