import React from 'react'
import StatsGrid from '../../components/stats'

import { useStyles } from './styles'

interface IProps {}

const Placement: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <StatsGrid />
    </>
  )
}

export default Placement
