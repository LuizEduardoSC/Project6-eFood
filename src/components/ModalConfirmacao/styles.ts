import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
  padding: 16px;
`

export const Container = styled.div`
  background-color: ${cores.vermelho};
  padding: 32px 24px;
  max-width: 480px;
  width: 100%;
  text-align: center;

  @media ${device.mobile} {
    padding: 24px 16px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.buttonText};
  margin-bottom: 16px;
`

export const Texto = styled.p`
  font-size: 14px;
  color: ${cores.buttonText};
  margin-bottom: 24px;
`

export const Botao = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
