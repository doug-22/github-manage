import styled from 'styled-components'

export const WrapperDashboard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundHome};
`

export const WrapperCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem;
`
