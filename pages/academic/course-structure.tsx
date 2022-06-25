import React from 'react'
import { Card, Select, SimpleGrid, Title } from '@mantine/core'

import PageWrapper from '../../components/pageWrapper'
import { ICourse } from '../../data/academic/courseStructure'
import AllCourseStructure from '../../components/courseStructure'
import { useGlobalStyles } from '../../components/globals/globalStyles'

interface IProps {}

const courseName: ICourse[] = ['B. Tech', 'M. Tech', 'B.E.']
const bTechSems = [
  'Semester 1',
  'Semester 2',
  'Semester 3',
  'Semester 4',
  'Semester 5',
  'Semester 6',
  'Semester 7',
  'Semester 8',
]
const mTechSems = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4']
const beYear = ['Year 1', 'Year 2', 'Year 3', 'Year 4']

const CourseStructure: React.FC<IProps> = () => {
  const [inputCourse, setInputCourse] = React.useState<ICourse>('B. Tech')
  const [semData, setSemData] = React.useState<string[]>(bTechSems)
  const [sem, setSem] = React.useState<string>('Semester 1')

  React.useEffect(() => {
    switch (inputCourse) {
      case 'B. Tech':
        setSemData(bTechSems)
        setSem('Semester 1')
        break
      case 'M. Tech':
        setSemData(mTechSems)
        setSem('Semester 1')
        break
      case 'B.E.':
        setSemData(beYear)
        setSem('Year 1')
        break
    }
  }, [inputCourse])

  const { classes: globalClasses } = useGlobalStyles()

  return (
    <PageWrapper>
      <div className={globalClasses.themeColor}>
        <Card style={{ marginBottom: '50px' }}>
          <SimpleGrid cols={2}>
            <Select
              label="Select Course"
              value={inputCourse}
              onChange={setInputCourse as any}
              data={courseName}
            />
            <Select
              label="Select Semester/Year"
              value={sem}
              onChange={setSem as any}
              data={semData}
            />
          </SimpleGrid>
        </Card>
        <Title order={2} mb={10} ml={5}>
          {`${inputCourse} ${sem} details`}
        </Title>
        <AllCourseStructure course={inputCourse} semYear={sem} />
      </div>
    </PageWrapper>
  )
}

export default CourseStructure
