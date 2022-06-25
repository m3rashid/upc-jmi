import React from 'react'
import { useGlobalStyles } from '../globals/globalStyles'
import { Card, SimpleGrid, Text, Title } from '@mantine/core'
import { phdData as data } from '../../data/academic/courseDetails/phd'

interface IProps {}

const PhdCourse: React.FC<IProps> = () => {
  const { classes: globalClasses } = useGlobalStyles()

  return (
    <Card className={globalClasses.themeColor}>
      <Title
        order={2}
        className={globalClasses.brandColor}
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        {data.title}
      </Title>
      <br />
      <SimpleGrid cols={1} spacing="xs">
        <div>
          {data.intro.map((el) => (
            <div key={el.id} style={{ marginBottom: '10px' }}>
              <Text>{el.text}</Text>
            </div>
          ))}
          <br />
        </div>
        <div>
          <Title
            order={3}
            className={globalClasses.brandColor}
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Felloships
          </Title>
          <Text>{data.fellowships}</Text>
          <br />
        </div>
        <div>
          <Title
            order={3}
            className={globalClasses.brandColor}
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Admission Process
          </Title>
          {data.admProcess.map((el) => (
            <Text key={el.id}>{el.text}</Text>
          ))}
          <br />
        </div>
        <div>
          <Title
            order={3}
            className={globalClasses.brandColor}
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Eligibility
          </Title>
          {data.eligibility.map((el) => (
            <Text key={el.id}>{el.text}</Text>
          ))}
          <br />
        </div>
        <div>
          <Title
            order={3}
            className={globalClasses.brandColor}
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Career Prospects after Ph.D.
          </Title>
          {data.careerProspects.map((el) => (
            <Text key={el.id}>{el.text}</Text>
          ))}
          <br />
        </div>
      </SimpleGrid>
    </Card>
  )
}

export default React.memo(PhdCourse)
