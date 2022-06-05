import { Tooltip, UnstyledButton } from '@mantine/core'
import { Icon as TablerIcon } from 'tabler-icons-react'

import useStyles from './styles'

interface NavbarLinkProps {
  icon: TablerIcon
  label: string
  active?: boolean
  onClick?(): void
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) => {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  )
}

export default NavbarLink
