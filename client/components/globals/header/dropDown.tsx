import React from 'react'
import { useRouter } from 'next/router'
import { Text, Popover } from '@mantine/core'

import { Map } from './data'
import { useGlobalStyles } from '../globalStyles'

interface IProps {
  innerData: Map
  title: String
  innerRoute: String
}

const DropDown: React.FC<IProps> = ({ innerData, title, innerRoute }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const { classes, cx } = useGlobalStyles()
  const { pathname, push } = useRouter()
  const main = pathname.split('/')[1]

  return (
    <Popover
      opened={open}
      onClose={() => setOpen(false)}
      target={
        <Text
          className={cx(classes.link, {
            [classes.linkActive]: main === innerRoute,
          })}
          onClick={() => setOpen((o) => !o)}
        >
          {title}
        </Text>
      }
      width={260}
      position="bottom"
      withArrow
    >
      {Object.entries(innerData).map(([_, action]) => {
        return (
          <Text
            className={classes.link}
            key={action.name}
            onClick={(e: any) => {
              push(action.endpoint)
              setOpen(false)
            }}
          >
            {action.label}
          </Text>
        )
      })}
    </Popover>
  )
}

export default DropDown
