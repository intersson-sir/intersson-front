import '@/globals.scss'
import 'swiper/css'

import type { Metadata } from 'next'

// import { headers } from 'next/headers'
import CookieProvider from '@/providers/CookieProvider'
import Metrica from '@/providers/Metrica'
import NextIntlProvider from '@/providers/NextIntlProvider'
import { ProjectsProvider } from '@/providers/ProjectsModal'
import ThemeCustomProvider from '@/providers/ThemeProvider'

import Footer from './components/Footer'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'INTERSSON',
  description:
    'INTERSSON is a full-cycle software development company. We build web, mobile, AI, and blockchain solutions for businesses worldwide.',
  keywords:
    'software development, web development, mobile apps, AI solutions, blockchain, fintech, startup MVP, enterprise software',
  openGraph: {
    title: 'INTERSSON - Full-Cycle Software Development',
    description:
      'We turn ideas into reality. Expert team delivering high-quality software solutions: Web, Mobile, AI, Blockchain.',
    type: 'website',
    siteName: 'INTERSSON',
    images: [
      {
        url: '/icons/faviconintersson.png',
        width: 512,
        height: 512,
        alt: 'INTERSSON Logo'
      }
    ]
  },
  icons: {
    icon: '/icons/faviconintersson.png',
    shortcut: '/icons/faviconintersson.png',
    apple: '/icons/faviconintersson.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // const headersList = headers()

  return (
    <html lang="en">
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
