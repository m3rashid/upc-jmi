import React from 'react'
import { Sun, MoonStars } from 'tabler-icons-react'
import { useMantineColorScheme, Tooltip, UnstyledButton } from '@mantine/core'

import useStyles from './styles'

const ChangeColorScheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, cx } = useStyles()

  return (
    <Tooltip
      label="Toggle Color Scheme"
      position="right"
      withArrow
      transitionDuration={0}
    >
      <UnstyledButton
        onClick={() => toggleColorScheme()}
        className={cx(classes.link)}
      >
        {colorScheme === 'dark' ? <Sun /> : <MoonStars />}
      </UnstyledButton>
    </Tooltip>
  )
}

export default ChangeColorScheme
