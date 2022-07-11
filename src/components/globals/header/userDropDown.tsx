import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Center, Divider, Group, Menu } from '@mantine/core'
import { Sun, Moon, Logout } from 'tabler-icons-react'

import DropDown from 'components/globals/header/dropDown'
import { useStyles } from 'components/globals/header/styles'
import { adminLoggedIn } from 'components/globals/header/data'
import { showNotification } from '@mantine/notifications'
import { useRouter } from 'next/router'

interface IProps {
  colorScheme: any
  toggleColorScheme: () => void
  toggleOpened: (val: boolean) => void
}

const UserDropDown: React.FC<IProps> = ({
  colorScheme,
  toggleColorScheme,
  toggleOpened,
}) => {
  const { classes } = useStyles()
  const Icon = colorScheme === 'dark' ? Sun : Moon
  const router = useRouter()

  const handleLogout = () => {
    signOut({ redirect: false })
    showNotification({
      title: 'Logged out Successfully',
      message: 'You have been logged out',
    })
    router.replace('/')
  }

  const ThemeChanger = ({ showtitle }: { showtitle: boolean }) => (
    <Group position="left" my="sm" onClick={() => toggleColorScheme()}>
      <Center className={classes.iconWrapper} aria-label="Toggle theme">
        <Icon />
      </Center>
      {showtitle && <span>Toggle Theme</span>}
    </Group>
  )

  const { data: session } = useSession()
  if (!session) {
    return <ThemeChanger showtitle={false} />
  }

  return (
    <DropDown
      toggleOpened={toggleOpened}
      innerData={adminLoggedIn}
      title="Admin"
      innerRoute="admin"
      Additional={
        <>
          <Divider />
          <Menu.Item
            my={5}
            px={5}
            icon={<Logout size={14} />}
            className={classes.link}
            onClick={handleLogout}
          >
            Logout
          </Menu.Item>
          <Divider />
          <Group
            sx={(theme) => ({
              '&:hover': {
                cursor: 'pointer',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
                color:
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 3 : 7
                  ],
                fontWeight: 500,
                borderRadius: theme.radius.sm,
              },
            })}
          >
            <ThemeChanger showtitle={true} />
          </Group>
        </>
      }
    />
  )
}

export default UserDropDown
