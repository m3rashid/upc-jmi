import React from 'react'

import { useStyles } from './styles'

interface IProps {}

const Publication: React.FC<IProps> = () => {
  const { classes } = useStyles()
  return (
    <>
      <div>Publication</div>
    </>
  )
}

export default Publication
