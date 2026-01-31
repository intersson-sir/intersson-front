'use client'

import { YandexMetricaProvider } from 'next-yandex-metrica'

const Metrica = ({ children }: { children: React.ReactNode }) => {
  return (
    <YandexMetricaProvider
      tagID={98_239_960}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }}
    >
      {children}
    </YandexMetricaProvider>
  )
}

export default Metrica
