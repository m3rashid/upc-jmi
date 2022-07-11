import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
  Image,
} from '@mantine/core'
import React from 'react'
import { useRouter } from 'next/router'
import { useBooleanToggle } from '@mantine/hooks'

import DropDown from 'components/globals/header/dropDown'
import { useGlobalStyles } from 'components/globals/globalStyles'
import { useStyles, HEADER_HEIGHT } from 'components/globals/header/styles'
import {
  aboutUs,
  academic,
  adminLoggedIn,
  research,
} from 'components/globals/header/data'
import UserDropDown from './userDropDown'

interface IDropdowns {
  toggleOpened: (val: boolean) => void
}
const AboutUsDropdown = ({ toggleOpened }: IDropdowns) => (
  <DropDown
    toggleOpened={toggleOpened}
    innerData={aboutUs}
    title="About Us"
    innerRoute="about-us"
  />
)
const AcademicDropdown = ({ toggleOpened }: IDropdowns) => (
  <DropDown
    toggleOpened={toggleOpened}
    innerData={academic}
    title="Academic"
    innerRoute="academic"
  />
)
const ResearchDropdown = ({ toggleOpened }: IDropdowns) => (
  <DropDown
    toggleOpened={toggleOpened}
    innerData={research}
    title="Research"
    innerRoute="research"
  />
)

interface IProps {
  colorScheme: any
  toggleColorScheme: () => void
}

interface IHeaderLink {
  label: string
  link: string
  isActive: boolean
  toggleOpened: (val: boolean) => void
}

const HeaderLink: React.FC<IHeaderLink> = ({
  label,
  link,
  isActive,
  toggleOpened,
}) => {
  const { push } = useRouter()
  const { classes, cx } = useGlobalStyles()
  return (
    <Text
      className={cx(classes.link, {
        [classes.linkActive]: isActive,
      })}
      onClick={(event: any) => {
        event.preventDefault()
        push(link)
        toggleOpened(false)
      }}
    >
      <>{label}</>
    </Text>
  )
}

const TopHeader: React.FC<IProps> = ({ colorScheme, toggleColorScheme }) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { pathname, push } = useRouter()
  const { classes } = useStyles()

  const imgLogo = '/images/logo_green.png'

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <div className={classes.logoContainer} onClick={() => push('/')}>
          <Image className={classes.logo} src={imgLogo} height="60px" alt="" />
        </div>

        <Group spacing={5} className={classes.links}>
          <HeaderLink
            label="Home"
            link="/"
            isActive={pathname === '/' ? true : false}
            toggleOpened={toggleOpened}
          />
          <HeaderLink
            label="Placement"
            link="/placement"
            isActive={pathname === '/placement' ? true : false}
            toggleOpened={toggleOpened}
          />
          <AboutUsDropdown toggleOpened={toggleOpened} />
          <AcademicDropdown toggleOpened={toggleOpened} />
          <ResearchDropdown toggleOpened={toggleOpened} />
          <UserDropDown
            toggleOpened={toggleOpened}
            {...{ colorScheme, toggleColorScheme }}
          />
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={{ ...styles }}>
              <HeaderLink
                label="Home"
                link="/"
                isActive={pathname === '/' ? true : false}
                toggleOpened={toggleOpened}
              />
              <HeaderLink
                label="Placement"
                link="/placement"
                isActive={pathname === '/placement' ? true : false}
                toggleOpened={toggleOpened}
              />
              <AboutUsDropdown toggleOpened={toggleOpened} />
              <AcademicDropdown toggleOpened={toggleOpened} />
              <ResearchDropdown toggleOpened={toggleOpened} />
              <UserDropDown
                toggleOpened={toggleOpened}
                {...{ colorScheme, toggleColorScheme }}
              />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default TopHeader
