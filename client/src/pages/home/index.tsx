import React from 'react'
import { Title, Text, Container } from '@mantine/core'

import TwoColumnGrid from '../../globals/twoColumnGrid'
import { useStyles } from './styles'

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { classes } = useStyles()

  return (
    <>
      <div className={classes.wrapper}>
        <Title className={classes.title}>
          University Placement Cell
          <Text component="div" inherit className={classes.highlight}>
            Jamia Millia Islamia
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Some facny description of the placement cell Jamia millia islamia
          </Text>
        </Container>
      </div>

      <TwoColumnGrid>
        <div>Hello</div>
        <div>Hello</div>
      </TwoColumnGrid>
    </>
  )
}

export default Home
