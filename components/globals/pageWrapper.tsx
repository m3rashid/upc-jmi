import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, createStyles } from '@mantine/core'

import BreadCrumbs from 'components/globals/breadCrumbs'

export const useStyles = createStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: '10px',
    paddingBottom: '50px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
}))

interface IProps {
  children: React.ReactNode
}

const PageWrapper: React.FC<IProps> = ({ children }) => {
  const { classes } = useStyles()
  const { pathname: path } = useRouter()

  const title = path
    .split('/')
    .slice(-1)[0]
    .toLocaleUpperCase()
    .replaceAll('-', ' ')

  const pageTitle = title ? `${title} | JMI CSE` : 'JMI CSE'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
      </Head>
      <div className={classes.root}>
        <Container>
          <BreadCrumbs />
          {children}
        </Container>
      </div>
    </>
  )
}

export default PageWrapper
