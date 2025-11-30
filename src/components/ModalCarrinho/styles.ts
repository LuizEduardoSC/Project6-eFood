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
  z-index: 1000;
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
  z-index: 1001;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`

export const HeaderDrawer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 235, 217, 0.3);

  @media ${device.mobile} {
    padding: 12px;
  }
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

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${device.mobile} {
    padding: 12px;
    gap: 12px;
  }
`

export const ListaItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`

export const ItemCarrinho = styled.div`
  background-color: ${cores.buttonText};
  padding: 8px;
  display: flex;
  gap: 8px;
  position: relative;

  @media ${device.mobile} {
    padding: 6px;
    gap: 6px;
  }
`

export const ImagemProduto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;

  @media ${device.mobile} {
    width: 70px;
    height: 70px;
  }
`

export const ConteudoItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${device.mobile} {
    gap: 6px;
  }
`

export const NomeProduto = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  margin: 0;

  @media ${device.mobile} {
    font-size: 16px;
  }
`

export const PrecoProduto = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.vermelho};
  margin: 0;

  @media ${device.mobile} {
    font-size: 13px;
  }
`

export const BotaoRemover = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
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
`

export const ResumoCarrinho = styled.div`
  background-color: ${cores.buttonText};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;

  @media ${device.mobile} {
    padding: 12px;
    gap: 12px;
  }
`

export const LinhaTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LabelTotal = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.vermelho};

  @media ${device.mobile} {
    font-size: 13px;
  }
`

export const ValorTotal = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.vermelho};

  @media ${device.mobile} {
    font-size: 13px;
  }
`

export const BotaoContinuar = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: 2px solid ${cores.vermelho};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.mobile} {
    height: 32px;
    font-size: 13px;
  }
`

export const CarrinhoVazio = styled.div`
  text-align: center;
  padding: 80px 16px;
  color: ${cores.buttonText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media ${device.tablet} {
    padding: 60px 16px;
  }

  @media ${device.mobile} {
    padding: 40px 12px;
  }
`

export const MensagemVazio = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 16px;
    margin-bottom: 12px;
  }
`

