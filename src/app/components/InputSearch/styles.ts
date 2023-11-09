import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width && width};

  position: relative;

  button {
    position: absolute;

    top: 0;
    right: 0;
  }
`
export const Input = styled.input`
  ${({ theme }) => css`
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

    &::placeholder {
      color: ${theme.colors.grayFont};
    }
  `}
`
