import React from 'react'
import {
  Anchor,
  Card,
  ScrollArea,
  Table as MantineTable,
  Text,
} from '@mantine/core'
import Link from 'next/link'

import { useGlobalStyles } from '../globals/globalStyles'
import { IBeCourseStructure } from '../../data/academic/courseStructure/be'

const BeTable: React.FC<{ data: IBeCourseStructure[] }> = ({ data }) => {
  const { classes: globalClasses } = useGlobalStyles()

  const rows = React.useMemo(() => {
    return data.map((row, i) => (
      <tr key={row.id}>
        <td align="center">{i + 1}</td>
        <td>{row.paperCode}</td>
        <td>
          <Link href="" passHref>
            <Anchor
              component="a"
              size="sm"
              sx={(theme) => ({ color: theme.primaryColor })}
            >
              {row.paperTitle}
            </Anchor>
          </Link>
        </td>
        {row.marks.map((h, i) => (
          <td align="center" key={h + i + row.id}>
            {h}
          </td>
        ))}
        <td align="center">{row.totalMarks}</td>
      </tr>
    ))
  }, [])

  return (
    <Card className={globalClasses.themeColor}>
      <ScrollArea>
        <MantineTable sx={{ minWidth: 800 }} verticalSpacing="xs">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={3}>
                <Text style={{ textAlign: 'center' }}>
                  Distribution of Total Marks
                </Text>
              </th>
              <th></th>
            </tr>
            <tr>
              <th style={{ textAlign: 'center' }}>#</th>
              <th>Code</th>
              <th>Title</th>
              <th>Internal</th>
              <th>Annual Exams</th>
              <th>Practical </th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </MantineTable>
      </ScrollArea>
    </Card>
  )
}

export default BeTable
