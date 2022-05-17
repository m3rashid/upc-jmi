import React from 'react'

import { useStyles } from './styles'

interface IProps {}

const Students: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <div>Students</div>
    </>
  )
}

export default Students
