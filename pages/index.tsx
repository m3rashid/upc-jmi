import type { NextPage } from 'next'
import { createStyles, Title, Text, Container } from '@mantine/core'

import TwoColumnGrid from 'components/twoColumnGrid'

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
    fontFamily: 'Quicksand, sans-serif',
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
  reachUsTitle: {
    fontFamily: 'Quicksand, sans-serif',
    marginTop: 20,
  },
}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <div className={classes.wrapper}>
        <Title className={classes.title}>
          Department of Computer Science
          <Text component="div" inherit className={classes.highlight}>
            Jamia Millia Islamia
          </Text>
        </Title>

        <Container>
          <Text size="lg" className={classes.description}>
            Jamia Millia Islamia was founded at Aligarh in the United Province,
            India in 1920 during the Khilafat and Non-Cooperation Movement in
            response to Gandhiji&apos;s call to boycott government supported
            educational institutions. JMI moved from Aligarh to Delhi in the
            year 1925 and was made a central university by Parliamentary act of
            1988. Today, Jamia Millia Islamia is one of the most prominent and
            promising central university of the country. JMI was recently
            awarded an &lsquo;A&rsquo; Grade by NAAC (National Assessment and
            Accreditation Council).
          </Text>
        </Container>
      </div>

      <TwoColumnGrid>
        <div>Hello</div>
        <div>Hello</div>
      </TwoColumnGrid>

      <Container sx={{ marginTop: 100 }}>
        <Title order={3} className={classes.title} sx={{ fontSize: '2rem' }}>
          How to reach us
        </Title>
        <Text align="center">
          Jamia Millia Islamia is located on the south-east corner of Delhi,
          near various beautiful places such as Lodhi Garden, Chattarpur Mandir
          and Lotus Temple. One may reach the University by road or by metro, It
          is well-connected and may take any of the following routes to reach it
        </Text>

        <Title order={4} className={classes.reachUsTitle}>
          New Delhi Railway Station
        </Title>
        <Text>
          It takes just under an hour to travel the 13.3 km between the station
          and the University, via Mathura road. Buses, Cabs, auto rickshaws,
          etc. are the various modes from which one may choose to cover the
          distance, if there is no private vehicles available at disposal.
        </Text>

        <Title order={4} className={classes.reachUsTitle}>
          INDIRA GANDHI INTERNATIONAL AIRPORT
        </Title>
        <Text>
          The 19 kilometers between the airport and University usually requires
          an hour to commute via road.
        </Text>

        <Title order={4} className={classes.reachUsTitle}>
          METRO
        </Title>
        <Text>
          Nearest metro stations are &lsquo;Jamia Millia Islamia&rsquo; and
          &lsquo;Sukhdev Vihar&rsquo;, on magenta line, which are at walking
          distance from the University.
        </Text>

        <Title order={4} className={classes.reachUsTitle}>
          BUS STATION
        </Title>
        <Text>
          There are numerous bus stops near the University that help enhance the
          connectivity between Jamia and the rest of the city.
        </Text>
      </Container>
    </>
  )
}

export default Home
