import React from 'react'
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  MantineThemeOverride,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { BrowserRouter } from 'react-router-dom'
import SideNavbar from './navbar'
import { RecoilRoot } from 'recoil'

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
    <BrowserRouter>
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
            <NotificationsProvider position="top-right" zIndex={2077} limit={5}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '100vh',
                }}
                className="hide-scrollbar"
              >
                <SideNavbar />
                <div style={{ overflowX: 'auto' }}>{children}</div>
              </div>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default RootWrapper
