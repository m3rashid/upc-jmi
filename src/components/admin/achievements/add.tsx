import React from 'react'
import { Box, Button, Image, SimpleGrid, Text, TextInput } from '@mantine/core'
import Editor from 'components/globals/rte'
import { Badge, CircleX, Cut, PlaylistAdd } from 'tabler-icons-react'

interface IProps {
  initialValue?: string
  initialTitle?: string
  initialImage?: string
  submit: (value: string, title: string, image: string) => void
}

export const AddOrEditAchievement: React.FC<IProps> = ({
  initialValue,
  initialTitle,
  initialImage,
  submit,
}) => {
  const [value, onChange] = React.useState(initialValue || '')
  const [title, setTitle] = React.useState(initialTitle || '')
  const [image, setImage] = React.useState(initialImage || '')

  const handleOnChange = (files: File[]) => {
    setImage(URL.createObjectURL(files[0]))
  }
  const handleOnError = (files: any) => {}

  return (
    <SimpleGrid cols={1} spacing={20}>
      <TextInput
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Achievement Title"
        label="Achievement Title"
        required
      />

      {image ? (
        <Box sx={{ position: 'relative' }}>
          <CircleX
            size={52}
            color="white"
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              top: 10,
              right: 10,
              zIndex: 1,
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={() => setImage('')}
          />
          <Image src={image} alt="achievment image" />
        </Box>
      ) : (
        <>
          <Text sx={{ marginBottom: -15 }} size="sm">
            Add achievement image
          </Text>
          {/* use an input for image link */}
          {/* <ImageUpload onDrop={handleOnChange} onError={handleOnError} /> */}
        </>
      )}

      <Editor {...{ value, onChange }} placeholder="Describe the achievement" />
    </SimpleGrid>
  )
}

const AddAchievement = () => {
  const [submit, setSubmit] = React.useState(false)
  const handleSubmit = async (value: string, title: string, image: string) => {
    if (!submit) {
      return
    }
    console.log({ value, title, image })
  }

  return (
    <>
      <AddOrEditAchievement submit={handleSubmit} />
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

export default AddAchievement
