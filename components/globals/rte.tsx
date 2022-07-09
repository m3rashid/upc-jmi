import React from 'react'
import dynamic from 'next/dynamic'
import { Loader } from '@mantine/core'

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => <Loader />,
})

interface IProps {
  initialValue?: string
}

const Editor: React.FC<IProps> = ({ initialValue }) => {
  const [value, onChange] = React.useState(initialValue ?? '')

  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
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
