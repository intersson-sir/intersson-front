import '@/globals.scss'
import 'swiper/css'

import type { Metadata } from 'next'
import { headers } from 'next/headers'

import CookieProvider from '@/providers/CookieProvider'
import Metrica from '@/providers/Metrica'
import NextIntlProvider from '@/providers/NextIntlProvider'
import { ProjectsProvider } from '@/providers/ProjectsModal'
import ThemeCustomProvider from '@/providers/ThemeProvider'

import Footer from './components/Footer'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Soft Premier'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = headers()

  return (
    <html lang="en">
      <head>
        <title>Soft Premier</title>
        <link rel="icon" href="/icons/faviconintersson.png" />

        <meta name="description" content="Soft Premier" />
        <meta name="keywords" content="Soft Premier" />
        <meta property="og:title" content="Soft Premier" />
        <meta property="og:description" content="Soft Premier" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://${headersList.get('host')}/`}
        />
      </head>

      <body>
        <NextIntlProvider>
          <ThemeCustomProvider>
            <Metrica>
              <ProjectsProvider>
                <CookieProvider>
                  <Header />
                  {children}
                  <Footer />
                </CookieProvider>
              </ProjectsProvider>
            </Metrica>
          </ThemeCustomProvider>
        </NextIntlProvider>
      </body>
    </html>
  )
}
