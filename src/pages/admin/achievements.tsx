import { Button, Card, Group, Title } from '@mantine/core'
import AddAchievement from 'components/admin/achievements/add'
import EditAchievement from 'components/admin/achievements/edit'
import RemoveAchievement from 'components/admin/achievements/remove'
import useCheckAdminLoggedIn from 'components/admin/guard'
import { useGlobalStyles } from 'components/globals/globalStyles'
import React from 'react'

interface IProps {}

type IState = 'add' | 'edit' | 'remove'

const Achievements: React.FC<IProps> = () => {
  useCheckAdminLoggedIn()
  const { classes: globalClasses } = useGlobalStyles()

  const [state, setState] = React.useState<IState>('add')

  return (
    <>
      <Group>
        <Button onClick={() => setState('add')}>Add Achievement</Button>
        <Button onClick={() => setState('edit')}>Edit Achievement</Button>
        <Button onClick={() => setState('remove')}>Remove Achievement</Button>
      </Group>

      <br />
      <br />

      <Card>
        <Title order={2} className={globalClasses.title} mb={30}>
          {state.charAt(0).toUpperCase() + state.slice(1)} Achievement
        </Title>
        {state === 'add' && <AddAchievement />}
        {state === 'edit' && <EditAchievement />}
        {state === 'remove' && <RemoveAchievement />}
      </Card>
    </>
  )
}

export default Achievements
