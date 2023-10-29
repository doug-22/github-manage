import styled, { css } from 'styled-components'

interface InputProps {
  width: string
  height?: string
  $error?: boolean
}

export const Wrapper = styled.div<InputProps>`
  ${({ width, height, theme, $error }) => css`
    width: ${width ?? '100%'};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      color: ${theme.colors.grayFont};
      font-weight: ${theme.font.bold};

      strong {
        color: ${theme.colors.error};
      }
    }

    .login {
      width: 100%;
      height: ${height ?? '5.6rem'};
      border-radius: 1rem;
      border: 1px solid
        ${$error ? theme.colors.error : theme.colors.placeholder};
      outline: none;

      color: ${theme.colors.placeholder};
      font-size: ${theme.font.sizes.small};

      padding-left: 1.5rem;
    }
    .home {
      width: 100%;
      height: 3.8rem;
      border-radius: 0.4rem;

      border: 0.1rem solid ${theme.colors.border};
      background-color: ${theme.colors.hover};
      outline: none;

      padding-left: 1rem;
      color: ${theme.colors.grayFont};

      &:focus {
        background-color: ${theme.colors.backgroundInputSearch};
        border: 0.1rem solid ${theme.colors.borderinputSearch} !important;
      }
    }
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.error};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &:disabled {
      background-color: ${theme.colors.gray};
    }
  `}
`
