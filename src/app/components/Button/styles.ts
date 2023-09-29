import styled, { DefaultTheme, css } from 'styled-components'

interface ButtonProps {
  width?: string
  height?: string
  disabled?: boolean
  $background: 'primary' | 'secondary'
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
}

export const WrapperButton = styled.button<ButtonProps>`
  ${({ width, height, $background, theme }) => css`
    width: ${width ?? '100%'};
    height: ${height ?? '5.6rem'};
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    ${!!$background && colorModifier[$background](theme)}

    &:hover {
      filter: brightness(0.9);
    }
    &:disabled {
      cursor: default;
      background-color: ${theme.colors.gray};
      box-shadow: none;
      filter: brightness(1);
    }
  `}
`
