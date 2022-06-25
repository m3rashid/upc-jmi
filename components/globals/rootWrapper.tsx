import React from 'react'
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  MantineThemeOverride,
} from '@mantine/core'
import { RecoilRoot } from 'recoil'
import { ModalsProvider } from '@mantine/modals'
import { NotificationsProvider } from '@mantine/notifications'

import Footer from './footer'
import TopHeader from './header'
import ScrollTopTop from './scrollToTop'

interface IProps {
  children: React.ReactNode
}

const RootWrapper: React.FC<IProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', colorScheme === 'dark' ? 'light' : 'dark')
  }

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setColorScheme(localTheme as ColorScheme)
    }
  }, [])

  const theme: MantineThemeOverride = {
    colorScheme,
    primaryColor: 'green',
  }

  return (
    <RecoilRoot>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            ...theme,
            colors: { ...theme.colors, brand: ['#046b09'] },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider limit={5} position="bottom-right">
            <ModalsProvider>
              <TopHeader
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
              />
              {children}
              <Footer />
              <ScrollTopTop />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </RecoilRoot>
  )
}

export default RootWrapper