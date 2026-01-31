import createMiddleware from 'next-intl/middleware'

import { pathnames } from './configs/config'

export default createMiddleware({
  defaultLocale: 'ru',
  locales: ['en', 'ru'],
  pathnames,
  localePrefix: 'never'
})

export const config = {
  matcher: ['/', '/(ru|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
