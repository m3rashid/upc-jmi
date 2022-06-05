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

const Signup: React.FC<IProps> = ({ open, onClose }) => {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const adminUidRef = React.useRef<HTMLInputElement>(null)

  const handleSignup = () => {
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
        <Input ref={emailRef} type="email" placeholder="email" icon={<At />} />
        <PasswordInput ref={passwordRef} placeholder="Enter Password" />
        <PasswordInput ref={adminUidRef} placeholder="Enter Admin Unique ID" />

        <Button onClick={handleSignup} style={{ width: 'min-content' }}>
          Signup
        </Button>
      </Stack>
    </Dialog>
  )
}

export default Signup
