import React from 'react'
import { Card, SimpleGrid, Text } from '@mantine/core'

import PageWrapper from '../../components/pageWrapper'
import { useGlobalStyles } from '../../components/globals/globalStyles'

interface IProps {}

const MessageFromHod: React.FC<IProps> = () => {
  const { classes: globalClasses } = useGlobalStyles()
  return (
    <PageWrapper>
      <Card className={globalClasses.themeColor}>
        <h1>Message from H.O.D.</h1>
        <SimpleGrid>
          <Text>
            To fulfil the growing demand of Computer Engineers in the Government
            and private sectors, the Department is making best efforts to
            produce highly trained and capable engineers who can take up the
            challenges of the real world.
          </Text>
          <Text>
            The two key objectives of the department are to maintain high
            academic standards and to give due weightage to practical work. The
            department has a fine blend of renowned as well as young and dynamic
            personalities as faculty, who are involved in imparting quality
            education. The faculty strives to foster and encourage a teaching
            methodology that is both practical and theoretical in approach. This
            orientation has led to successful projects and training.
          </Text>
          <Text>
            The lab facilities are being upgraded from time to time and provide
            adequate opportunities for the students to learn and innovate . The
            Department also organizes interactive lectures every week by
            inviting Alumni and Technocrats from industries for the overall
            development of students.
          </Text>
          <Text>
            Departmental society has been established by the students for the
            extra curricular activities. This society conducts various technical
            and cultural events regularly. “Engineers are the creators of the
            new world”, going with these lines the Department has a fully
            equipped Project lab to encourage the students to show their
            creativity. Educational tours and industrial visits are regularly
            organized to enhance the practical knowledge of the students with
            the recent technologies used in the industries.
          </Text>
          <Text></Text>
          <Text>
            Best wishes,
            <br />
            Prof. Bashir Alam
            <br />
            Head of Department
            <br />
            Department of Computer Engineering
          </Text>
        </SimpleGrid>
      </Card>
    </PageWrapper>
  )
}

export default React.memo(MessageFromHod)
