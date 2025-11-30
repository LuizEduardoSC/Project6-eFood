import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Resta = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 40px;
  align-items: stretch;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }

  > * {
    display: flex;
    height: 100%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px ${cores.vermelho};
  width: 100%;
  max-width: 472px;
  min-height: 398px;

  @media ${device.tablet} {
    max-width: 100%;
    min-height: 350px;
  }

  @media ${device.mobile} {
    min-height: 320px;
  }
`
