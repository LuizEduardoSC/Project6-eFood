import styled from 'styled-components'
import { cores } from '../../styles'

export const Resta = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 40px;
  align-items: stretch;

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
  width: 472px;
  min-height: 398px;
`
