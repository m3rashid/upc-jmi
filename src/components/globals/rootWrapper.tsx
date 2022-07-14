import React from 'react'
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  MantineThemeOverride,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

import Footer from 'components/globals/footer'
import TopHeader from 'components/globals/header'
import ScrollTopTop from 'components/globals/scrollToTop'

interface IProps {
  children: React.ReactNode
}

const RootWrapper: React.FC<IProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) => {
    if (value === 'light' || value === 'dark') {
      setColorScheme(value)
      localStorage.setItem('theme', value)
    } else {
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
      localStorage.setItem('theme', colorScheme === 'dark' ? 'light' : 'dark')
    }
  }

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme === 'light' || localTheme === 'dark') {
      toggleColorScheme(localTheme as ColorScheme)
    } else {
      const darkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      toggleColorScheme(darkTheme ? 'dark' : 'light')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const theme: MantineThemeOverride = {
    colorScheme,
    primaryColor: 'green',
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          ...theme,
          colors: { ...theme.colors, brand: ['#046b09'] },
          fontFamily: 'Quicksand, sans-serif',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <TopHeader
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          />
          {children}
          <Footer />
          <ScrollTopTop />
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default RootWrapper
