import React from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { showNotification } from '@mantine/notifications'
import { Center, Divider, Group, Menu, Text } from '@mantine/core'
import { Sun, Moon, Logout, Login } from 'tabler-icons-react'

import DropDown from 'components/globals/header/dropDown'
import { useStyles } from 'components/globals/header/styles'
import { adminLoggedIn } from 'components/globals/header/data'
import { useGlobalStyles } from 'components/globals/globalStyles'

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
  const { classes: globalClasses } = useGlobalStyles()
  const { data: session } = useSession()

  const handleLogout = () => {
    signOut({ redirect: false })
    showNotification({
      title: 'Logged out Successfully',
      message: 'You have been logged out',
    })
    toggleOpened(false)
    router.replace('/')
  }

  return (
    <DropDown
      toggleOpened={toggleOpened}
      innerData={session?.user.role === 'ADMIN' ? adminLoggedIn : {}}
      title={session ? session.user.name || 'Admin' : 'Actions'}
      innerRoute="admin"
      Additional={
        <>
          {session ? (
            <>
              <Divider />
              <Menu.Item
                my={5}
                px={5}
                icon={<Logout size={14} />}
                className={globalClasses.link}
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                my={3}
                px={5}
                icon={<Login size={14} />}
                className={globalClasses.link}
                onClick={() => {
                  toggleOpened(false)
                  router.push('/auth/login')
                }}
              >
                Login
              </Menu.Item>
              <Menu.Item
                px={5}
                my={5}
                icon={<Login size={14} />}
                className={globalClasses.link}
                onClick={() => {
                  toggleOpened(false)
                  router.push('/auth/register')
                }}
              >
                Create Account
              </Menu.Item>
            </>
          )}
          <Divider />
          <Group className={globalClasses.link}>
            <Group
              onClick={() => {
                toggleOpened(false)
                toggleColorScheme()
              }}
            >
              <Center className={classes.iconWrapper} aria-label="Toggle theme">
                <Icon />
              </Center>
              <Text>Toggle Theme</Text>
            </Group>
          </Group>
        </>
      }
    />
  )
}

export default UserDropDown
