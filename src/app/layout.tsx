'use client'

import { Provider } from 'react-redux'
import store from './store/configureStore'
import RouteGuard from './utils/routeGuard'
import { ThemeProvider } from 'styled-components'
// import  from './styles/theme'
import GlobalStyles from './styles/global'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modals from './components/Modals'
import useAppSelector from './hooks/useAppSelector'
import theme, { darkTheme } from './styles/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ChildrenProvider>{children}</ChildrenProvider>
    </Provider>
  )
}

function ChildrenProvider({ children }: { children: React.ReactNode }) {
  const { darkMode } = useAppSelector((state) => state.filters)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <html lang="en">
        <body>
          <GlobalStyles />
          <RouteGuard>{children}</RouteGuard>
          <ToastContainer theme="dark" bodyStyle={{ fontSize: '14px' }} />
          <Modals />
        </body>
      </html>
    </ThemeProvider>
  )
}
