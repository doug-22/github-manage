import styled, { DefaultTheme, css } from 'styled-components'

interface ButtonProps {
  width?: string
  height?: string
  disabled?: boolean
  $background: 'primary' | 'secondary' | 'transparent' | 'outline' | 'warning'
}

const colorModifier = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    &:hover {
      box-shadow: 0 0 6px ${theme.colors.primary};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    &:hover {
      box-shadow: 0 0 6px ${theme.colors.secondary};
    }
  `,
  transparent: (theme: DefaultTheme) => css`
    color: ${theme.colors.grayFont};
    background-color: transparent;
    &:hover {
      background-color: rgba(39, 40, 51, 0.04);
    }
  `,
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.grayFont};
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.outline};
    &:hover {
      background-color: rgba(39, 40, 51, 0.04);
    }
  `,
  warning: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.warning};
    border: 0.1rem solid ${theme.colors.warning};
    &:hover {
      box-shadow: 0 0 6px ${theme.colors.warning};
    }
  `,
}

export const WrapperButton = styled.button<ButtonProps>`
  ${({ width, height, $background, theme }) => css`
    width: ${width ?? '100%'};
    height: ${height ?? '5.6rem'};
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    ${!!$background && colorModifier[$background](theme)}

    &:hover {
      filter: brightness(0.9);
    }
    &:disabled {
      cursor: default;
      box-shadow: none;
      filter: brightness(1);
      opacity: 0.5;
    }
  `}
`
