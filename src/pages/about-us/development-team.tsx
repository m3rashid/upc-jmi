import {
  Anchor,
  Avatar,
  Box,
  Card,
  createStyles,
  Group,
  List,
  SimpleGrid,
  Text,
} from '@mantine/core'
import React from 'react'

import devTeam from 'data/devTeam'
import { useGlobalStyles } from 'components/globals/globalStyles'
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
  Mail,
  MailOpened,
  Phone,
  World,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    minWidth: '70%',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 'calc(100% - 32px)',
    },
  },
}))

interface IProps {}

const DevelopmentTeam: React.FC<IProps> = () => {
  const { classes } = useStyles()
  const { classes: globalClasses } = useGlobalStyles()

  return (
    <>
      <SimpleGrid className={classes.root}>
        {devTeam.map((person) => {
          return (
            <Card key={person.id}>
              <Avatar
                src={person.photo}
                sx={{ width: '100%', height: 'auto', marginBottom: '20px' }}
                radius="md"
              />
              <Box>
                <Text
                  size="lg"
                  weight={500}
                  className={globalClasses.brandColor}
                  style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                  align="center"
                >
                  {person.name}
                </Text>
                <Text
                  size="sm"
                  sx={{ textTransform: 'uppercase' }}
                  weight={700}
                  color="dimmed"
                  align="center"
                >
                  {person.department} : {person.batch}
                </Text>

                <Group spacing={8} sx={{ justifyContent: 'center' }} mt={10}>
                  {person.contri.map((c, index) => (
                    <Text
                      component="span"
                      sx={{ fontSize: '1.5rem' }}
                      key={`${person.name}-${index}-${c}`}
                    >
                      {c}
                    </Text>
                  ))}
                </Group>
              </Box>
              <Group
                noWrap
                mt={20}
                spacing={8}
                sx={{ justifyContent: 'center' }}
              >
                {person.github && (
                  <Anchor<'a'> href={person.github} target="_blank">
                    <BrandGithub size={32} />
                  </Anchor>
                )}
                {person.linkedin && (
                  <Anchor<'a'> href={person.linkedin} target="_blank">
                    <BrandLinkedin size={32} />
                  </Anchor>
                )}
                {person.twitter && (
                  <Anchor<'a'> href={person.twitter} target="_blank">
                    <BrandTwitter size={32} />
                  </Anchor>
                )}
                {person.instagram && (
                  <Anchor<'a'> href={person.instagram} target="_blank">
                    <BrandInstagram size={32} />
                  </Anchor>
                )}
                {person.portfolio && (
                  <Anchor<'a'> href={person.portfolio} target="_blank">
                    <World size={32} />
                  </Anchor>
                )}
                {person.email && (
                  <Anchor<'a'> href={'mailto:' + person.email}>
                    <MailOpened size={32} />
                  </Anchor>
                )}
                {person.phone && (
                  <Anchor<'a'> href={'tel:' + person.phone}>
                    <Phone size={32} />
                  </Anchor>
                )}
              </Group>
            </Card>
          )
        })}
      </SimpleGrid>

      <br />
      <br />

      <Anchor<'a'>
        size="lg"
        sx={{ fontWeight: 600, float: 'right' }}
        target="_blank"
        href="https://allcontributors.org/docs/en/emoji-key"
      >
        See Contribution Emoji key
      </Anchor>
    </>
  )
}

export default DevelopmentTeam
