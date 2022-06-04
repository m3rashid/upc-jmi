import { Card, Select, SimpleGrid, Title } from '@mantine/core'
import React from 'react'

import {
  batchOptions,
  courseOptions,
  IBatch,
  ICourse,
} from '../../data/academic/students'
import PageWrapper from '../../components/pageWrapper'
import { useGlobalStyles } from '../../components/globals/globalStyles'

interface IProps {}

const Students: React.FC<IProps> = () => {
  const [batch, setBatch] = React.useState<IBatch>('2018-2022')
  const [course, setCourse] = React.useState<ICourse>('B. Tech')
  const { classes: globalClasses } = useGlobalStyles()

  return (
    <PageWrapper>
      <div className={globalClasses.themeColor}>
        <Card style={{ marginBottom: '50px' }}>
          <SimpleGrid cols={2}>
            <Select
              label="Select Course"
              value={course}
              onChange={setCourse as any}
              data={courseOptions}
            />
            <Select
              label="Select Batch"
              value={batch}
              onChange={setBatch as any}
              data={batchOptions}
            />
          </SimpleGrid>
        </Card>
        <Title order={2} mb={10} ml={5}>
          {`Details for ${course} ${batch} batch`}
        </Title>
      </div>
    </PageWrapper>
  )
}

export default Students
