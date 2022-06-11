import React from 'react'
import {
  Dialog,
  Button,
  Text,
  Input,
  PasswordInput,
  Stack,
} from '@mantine/core'
import { At, Bulb } from 'tabler-icons-react'

import { tokenName, useSafeApiCall } from '../../api/constants'
import { useSetRecoilState } from 'recoil'
import { authAtom } from '../../atoms/auth'

interface IProps {
  open: boolean
  onClose: () => void
}

const Signup: React.FC<IProps> = ({ open, onClose }) => {
  const setAuthState = useSetRecoilState(authAtom)
  const { safeApiCall } = useSafeApiCall()

  const nameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null)
  const adminUidRef = React.useRef<HTMLInputElement>(null)

  const handleSignup = async () => {
    const data = await safeApiCall({
      endpoint: '/api/auth/create-admin',
      body: {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef.current?.value,
        adminUid: adminUidRef.current?.value,
      },
      notif: {
        id: 'signup',
        successMsg: {
          title: 'Successfully created your account and signed up',
          message: 'Get going with your new account',
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
          Signup
        </Text>
        <Input ref={nameRef} type="name" placeholder="name" icon={<Bulb />} />
        <Input ref={emailRef} type="email" placeholder="email" icon={<At />} />
        <PasswordInput ref={passwordRef} placeholder="Enter Password" />
        <PasswordInput
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />
        <PasswordInput ref={adminUidRef} placeholder="Enter Admin UID" />
        <Button onClick={handleSignup} style={{ width: 'min-content' }}>
          Signup
        </Button>
      </Stack>
    </Dialog>
  )
}

export default Signup
