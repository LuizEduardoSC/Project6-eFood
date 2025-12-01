import styled from 'styled-components'
import { cores, device } from '../../styles'

interface OverlayProps {
  $isOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1100;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
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
  transform: ${(props) =>
    props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
  padding: 16px;

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 12px;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  padding-top: 8px;

  @media ${device.mobile} {
    gap: 12px;
  }
`

export const Header = styled.div`
  padding: 0 0 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 235, 217, 0.3);
  margin-bottom: 16px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.buttonText};
  margin: 0;

  @media ${device.mobile} {
    font-size: 16px;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media ${device.mobile} {
    padding: 2px;
  }
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
  gap: 8px;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`

export const Coluna = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
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
