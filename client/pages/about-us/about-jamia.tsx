import React from 'react'
import { Timeline, Text } from '@mantine/core'
import {
  ArrowBarToRight,
  ArrowNarrowRight,
  Bookmark,
  Feather,
  FocusCentered,
  PlaylistAdd,
  Snowflake,
  Sun,
} from 'tabler-icons-react'

import { useGlobalStyles } from '../../components/globals/globalStyles'
import PageWrapper from '../../components/pageWrapper'

interface IProps {}

const AboutJamia: React.FC<IProps> = () => {
  const { classes } = useGlobalStyles()
  const iconSize = 18

  return (
    <PageWrapper>
      <div className={classes.themeColor}>
        <h1>JAMIA MILLIA ISLAMIA</h1>
        <Timeline active={7} bulletSize={30} lineWidth={5}>
          <Timeline.Item
            bullet={<Sun size={iconSize} />}
            title="Foundation Stone Laid"
          >
            <Text color="dimmed" size="md">
              The foundation stone of the prestigious institution was laid by
              Shaikhul Hind Maulana Mahmud Hasan, Maulana Mohammad Ali Jauhar,
              Hakim Ajmal Khan, Dr. Zakir Khan, Dr. Mukhtar Ahmad Ansari, Abdul
              Majeed Khwaja, and many other enthusiastic personalities.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<ArrowNarrowRight size={iconSize} />}
            title="Established in 1920"
          >
            <Text color="dimmed" size="md">
              Jamia Millia Islamia, established in the year 1920, is an
              institution originally established by a group of Muslim
              nationalists and intellectuals at Aligarh, Uttar Pradesh during
              the Khilafat and Non-Cooperate movement in response to Mahatma
              Gandhi’s step to boycott government-supported education system
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<ArrowBarToRight size={iconSize} />}
            title="Campus Shifted in 1925"
          >
            <Text color="dimmed" size="md">
              In the year 1925, its campus shifted from Aligarh to Delhi. Since
              then, it has been continuously growing, always renewing its
              methods and preparing itself from time to time to meet new needs.
              Loyal to its ideals, it has over the years, tried to enhance the
              physical and mental development of students, and has become a
              premier educational institute of the country.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<Bookmark size={iconSize} />}
            title="Declared Deemed University in 1962"
          >
            <Text color="dimmed" size="md">
              Jamia Millia Islamia was declared a Deemed University under
              Section 2 of the University Grants Commission(UGC) Act in 1962
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<PlaylistAdd size={iconSize} />}
            title="New Faculties"
          >
            <Text color="dimmed" size="md">
              In 1981, the faculties of Humanities and Languages, Natural
              Sciences, Social Science, and the State Resource Centre were
              founded.
            </Text>
            <Text color="dimmed" size="md">
              In 1983, it started the Mass Communication Research Centre and the
              Centre for Coaching and Career Planning.
            </Text>
            <Text color="dimmed" size="md">
              In 1985, it established the Faculty of Engineering & Technology
              and the University Computer Centre. Academic Staff College and the
              Academy of Third World Studies followed in 1987 and 1988. By a
              Special Act of the Parliament,
            </Text>
            <Text color="dimmed" size="md">
              In the list of the Faculties, i.e. Education, Humanities &
              Languages, Natural Sciences, Social Sciences. Engineering &
              Technology, one more Faculty - Faculty of Law, was added in 1989.
            </Text>
            <Text color="dimmed" size="md">
              Many new courses and programmes at UG and PG levels have since
              been added.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<FocusCentered size={iconSize} />}
            title="Became Central University in 1988"
          >
            <Text color="dimmed" size="md">
              Jamia Millia Islamia became a Central University in the year 1988
              by an act of the Indian Parliament which was passed on December
              26, 1988
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<Feather size={iconSize} />}
            title="Other Faculties"
          >
            <Text color="dimmed" size="md">
              Besides its nine faculties, Jamia has a number of centers of
              learning and research, like AJK-Mass Communication Research Centre
              (MCRC), Academy of International Studies, etc. Jamia is also
              marching ahead in the field of Information Technology (IT). It
              offers various undergraduate and postgraduate IT courses. Apart
              from this, the Jamia has a campus-wide network which connects a
              large number of its departments and offices.
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<Snowflake size={iconSize} />}
            title="Jamia Now"
          >
            <Text color="dimmed" size="md">
              The story of its growth from a small institution in the
              pre-independence India to a central university located in New
              Delhi—offering integrated education from nursery to research in
              specialized areas—is a saga of dedication, conviction, and vision
              of a people who worked against all odds and nurtured it growth
              step by step.
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </PageWrapper>
  )
}

export default AboutJamia
