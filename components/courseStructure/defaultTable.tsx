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
import { IBTechCourseStructure } from '../../data/academic/courseStructure/btech'

const Table: React.FC<{ data: IBTechCourseStructure[] }> = ({ data }) => {
  const { classes: globalClasses } = useGlobalStyles()

  const rows = React.useMemo(() => {
    return data.map((row, i) => (
      <tr key={row.id}>
        <td align="center">{i + 1}</td>
        <td>{row.paperCode}</td>
        <td>
          <Link href={row?.pdfLink || ''} passHref>
            <Anchor
              component="a"
              size="sm"
              sx={(theme) => ({ color: theme.primaryColor })}
            >
              {row.paperTitle}
            </Anchor>
          </Link>
        </td>
        {row.totalHours.map((h, i) => (
          <td align="center" key={h + i + row.id}>
            {h}
          </td>
        ))}
        <td align="center">{row.credits}</td>
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
              <th colSpan={4}>
                <Text style={{ textAlign: 'center' }}>
                  Total Number of Contact Hours
                </Text>
              </th>
              <th></th>
            </tr>
            <tr>
              <th style={{ textAlign: 'center' }}>#</th>
              <th>Code</th>
              <th>Title</th>
              <th>Lecture (H)</th>
              <th>Tutorial (H)</th>
              <th>Practical (H)</th>
              <th>Total (H)</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </MantineTable>
      </ScrollArea>
    </Card>
  )
}

export default Table
