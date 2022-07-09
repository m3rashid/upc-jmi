import React from 'react'
import { createStyles, Paper, SimpleGrid, Text } from '@mantine/core'

import { useGlobalStyles } from 'components/globals/globalStyles'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'hidden',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundColor: theme.primaryColor,
    },
  },
}))

interface IProps {}

const VisionAndMission: React.FC<IProps> = () => {
  const { classes: globalClasses } = useGlobalStyles()
  const { classes } = useStyles()

  return (
    <div className={globalClasses.themeColor}>
      <SimpleGrid cols={1}>
        <Paper withBorder radius="md" className={classes.card}>
          <Text size="xl" weight={700}>
            Vision
          </Text>
          <Text size="lg" mt="sm">
            To produce excellent professionals and innovators in the field of
            Computer Engineering for the economic development and global
            competitiveness of the nation
          </Text>
        </Paper>
        <Paper withBorder radius="md" className={classes.card}>
          <Text size="xl" weight={700}>
            Mission
          </Text>
          <Text size="lg" mt="sm">
            To impart proactive education that focuses on intellectually vibrant
            instructions, sound practical training learning and project-based
            learning.
          </Text>
          <Text size="lg" mt="sm">
            To prepare the students for high-quality research and industry
            oriented innovation.
          </Text>
          <Text size="lg" mt="sm">
            To prepare the students for immediate career success and lifelong
            challenges global in global industrial needs.
          </Text>
          <Text size="lg" mt="sm">
            To educate the students and to make them ethically and socially
            responsible citizens for national and global development.
          </Text>
        </Paper>
      </SimpleGrid>
    </div>
  )
}

export default VisionAndMission
