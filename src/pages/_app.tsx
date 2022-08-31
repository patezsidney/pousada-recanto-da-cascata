import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { WhatsApp } from '../components/whatsapp'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
      <WhatsApp />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
