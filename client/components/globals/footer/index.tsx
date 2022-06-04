import React from 'react'
import { Text, Container, ActionIcon, Group } from '@mantine/core'
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react'

import { useStyles } from './styles'
import { footerLinks, IFooterLink } from './links'

interface IFooterLinks {
  data: IFooterLink[]
}

const FooterLinks: React.FC<IFooterLinks> = ({ data }) => {
  const { classes } = useStyles()

  return (
    <div className={classes.groups}>
      {data?.map((group) => {
        const links = group.links.map((link) => (
          <Text<'a'>
            key={link.id}
            className={classes.link}
            component="a"
            href={link.link}
            onClick={(e) => e.preventDefault()}
          >
            {link.label}
          </Text>
        ))

        return (
          <div className={classes.wrapper} key={group.id}>
            <Text className={classes.title}>{group.title}</Text>
            {links}
          </div>
        )
      })}
    </div>
  )
}

interface IProps {}

const Footer: React.FC<IProps> = () => {
  const { classes } = useStyles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo /> */}
          <Text size="xs" color="dimmed" className={classes.description}>
            University Placement Cell - Jamia Millia Islamia, Jamia Nagar,
            Okhla, New Delhi
          </Text>
        </div>

        <FooterLinks data={footerLinks} />
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          &copy;
          {` ${new Date().getFullYear()} UPC-JMI. All rights reserved.`}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
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
