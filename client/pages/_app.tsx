import type { AppProps } from 'next/app'

import '../styles/globals.css'
import RootWrapper from '../components/globals/rootWrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootWrapper>
      <Component {...pageProps} />
    </RootWrapper>
  )
}

export default MyApp
