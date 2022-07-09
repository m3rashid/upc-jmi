import React from 'react'
import dynamic from 'next/dynamic'
import { Loader } from '@mantine/core'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => <Loader />,
})

interface IProps extends React.ComponentProps<typeof RichTextEditor> {}

const Editor: React.FC<IProps> = ({ ...props }) => {
  return (
    <RichTextEditor
      {...props}
      style={{ minHeight: 200 }}
      controls={[
        ['bold', 'italic', 'underline', 'link'],
        ['unorderedList', 'h1', 'h2', 'h3'],
        ['sup', 'sub', 'blockquote', 'unorderedList', 'orderedList'],
        ['alignLeft', 'alignCenter', 'alignRight'],
      ]}
    />
  )
}

export default Editor
