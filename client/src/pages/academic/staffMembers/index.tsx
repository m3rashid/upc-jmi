import React from 'react'

import { staffDetails } from './data'
import { useGlobalStyles } from '../../../globals/globalStyles'
import { Card, ScrollArea, Table, Title } from '@mantine/core'

interface IProps {}

const StaffMembers: React.FC<IProps> = () => {
  const { classes: globalClasses } = useGlobalStyles()

  const rows = React.useMemo(() => {
    return staffDetails.map((row, i) => (
      <tr key={row.id}>
        <td align="center">{i + 1}</td>
        <td>{row.name}</td>
        <td>{row.desig}</td>
      </tr>
    ))
  }, [])

  return (
    <>
      <Title order={2} className={globalClasses.themeColor}>
        Staff Members
      </Title>
      <br />
      <Card className={globalClasses.themeColor}>
        <ScrollArea>
          <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Card>
    </>
  )
}

export default StaffMembers
