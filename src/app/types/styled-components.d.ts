/* eslint-disable @typescript-eslint/no-empty-interface */
import theme, { darkTheme } from '../styles/theme'

// inferência de tipos
type Theme = typeof theme
type DarkTheme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Pick<Theme, DarkTheme> {}
}
