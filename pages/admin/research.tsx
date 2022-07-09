import { Button, Card, Group, Title } from '@mantine/core'
import useCheckAdminLoggedIn from 'components/admin/guard'
import { useGlobalStyles } from 'components/globals/globalStyles'
import React from 'react'

interface IProps {}

type IState = 'add' | 'edit' | 'remove'

const Research: React.FC<IProps> = () => {
  useCheckAdminLoggedIn()
  const { classes: globalClasses } = useGlobalStyles()
  const [state, setState] = React.useState<IState>('add')

  return (
    <>
      <Group>
        <Button onClick={() => setState('add')}>Add Research</Button>
        <Button onClick={() => setState('edit')}>Edit Research</Button>
        <Button onClick={() => setState('remove')}>Remove Research</Button>
      </Group>

      <br />
      <br />

      <Card>
        <Title order={2} className={globalClasses.title} mb={30}>
          {state.charAt(0).toUpperCase() + state.slice(1)} Research
        </Title>
        {state === 'add' && <></>}
        {state === 'edit' && <></>}
        {state === 'remove' && <></>}
      </Card>
    </>
  )
}

export default Research
