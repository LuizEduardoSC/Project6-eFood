import styled from 'styled-components'
import { cores, device } from '../../styles'

export const TagContainer = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.buttonText};
  font-size: 12px;
  font-weight: 700;
  padding: 12px 8px;
  display: inline-block;
  top: 10px;
  right: 10px;
  position: absolute;

  @media ${device.mobile} {
    font-size: 11px;
    padding: 10px 6px;
    top: 8px;
    right: 8px;
  }
`
