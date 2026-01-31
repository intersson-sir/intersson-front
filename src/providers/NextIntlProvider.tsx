import { NextIntlClientProvider, useMessages } from 'next-intl'
import { PropsWithChildren } from 'react'

const NextIntlProvider = ({ children }: PropsWithChildren) => {
  const messages = useMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default NextIntlProvider
