import React from 'react'

import { useStyles } from './styles'

interface IProps {}

const Events: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <div>Events</div>
    </>
  )
}

export default Events
