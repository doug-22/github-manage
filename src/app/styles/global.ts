import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-30px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #76d8c0;
    border-radius: 10px;
  }

  .MuiTooltip-tooltip {
    background-color: #00A57C !important;
    font-size: 10px !important;
    font-family: 'Roboto' !important;
    font-weight: 400 !important;
  }
  .MuiTooltip-arrow {
    color: #00A57C !important;
  }
`

export default GlobalStyles
