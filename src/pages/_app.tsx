import type { AppProps } from 'next/app'

import 'styles/globals.css'
import RootWrapper from 'components/globals/rootWrapper'
import PageWrapper from 'components/globals/pageWrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootWrapper>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </RootWrapper>
  )
}

export default MyApp
