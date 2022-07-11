import React from 'react'
import { useRouter } from 'next/router'
import { Text, Menu } from '@mantine/core'
import { ChevronDown } from 'tabler-icons-react'

import { Map } from 'components/globals/header/data'
import { useGlobalStyles } from 'components/globals/globalStyles'

interface IProps {
  innerData: Map
  title: String
  innerRoute: String
  toggleOpened: (val: boolean) => void
  Additional?: React.ReactNode
}

const DropDown: React.FC<IProps> = ({
  innerData,
  title,
  innerRoute,
  Additional,
  toggleOpened,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const { classes, cx } = useGlobalStyles()
  const { pathname, push } = useRouter()
  const main = pathname.split('/')[1]

  return (
    <Menu
      size={260}
      trigger="hover"
      delay={0}
      gutter={1}
      transitionDuration={0}
      control={
        <Text
          className={cx(classes.link, {
            [classes.linkActive]: main === innerRoute,
          })}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={(e: any) => e.preventDefault()}
        >
          {title}&nbsp;
          <ChevronDown size={16} />
        </Text>
      }
    >
      {Object.entries(innerData).map(([_, action], index) => {
        return (
          <Menu.Item
            my={5}
            px={5}
            icon={<action.Icon size={14} />}
            key={`${action.name}-${index}`}
            className={classes.link}
            onClick={(e: any) => {
              push(action.endpoint)
              setOpen(false)
              toggleOpened(false)
            }}
          >
            {action.label}
          </Menu.Item>
        )
      })}
      {Additional}
    </Menu>
  )
}

export default DropDown
