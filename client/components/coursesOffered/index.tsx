import { Card, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'

import { useGlobalStyles } from '../globals/globalStyles'
import { btechData } from '../../data/academic/courseDetails/btech'
import { mtechData } from '../../data/academic/courseDetails/mtech'
import { beData } from '../../data/academic/courseDetails/be'

interface IItem {
  id: string
  title: string
  body: string
}

export interface IString {
  id: string
  text: string
}

export interface ICourse {
  title: string
  intake: number
  courseFee: string
  duration: string
  type: string
  intro: string
  eligibility?: IString[]
  admProcess: IString[]
  careerProspects: IString[]
  programEducationalObjectives?: IItem[]
  programSpecificOutcomes?: IItem[]
}

interface IProps {
  data: ICourse
}

const CourseDetails: React.FC<IProps> = ({ data }) => {
  const { classes: globalClasses } = useGlobalStyles()

  return (
    <Card className={globalClasses.themeColor}>
      <Title order={2} className={globalClasses.brandColor}>
        {data.title}
      </Title>
      <br />
      <Text>Intake: {data.intake}</Text>
      <Text>Course Fee: {data.courseFee}</Text>
      <Text>Duration: {data.duration}</Text>
      <Text>Course Type: {data.type}</Text>
      <br />
      <SimpleGrid cols={1} spacing="xs">
        <Text>{data.intro}</Text>
        <br />
        {data.eligibility && (
          <div>
            <Title order={3} className={globalClasses.brandColor}>
              Eligibility
            </Title>
            {data.eligibility.map((el) => (
              <Text key={el.id}>{el.text}</Text>
            ))}
            <br />
          </div>
        )}

        {data.admProcess && (
          <div>
            <Title order={3} className={globalClasses.brandColor}>
              Admission Process
            </Title>
            {data.admProcess.map((el) => (
              <Text key={el.id}>{el.text}</Text>
            ))}
            <br />
          </div>
        )}

        {data.programEducationalObjectives && (
          <div>
            <Title order={3} className={globalClasses.brandColor}>
              Program Educational Objectives
            </Title>
            {data.programEducationalObjectives.map((el) => (
              <div key={el.id} style={{ marginBottom: '10px' }}>
                <Text weight={700} component="span">
                  {el.title}
                </Text>
                <Text component="span">&nbsp; &nbsp;{el.body}</Text>
              </div>
            ))}
            <br />
          </div>
        )}

        {data.programSpecificOutcomes && (
          <div>
            <Title order={3} className={globalClasses.brandColor}>
              Program Specific Outcomes
            </Title>
            {data.programSpecificOutcomes.map((el) => (
              <div key={el.id} style={{ marginBottom: '10px' }}>
                <Text weight={700} component="span">
                  {el.title}
                </Text>
                <Text component="span">&nbsp; &nbsp;{el.body}</Text>
              </div>
            ))}
            <br />
          </div>
        )}

        <div>
          <Title order={3} className={globalClasses.brandColor}>
            Career Prospects
          </Title>
          {data.careerProspects.map((el) => (
            <Text key={el.id}>{el.text}</Text>
          ))}
        </div>
      </SimpleGrid>
    </Card>
  )
}

const Btech: React.FC = () => {
  return <CourseDetails data={btechData} />
}

const Mtech: React.FC = () => {
  return <CourseDetails data={mtechData} />
}

const Be: React.FC = () => {
  return <CourseDetails data={beData} />
}

export const BtechCourse = React.memo(Btech)
export const MtechCourse = React.memo(Mtech)
export const BeCourse = React.memo(Be)
