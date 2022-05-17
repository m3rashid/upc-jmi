import React from 'react'
import { Avatar, Card, Group, SimpleGrid, Text, Title } from '@mantine/core'

import { useGlobalStyles } from '../../../globals/globalStyles'
import TwoColumnGrid from '../../../globals/twoColumnGrid'
import { facilityList } from './data'

interface IProps {}

const FacultyMembers: React.FC<IProps> = () => {
  const { classes: globalClasses } = useGlobalStyles()

  return (
    <>
      <Title className={globalClasses.themeColor} mb={20} ml={5}>
        Faculty Members
      </Title>
      <TwoColumnGrid>
        <SimpleGrid>
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

                  <Text size="lg" weight={500}>
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
        <div></div>
      </TwoColumnGrid>
    </>
  )
}

export default FacultyMembers
