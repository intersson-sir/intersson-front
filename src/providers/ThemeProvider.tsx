import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

const ThemeCustomProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
}

export default ThemeCustomProvider
