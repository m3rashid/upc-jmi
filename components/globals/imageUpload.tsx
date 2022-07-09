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

interface IProps {
  onDrop: (files: File[]) => void
  onError: (files: any) => void
}

const ImageUpload: React.FC<IProps> = ({ onDrop, onError }) => {
  const theme = useMantineTheme()

  return (
    <Dropzone
      onDrop={onDrop}
      onReject={onError}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      {(status) => (
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
              Drag images here or click to select file
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attached file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </Dropzone>
  )
}

export default ImageUpload
