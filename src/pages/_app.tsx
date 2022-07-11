import { withTRPC } from '@trpc/next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import 'styles/globals.css'
import { AppRouter } from 'server/routers'
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

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'

    return { url }
  },
  ssr: true,
})(MyApp)
