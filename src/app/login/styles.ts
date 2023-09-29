import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
`

export const ContentForm = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: auto;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayFont};
`

export const Divider = styled.div`
  width: 100%;
  ${({ theme }) => css`
    span {
      white-space: nowrap;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.grayFont};
      display: flex;
      align-items: center;
      line-height: 50px;

      &::before {
        content: '';
        width: 100%;
        height: 0.01rem;
        background-color: ${theme.colors.grayFont};
        margin-right: 5px;
      }

      &::after {
        content: '';
        width: 100%;
        height: 0.01rem;
        background-color: ${theme.colors.grayFont};
        margin-left: 5px;
      }
    }
  `}
`
