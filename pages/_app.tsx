import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import 'styles/globals.css'
import RootWrapper from 'components/globals/rootWrapper'
import PageWrapper from 'components/globals/pageWrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <RootWrapper>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </RootWrapper>
    </SessionProvider>
  )
}

export default MyApp
