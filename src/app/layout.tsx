'use client'

import { Provider } from 'react-redux'
import store from './store/configureStore'
import RouteGuard from './utils/routeGuard'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <html lang="en">
          <body>
            <GlobalStyles />
            <RouteGuard>{children}</RouteGuard>
          </body>
        </html>
      </Provider>
    </ThemeProvider>
  )
}
