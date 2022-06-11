import React from 'react'
import { Logout, Login } from 'tabler-icons-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Navbar, Center, Group, Avatar } from '@mantine/core'

import data from './routesData'
import NavbarLink from './link'
import Signup from '../auth/signup'
import LoginForm from '../auth/login'
import LogoutDialog from '../auth/logout'
import ChangeColorScheme from './changeColorScheme'
import { authAtom } from '../../atoms/auth'
import { useRecoilValue } from 'recoil'

type modalOpenType = 'login' | 'logout' | 'signup' | ''

const SideNavbar = () => {
  const { isAuthenticated } = useRecoilValue(authAtom)
  const [modalOpen, setModalOpen] = React.useState<modalOpenType>('')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      <LoginForm
        open={modalOpen === 'login'}
        onClose={() => setModalOpen('')}
      />
      <LogoutDialog
        open={modalOpen === 'logout'}
        onClose={() => setModalOpen('')}
      />
      <Signup open={modalOpen === 'signup'} onClose={() => setModalOpen('')} />
      <Navbar height={'100vh'} width={{ base: 80 }} p="md">
        <Center>
          <Avatar color="green" size="lg" src="/images/favicon.jpg" alt="" />
        </Center>
        <Navbar.Section grow mt={50}>
          <Group direction="column" align="center" spacing={0}>
            {data.map((link) => (
              <NavbarLink
                {...link}
                key={link.label}
                active={pathname === link.to}
                onClick={() => navigate(link.to)}
              />
            ))}
          </Group>
        </Navbar.Section>
        <Navbar.Section>
          <Group direction="column" align="center" spacing={0}>
            <ChangeColorScheme />
            {isAuthenticated ? (
              <NavbarLink
                icon={Logout}
                label="Logout"
                onClick={() => setModalOpen('logout')}
              />
            ) : (
              <>
                <NavbarLink
                  icon={Login}
                  label="Login"
                  onClick={() => setModalOpen('login')}
                />
                <NavbarLink
                  icon={Login}
                  label="Signup"
                  onClick={() => setModalOpen('signup')}
                />
              </>
            )}
          </Group>
        </Navbar.Section>
      </Navbar>
    </>
  )
}

export default SideNavbar
