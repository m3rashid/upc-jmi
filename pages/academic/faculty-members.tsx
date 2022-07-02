import React from 'react'
import { useWindowScroll } from '@mantine/hooks'
import { Avatar, Card, Group, SimpleGrid, Text, Title } from '@mantine/core'

import TwoColumnGrid from 'components/twoColumnGrid'
import FacultyMemberDetails from 'components/facultyMembers'
import { IFacultyId } from 'data/academic/facultyMembers/detail'
import { facilityList } from 'data/academic/facultyMembers/short'
import { useGlobalStyles } from 'components/globals/globalStyles'

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
      <Title
        className={globalClasses.themeColor}
        mb={20}
        ml={5}
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
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
                    style={{ cursor: 'pointer' }}
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
