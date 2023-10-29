import styled, { css } from 'styled-components'

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 0rem 3rem;

    select option:hover {
      background-color: red !important;
      box-shadow: 0 0 10px 100px #1882a8 inset;
    }

    /* .option {
      font-size: ${theme.font.sizes.medium};
      padding: 0.5rem 1.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.hover};
      }
    } */
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.grayFont};
    font-size: ${theme.font.sizes.large};
  `}
`

export const WrapperSelectView = styled.div`
  position: relative;
`
export const WrapperOptions = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translate(-50%, 0);

    width: 10rem;
    background-color: ${theme.colors.white};

    box-shadow: 1px 1px 3px ${theme.colors.shadow};
    border-radius: 0.4rem;
    padding: 0.5rem 0;
  `}
`
export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    cursor: pointer;

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.grayFont};
    }

    &:hover {
      background-color: ${theme.colors.hover};
    }
  `}
`
export const WrapperAddRepository = styled.div`
  position: relative;
`
export const ModalAddRepository = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 6rem;
    right: 0;

    width: 40rem;

    background-color: ${theme.colors.white};
    box-shadow: 1px 1px 3px ${theme.colors.shadow};
    border-radius: 0.4rem;

    .wrapper-input,
    .wrapper-buttons {
      padding: 1rem 2rem;
    }

    .wrapper-input {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .wrapper-buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;

      border-top: 1px solid ${theme.colors.outline};
    }
  `}
`
