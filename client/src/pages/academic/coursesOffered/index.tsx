import React from 'react'
import { Card, createStyles, SimpleGrid, Text, Title } from '@mantine/core'

import { coursesList, IShortName } from './data'
import { useGlobalStyles } from '../../../globals/globalStyles'
import TwoColumnGrid from '../../../globals/twoColumnGrid'
import {
  BeCourse,
  BtechCourse,
  MtechCourse,
} from '../../../components/courseDetails'
import PhdCourse from '../../../components/courseDetails/phdCourse'
import { useWindowScroll } from '@mantine/hooks'

export const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.brand,
    cursor: 'pointer',
    paddingBottom: theme.spacing.xs / 2,
  },
}))

interface IProps {}

const CoursesOffered: React.FC<IProps> = () => {
  const { classes } = useStyles()
  const { classes: globalClasses } = useGlobalStyles()
  const scrollTo = useWindowScroll()[1]
  const [current, setCurrent] = React.useState<IShortName>('btech')

  const handleCourseChange = (id: IShortName) => {
    setCurrent(id)
    scrollTo({ y: 0 })
  }

  return (
    <>
      <Title className={globalClasses.themeColor} mb={20} ml={5}>
        Courses Offered
      </Title>
      <TwoColumnGrid>
        <SimpleGrid className={globalClasses.twoColumnGridHeightFix}>
          {coursesList.map((course) => (
            <Card key={course.id}>
              <Title
                order={4}
                className={classes.title}
                onClick={() => handleCourseChange(course.shortName)}
              >
                {course.title}
              </Title>
              <Text>{course.body}</Text>
            </Card>
          ))}
        </SimpleGrid>
        <div className={globalClasses.twoColumnGridHeightFix}>
          {current === 'btech' && <BtechCourse />}
          {current === 'be' && <BeCourse />}
          {current === 'mtech' && <MtechCourse />}
          {current === 'phd' && <PhdCourse />}
        </div>
      </TwoColumnGrid>
    </>
  )
}

export default CoursesOffered
