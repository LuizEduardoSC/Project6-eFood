import styled from 'styled-components'
import { cores, device } from '../../styles'

interface DrawerProps {
  $isOpen: boolean
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

export const Drawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${cores.vermelho};
  z-index: 1201;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.buttonText};
  margin: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const GrupoCampo = styled.div`
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

export const ColunaNumeroCartao = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const ColunaCVV = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 80px;
`

export const Resumo = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 235, 217, 0.4);
  color: ${cores.buttonText};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const TotalLinha = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`

export const Botoes = styled.div`
  margin-top: 16px;
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
