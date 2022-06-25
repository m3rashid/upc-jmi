import React from 'react'
import { Container, createStyles } from '@mantine/core'

import BreadCrumbs from './globals/breadCrumbs'

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
  children: any
}

const PageWrapper: React.FC<IProps> = ({ children }) => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <BreadCrumbs />
        {children}
      </Container>
    </div>
  )
}

export default PageWrapper
