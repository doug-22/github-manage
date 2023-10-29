import styled, { css } from 'styled-components'

export const BackgroundModal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: ${theme.colors.darkModal};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const ModalDelete = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 0.5rem;

    width: 35rem;
    box-shadow: 1px 1px 3px ${theme.colors.shadow};
  `}
`

export const HeaderModalDetele = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.orange};
    border-bottom: 1px solid ${theme.colors.warning};
    border-radius: 0.5rem 0.5rem 0 0;

    height: 6rem;
    padding: 0 1rem;

    .title {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${theme.colors.warning};
    }
  `}
`
export const BodyModalDetele = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.darkModal};
    p {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
export const ButtonsModalDetele = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding: 1rem;
`
