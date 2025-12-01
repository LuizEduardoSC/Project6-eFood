import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1100;
`

interface DrawerProps {
  $isOpen: boolean
}

export const Drawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${cores.vermelho};
  z-index: 1101;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.mobile} {
    padding: 24px 16px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.buttonText};
  margin: 0;
  margin-bottom: 16px;
`

export const CampoGrupo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.buttonText};
`

export const Input = styled.input`
  height: 32px;
  padding: 0 8px;
  border: 1px solid ${cores.buttonText};
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  font-size: 14px;
`

export const LinhaCampos = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`

export const Coluna = styled.div`
  flex: 1;
`

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const BotaoPrimario = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const BotaoSecundario = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: 2px solid ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const Erro = styled.p`
  color: ${cores.buttonText};
  background-color: #8b0000;
  padding: 8px;
  font-size: 12px;
`
