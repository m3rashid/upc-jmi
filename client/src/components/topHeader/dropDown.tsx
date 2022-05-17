import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Text, Popover } from '@mantine/core'

import { Map } from './data'
import { useGlobalStyles } from '../../globals/globalStyles'

interface IProps {
  innerData: Map
  title: String
  innerRoute: String
}

const DropDown: React.FC<IProps> = ({ innerData, title, innerRoute }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const { classes, cx } = useGlobalStyles()
  const navigate = useNavigate()
  const { pathname } = useLocation()
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
              navigate(action.endpoint)
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
