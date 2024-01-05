import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaults'
import { GlobalStyle } from './styles/global'
import { SkeletonTheme } from 'react-loading-skeleton'

import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SkeletonTheme baseColor="#afc2d45a" highlightColor="#444">
        <GlobalStyle />
        <Header />
        <Outlet />
      </SkeletonTheme>
    </ThemeProvider>
  )
}
