import React from 'react'
import { Avatar, Card, Group, SimpleGrid, Text, Title } from '@mantine/core'

import { useGlobalStyles } from '../../../globals/globalStyles'
import TwoColumnGrid from '../../../globals/twoColumnGrid'
import { facilityList } from './data'
import FacultyMemberDetails from '../../../components/facultyMembers'
import { IFacultyId } from '../../../components/facultyMembers/data'
import { useWindowScroll } from '@mantine/hooks'

interface IProps {}

const FacultyMembers: React.FC<IProps> = () => {
  const [faculty, setFaculty] = React.useState<IFacultyId>('balam')
  const { classes: globalClasses } = useGlobalStyles()
  const scrollTo = useWindowScroll()[1]

  const handleFacultyChange = (id: IFacultyId) => {
    setFaculty(id)
    scrollTo({ y: 0 })
  }

  return (
    <>
      <Title className={globalClasses.themeColor} mb={20} ml={5}>
        Faculty Members
      </Title>
      <TwoColumnGrid>
        <SimpleGrid className={globalClasses.twoColumnGridHeightFix}>
          {facilityList.map((faculty) => (
            <Card key={faculty.id}>
              <Group noWrap>
                <Avatar src={faculty.avatar} size={75} radius="md" />
                <div>
                  <Text
                    size="xs"
                    sx={{ textTransform: 'uppercase' }}
                    weight={700}
                    color="dimmed"
                  >
                    {faculty.department}
                  </Text>

                  <Text
                    size="lg"
                    weight={500}
                    className={globalClasses.brandColor}
                    onClick={() => handleFacultyChange(faculty.id)}
                  >
                    {faculty.name}
                  </Text>
                </div>
              </Group>
              <Group noWrap spacing={10} mt={10}>
                <Text size="sm" color="dimmed">
                  {faculty.bio}
                </Text>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
        <FacultyMemberDetails facultyId={faculty} />
      </TwoColumnGrid>
    </>
  )
}

export default FacultyMembers
