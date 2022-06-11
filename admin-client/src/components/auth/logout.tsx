import React from 'react'
import { Dialog, Button, Text } from '@mantine/core'
import { tokenName } from '../../api/constants'
import { useSetRecoilState } from 'recoil'
import { authAtom } from '../../atoms/auth'

interface IProps {
  open: boolean
  onClose: () => void
}

const Logout: React.FC<IProps> = ({ open, onClose }) => {
  const setAuthState = useSetRecoilState(authAtom)

  const handleLogout = () => {
    window.localStorage.removeItem(tokenName)
    setAuthState({
      isAuthenticated: false,
      user: null,
    })
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
      <Text
        size="lg"
        style={{ marginBottom: 10, fontWeight: 'bold' }}
        weight={500}
      >
        Are you sure to Logout ?
      </Text>
      <Button onClick={handleLogout}>Logout</Button>
    </Dialog>
  )
}

export default Logout
