import '../styles/globals.css'
import type { AppProps } from 'next/app'

import RootWrapper from '../components/globals/rootWrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootWrapper>
      <Component {...pageProps} />
    </RootWrapper>
  )
}

export default MyApp
