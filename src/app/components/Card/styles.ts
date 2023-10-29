import styled, { DefaultTheme, css } from 'styled-components'

export const Wrapper = styled.div<{ type: 'list' | 'cards' }>`
  ${({ theme, type }) => css`
    width: ${type === 'list' ? '100%' : '30rem'};

    background-color: ${theme.colors.white};
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px ${theme.colors.shadow};

    .content-languages {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
    }
  `}
`

const headerModifier = {
  list: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
    }

    .content-buttons {
      margin-left: auto;
    }
  `,
  cards: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  `,
}

export const Header = styled.div<{ type: 'list' | 'cards' }>`
  ${({ theme, type }) => css`
    ${!!type && headerModifier[type](theme)}

    .content-buttons {
      display: flex;
      gap: 1rem;
    }
  `}
`

const cardModifier = {
  list: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;

    p {
      color: ${theme.colors.grayFont};

      strong {
        font-weight: 500;
        color: ${theme.colors.grayFont};
      }
    }
  `,
  cards: (theme: DefaultTheme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${theme.colors.outline};
  `,
}

export const Body = styled.div<{ type: 'list' | 'cards' }>`
  ${({ theme, type }) => css`
    padding: 1rem;
    padding-bottom: 0;

    p {
      font-size: ${theme.font.sizes.small};
    }

    ${!!type && cardModifier[type](theme)}
  `}
`

export const Language = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.warning};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.warning};
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;
    font-weight: bold;
  `}
`
