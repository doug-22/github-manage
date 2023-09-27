'use client'

import { Provider } from "react-redux"
import store from "./store/configureStore"
import RouteGuard from "./utils/routeGuard"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <RouteGuard>
            {children}
          </RouteGuard>
        </body>
      </html>
    </Provider>
  )
}
