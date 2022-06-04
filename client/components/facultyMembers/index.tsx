import React from 'react'
import { Card, Text, Title } from '@mantine/core'
import { useGlobalStyles } from '../globals/globalStyles'

import {
  facultyDetails,
  IDetail,
  IFacultyId,
} from '../../data/academic/facultyMembers/detail'

interface IProps {
  facultyId: IFacultyId
}

const FacultyMemberDetails: React.FC<IProps> = ({ facultyId }) => {
  const { classes: globalClasses } = useGlobalStyles()
  const [faculty, setFaculty] = React.useState<IDetail>(facultyDetails[0])

  React.useEffect(() => {
    const foundFaculty = facultyDetails.filter((f) => f.id === facultyId)
    setFaculty(foundFaculty[0])
  }, [facultyId])

  return (
    <Card
      className={`${globalClasses.themeColor} ${globalClasses.twoColumnGridHeightFix}`}
    >
      <Title order={2} className={globalClasses.brandColor}>
        {faculty.name}
      </Title>

      <br />
      <Text>{faculty.department}</Text>
      <Text>Address: {faculty.address}</Text>
      <Text>Phone: {faculty.phone}</Text>
      {faculty.emails.map((e, i) => (
        <Text
          component="span"
          style={{ marginRight: '10px' }}
          key={`email${i}`}
        >
          {e},
        </Text>
      ))}
      <br />
      <br />
      {faculty.description.map((f, i) => (
        <Text key={`descr${f.id} i`}>{f.text}</Text>
      ))}
      <br />
      {faculty.classesTaught.length > 0 && (
        <>
          <Title order={3} className={globalClasses.brandColor}>
            Classes Taught
          </Title>
          {faculty.classesTaught.map((c, i) => (
            <Text key={`classes${c.id} ${i}`}>{c.text}</Text>
          ))}
          <br />
        </>
      )}
      {faculty.coursesTaught.length > 0 && (
        <>
          <Title order={3} className={globalClasses.brandColor}>
            Courses Taught
          </Title>
          {faculty.coursesTaught.map((c, i) => (
            <Text key={`courses${c.id} ${i}`}>{c.text}</Text>
          ))}
        </>
      )}
    </Card>
  )
}

export default FacultyMemberDetails
