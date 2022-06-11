import React from 'react'
import {
  Dialog,
  Button,
  Text,
  Input,
  PasswordInput,
  Stack,
} from '@mantine/core'
import { At } from 'tabler-icons-react'
import { tokenName, useSafeApiCall } from '../../api/constants'
import { useSetRecoilState } from 'recoil'
import { authAtom } from '../../atoms/auth'

interface IProps {
  open: boolean
  onClose: () => void
}

const Login: React.FC<IProps> = ({ open, onClose }) => {
  const setAuthState = useSetRecoilState(authAtom)
  const { safeApiCall } = useSafeApiCall()

  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const handleLogin = async () => {
    const data = await safeApiCall({
      endpoint: '/api/auth/login',
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
      notif: {
        id: 'login',
        successMsg: {
          title: 'Login successful',
          message: 'Successfully logged in your account',
        },
      },
    })
    if (data) {
      window.localStorage.setItem(tokenName, data.data.token)
      setAuthState({ isAuthenticated: true, user: data.data.user })
    }

    onClose()
  }

  return (
    <Dialog
      opened={open}
      withCloseButton
      onClose={onClose}
      size="lg"
      radius="md"
    >
      <Stack spacing="sm">
        <Text
          size="lg"
          style={{ marginBottom: 10, fontWeight: 'bold' }}
          weight={500}
        >
          Login
        </Text>
        <Input ref={emailRef} type="text" placeholder="email" icon={<At />} />
        <PasswordInput ref={passwordRef} placeholder="Enter Password" />
        <Button onClick={handleLogin} style={{ width: 'min-content' }}>
          Login
        </Button>
      </Stack>
    </Dialog>
  )
}

export default Login
