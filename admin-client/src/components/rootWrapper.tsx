import React from 'react'
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  MantineThemeOverride,
} from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import SideNavbar from './navbar'

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
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}
            className="hide-scrollbar"
          >
            <SideNavbar />
            <div style={{ overflowX: 'auto' }}>{children}</div>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  )
}

export default RootWrapper
