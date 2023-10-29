'use client'

import { Provider } from 'react-redux'
import store from './store/configureStore'
import RouteGuard from './utils/routeGuard'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modals from './components/Modals'

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
            <ToastContainer theme="dark" bodyStyle={{ fontSize: '14px' }} />
            <Modals />
          </body>
        </html>
      </Provider>
    </ThemeProvider>
  )
}
