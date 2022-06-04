import React from 'react'
import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  SimpleGrid,
  Title,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import {
  facilityList,
  IShortName,
  IFacility,
} from '../../data/about-us/facilities'
import { useGlobalStyles } from '../../components/globals/globalStyles'
import TwoColumnGrid from '../../components/twoColumnGrid'
import PageWrapper from '../../components/pageWrapper'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  title: {
    fontWeight: 700,
    fontSize: theme.fontSizes.xl,
    textAlign: 'center',
  },
  body: {
    padding: theme.spacing.md,
    textAlign: 'center',
  },
  group: {
    flexDirection: 'column',
  },
}))

interface IProps {}

const Facilities: React.FC<IProps> = () => {
  const { classes } = useStyles()
  const { classes: globalClasses } = useGlobalStyles()
  const scrollTo = useWindowScroll()[1]
  const [current, setCurrent] = React.useState<IShortName>('clab1')
  const [facilityDetail, setFacilityDetail] = React.useState<IFacility>()

  const handleSelect = (id: IShortName) => {
    setCurrent(id)
    scrollTo({ y: 0 })
  }

  React.useEffect(() => {
    facilityList.forEach((f) => {
      if (f.shortName === current) {
        setFacilityDetail(f)
        return
      }
    })
  }, [current])

  return (
    <PageWrapper>
      <Title className={globalClasses.themeColor} my={20} ml={5}>
        Facilities
      </Title>
      <TwoColumnGrid>
        <SimpleGrid
          spacing="xs"
          className={globalClasses.twoColumnGridHeightFix}
        >
          {facilityList.map((facility) => (
            <Card key={facility.id}>
              <Title
                order={4}
                className={`${classes.title} ${globalClasses.brandColor}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelect(facility.shortName)}
              >
                {facility.title}
              </Title>
            </Card>
          ))}
        </SimpleGrid>

        <Card
          withBorder
          radius="md"
          p={0}
          className={`${classes.card} ${globalClasses.twoColumnGridHeightFix}`}
        >
          <Group noWrap spacing={0} className={classes.group}>
            <Image
              withPlaceholder
              src={facilityDetail?.imageSrc}
              alt={facilityDetail?.shortName}
            />
            <div className={classes.body}>
              <Text className={classes.title} mt="xs" mb="md">
                {facilityDetail?.title}
              </Text>
              {facilityDetail?.description.map((des) => (
                <Text key={des.id} mt={12}>
                  {des.text}
                </Text>
              ))}
            </div>
          </Group>
        </Card>
      </TwoColumnGrid>
    </PageWrapper>
  )
}

export default React.memo(Facilities)
