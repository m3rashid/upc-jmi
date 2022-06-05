import React from 'react'
import { Dialog, Button, Text } from '@mantine/core'

interface IProps {
  open: boolean
  onClose: () => void
}

const Logout: React.FC<IProps> = ({ open, onClose }) => {
  const handleLogout = () => {
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
