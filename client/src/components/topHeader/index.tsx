import React from 'react'
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
  Center,
  Image,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { Sun, Moon } from 'tabler-icons-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useStyles, HEADER_HEIGHT } from './styles'
import { aboutUs, academic, research } from './data'
import DropDown from './dropDown'
import { useGlobalStyles } from '../../globals/globalStyles'

const AboutUsDropdown = () => (
  <DropDown innerData={aboutUs} title="About Us" innerRoute="about-us" />
)
const AcademicDropdown = () => (
  <DropDown innerData={academic} title="Academic" innerRoute="academic" />
)

const ResearchDropdown = () => (
  <DropDown innerData={research} title="Research" innerRoute="research" />
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
  const navigate = useNavigate()
  const { classes, cx } = useGlobalStyles()
  return (
    <Text
      className={cx(classes.link, {
        [classes.linkActive]: isActive,
      })}
      onClick={(event: any) => {
        event.preventDefault()
        navigate(link)
        toggleOpened(false)
      }}
    >
      <>{label}</>
    </Text>
  )
}

const TopHeader: React.FC<IProps> = ({ colorScheme, toggleColorScheme }) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { pathname } = useLocation()
  const { classes } = useStyles()
  const navigate = useNavigate()

  const Icon = colorScheme === 'dark' ? Sun : Moon

  const ThemeChanger = () => (
    <Group position="center" my="xl">
      <Center className={classes.iconWrapper} aria-label="Toggle theme">
        <Icon onClick={() => toggleColorScheme()} />
      </Center>
    </Group>
  )

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <div className={classes.logoContainer} onClick={() => navigate('/')}>
          <Image className={classes.logo} src="/images/logo.png" alt="" />
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
          <AboutUsDropdown />
          <AcademicDropdown />
          <ResearchDropdown />
          <ThemeChanger />
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
              <AboutUsDropdown />
              <AcademicDropdown />
              <ResearchDropdown />
              <ThemeChanger />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default TopHeader
