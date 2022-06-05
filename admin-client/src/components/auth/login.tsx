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

interface IProps {
  open: boolean
  onClose: () => void
}

const Login: React.FC<IProps> = ({ open, onClose }) => {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log({ email, password })
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
