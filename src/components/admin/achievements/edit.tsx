import React from 'react'
import { Button } from '@mantine/core'
import { PlaylistAdd } from 'tabler-icons-react'

import { AddOrEditAchievement } from './add'

interface IProps {}

const EditAchievement: React.FC<IProps> = () => {
  const [data, setData] = React.useState<any>({
    initialImage: '',
    initialTitle: '',
    initialValue: '',
  })

  const [submit, setSubmit] = React.useState(false)
  const handleSubmit = (value: string, title: string, image: string) => {
    if (!submit) {
      return
    }
    console.log({ value, title, image })
  }

  const getDataFromServer = async (id: string) => {
    // fetch data from server
    setData({
      initialImage: '',
      initialTitle: '',
      initialValue: '',
    })
  }

  React.useEffect(() => {
    const id = 'sdf'
    getDataFromServer(id).then().catch()
  }, [])

  return (
    <>
      <AddOrEditAchievement {...data} submit={handleSubmit} />
      <Button
        mt={20}
        px={20}
        sx={{ float: 'right' }}
        onClick={() => setSubmit(true)}
        leftIcon={<PlaylistAdd />}
      >
        Submit
      </Button>
    </>
  )
}

export default EditAchievement
