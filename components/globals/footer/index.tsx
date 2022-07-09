import React from 'react'
import { Text, Container, ActionIcon, Group, Box, Anchor } from '@mantine/core'
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram,
  Icon,
  PhoneCall,
  Mail,
  Location,
  Code,
} from 'tabler-icons-react'
import Link from 'next/link'

import { useStyles } from 'components/globals/footer/styles'

interface IProps {}

const NavItem = ({ Icon, text }: { Icon: Icon; text: string | string[] }) => {
  return (
    <Group noWrap>
      <Icon size={16} />
      {typeof text === 'string' ? (
        <Text color="dimmed" size="sm">
          {text}
        </Text>
      ) : (
        text.map((t) => {
          const [_, label] = t.split(':')
          return (
            <Anchor component="a" href={t} key={label} color="dimmed" size="sm">
              {label},
            </Anchor>
          )
        })
      )}
    </Group>
  )
}

const Footer: React.FC<IProps> = () => {
  const { classes } = useStyles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Box>
          <NavItem
            Icon={PhoneCall}
            text={[
              'tel:+91(11)26981717',
              'tel:26984617',
              'tel:26984658',
              'tel:26988044',
              'tel:26987183',
            ]}
          />
          <NavItem Icon={Mail} text={['mailto:computerengg@jmi.ac.in']} />
          <NavItem
            Icon={Location}
            text="Department of Computer Engineering, Jamia Millia Islamia, New Delhi, Delhi-110025 India"
          />
          <br />
          <Text color="dimmed" size="sm">
            &copy; &nbsp;
            {new Date().getFullYear()}, Department of Computer Engineering, JMI
          </Text>

          <Link href="/about-us/development-team">
            <Group
              noWrap
              spacing={5}
              align="center"
              mt={8}
              sx={(theme) => ({
                cursor: 'pointer',
                color: theme.primaryColor,
                fontWeight: 'bold',
                '&:hover': { textDecoration: 'underline' },
              })}
            >
              <Code size={24} />
              <Text>Meet the Development Team</Text>
            </Group>
          </Link>
        </Box>

        <Group spacing={0} className={classes.social} position="right">
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  )
}

export default Footer
