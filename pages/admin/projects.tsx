import { Button, Card, Group } from '@mantine/core'
import useCheckAdminLoggedIn from 'components/admin/guard'
import React from 'react'

interface IProps {}

type IState = 'add' | 'edit' | 'remove'

const Projects: React.FC<IProps> = () => {
  useCheckAdminLoggedIn()
  const [state, setState] = React.useState<IState>('add')

  return (
    <>
      <Group>
        <Button onClick={() => setState('add')}>Add Project</Button>
        <Button onClick={() => setState('edit')}>Edit Project</Button>
        <Button onClick={() => setState('remove')}>Remove Project</Button>
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

export default Projects