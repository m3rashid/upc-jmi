import React from 'react'
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core'
import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react'
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone'

function ImageUploadIcon({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) return <Upload {...props} />
  if (status.rejected) return <X {...props} />
  return <Photo {...props} />
}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7]
}

export const DropzoneChildren = ({
  status,
  title,
  description,
}: {
  status: DropzoneStatus
  title?: string
  description?: string
}) => {
  const theme = useMantineTheme()

  return (
    <Group
      position="center"
      spacing="xl"
      style={{ minHeight: 220, pointerEvents: 'none' }}
    >
      <ImageUploadIcon
        status={status}
        style={{ color: getIconColor(status, theme) }}
        size={80}
      />

      <div>
        <Text size="xl" inline>
          {title ?? 'Drag images here or click to select files'}
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
          {description ?? 'Attached file should not exceed 5mb'}
        </Text>
      </div>
    </Group>
  )
}

interface IProps {
  title?: string
  description?: string
}

const ImageUpload: React.FC<IProps> = ({ title, description }) => {
  const onFileDrop = (files: File[]) => {
    console.log('accepted files', files)
  }

  const onFileReject = (files: any) => {
    console.log('rejected files', files)
  }

  return (
    <Dropzone
      onDrop={onFileDrop}
      onReject={onFileReject}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      {(status) => (
        <DropzoneChildren
          status={status}
          {...(title && { title })}
          {...(description && { description })}
        />
      )}
    </Dropzone>
  )
}

export default ImageUpload
