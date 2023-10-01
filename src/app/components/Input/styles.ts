import styled, { css } from 'styled-components'

interface InputProps {
  width: string
  height?: string
}

export const Wrapper = styled.div<InputProps>`
  ${({ width, height, theme }) => css`
    width: ${width ?? '100%'};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      color: ${theme.colors.grayFont};
      font-weight: ${theme.font.bold};
      margin-left: 5px;
    }

    input {
      width: 100%;
      height: ${height ?? '5.6rem'};
      border-radius: 1rem;
      border: 1px solid ${theme.colors.placeholder};

      color: ${theme.colors.placeholder};
      font-size: ${theme.font.sizes.small};

      padding-left: 1.5rem;
    }
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.error};
    }

    &:disabled {
      background-color: ${theme.colors.gray};
    }
  `}
`
