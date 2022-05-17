import React from 'react'

import { useStyles } from './styles'

interface IProps {}

const StaffMembers: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <div>StaffMembers</div>
    </>
  )
}

export default StaffMembers
