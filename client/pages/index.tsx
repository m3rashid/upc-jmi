import type { NextPage } from 'next'
import { createStyles, Title, Text, Container } from '@mantine/core'
import Head from 'next/head'
import TwoColumnGrid from '../components/twoColumnGrid'
import PageWrapper from '../components/pageWrapper'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 4,
  },
  title: {
    fontWeight: 800,
    fontSize: 40,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    marginBottom: theme.spacing.xs,
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },
  highlight: {
    color: theme.colors.brand,
  },
  description: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    textAlign: 'center',
  },
}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <PageWrapper>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={classes.wrapper}>
        <Title className={classes.title}>
          Department of Computer Science
          <Text component="div" inherit className={classes.highlight}>
            Jamia Millia Islamia
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Some facny description of the Department of Computer Science Jamia
            millia islamia
          </Text>
        </Container>
      </div>

      <TwoColumnGrid>
        <div>Hello</div>
        <div>Hello</div>
      </TwoColumnGrid>
    </PageWrapper>
  )
}

export default Home