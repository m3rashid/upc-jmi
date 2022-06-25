import React from 'react'
import { Card, ScrollArea, Table, Title } from '@mantine/core'

import PageWrapper from '../../components/pageWrapper'
import { staffDetails } from '../../data/academic/staffMembers'
import { useGlobalStyles } from '../../components/globals/globalStyles'

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
    <PageWrapper>
      <Title order={2} className={globalClasses.themeColor}>
        Staff Members
      </Title>
      <br />
      <Card className={globalClasses.themeColor}>
        <ScrollArea>
          <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>#</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Card>
    </PageWrapper>
  )
}

export default StaffMembers
