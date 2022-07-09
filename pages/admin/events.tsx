import { Button, Card, Group } from '@mantine/core'
import useCheckAdminLoggedIn from 'components/admin/guard'
import React from 'react'

interface IProps {}

type IState = 'add' | 'edit' | 'remove'

const Events: React.FC<IProps> = () => {
  useCheckAdminLoggedIn()
  const [state, setState] = React.useState<IState>('add')

  return (
    <>
      <Group>
        <Button onClick={() => setState('add')}>Add Event</Button>
        <Button onClick={() => setState('edit')}>Edit Event</Button>
        <Button onClick={() => setState('remove')}>Remove Event</Button>
      </Group>

      <br />
      <br />

      <Card>
        {state === 'add' && <></>}
        {state === 'edit' && <></>}
        {state === 'remove' && <></>}
      </Card>
    </>
  )
}

export default Events
