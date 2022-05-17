import React from 'react'

import { useStyles } from './styles'

interface IProps {}

const Notices: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <div>Notices</div>
    </>
  )
}

export default Notices
