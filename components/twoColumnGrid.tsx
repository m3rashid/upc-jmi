import React from 'react'
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridGap: '20px',
    minWidth: '70%',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
      minWidth: 'calc(100% - 32px)',
    },
  },
}))

interface IProps {
  children: JSX.Element[]
}

const TwoColumnGrid: React.FC<IProps> = ({ children }) => {
  const { classes } = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default TwoColumnGrid
