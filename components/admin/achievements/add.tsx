import React from 'react'
import { TextInput } from '@mantine/core'
import Editor from 'components/globals/rte'
import ImageUpload from 'components/globals/imageUpload'

interface IProps {}

const AddAchievement: React.FC<IProps> = () => {
  return (
    <>
      <TextInput name="title" />
      <Editor />
      <ImageUpload title="Add Achievement Image" description="" />
    </>
  )
}

export default AddAchievement
