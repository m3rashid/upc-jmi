import { Button, Card, Group } from '@mantine/core'
import useCheckAdminLoggedIn from 'components/admin/guard'
import React from 'react'

interface IProps {}

type IState = 'add' | 'edit' | 'remove'

const Students: React.FC<IProps> = () => {
  useCheckAdminLoggedIn()
  const [state, setState] = React.useState<IState>('add')

  return (
    <>
      <Group>
        <Button onClick={() => setState('add')}>Add Student</Button>
        <Button onClick={() => setState('edit')}>Edit Student</Button>
        <Button onClick={() => setState('remove')}>Remove Student</Button>
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

export default Students
