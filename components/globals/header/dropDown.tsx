import React from 'react'
import { useRouter } from 'next/router'
import { Text, Menu } from '@mantine/core'

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
    <Menu
      size={260}
      control={
        <Text
          className={cx(classes.link, {
            [classes.linkActive]: main === innerRoute,
          })}
          onClick={() => setOpen((o) => !o)}
        >
          {title}
        </Text>
      }
    >
      {Object.entries(innerData).map(([_, action]) => {
        return (
          <>
            <Menu.Item
              my={5}
              px={10}
              key={action.name}
              className={classes.link}
              onClick={(e: any) => {
                push(action.endpoint)
                setOpen(false)
              }}
            >
              {action.label}
            </Menu.Item>
          </>
        )
      })}
    </Menu>
  )
}

export default DropDown
