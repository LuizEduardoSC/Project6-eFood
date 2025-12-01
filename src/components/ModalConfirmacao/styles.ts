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
  z-index: 1300;
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
  z-index: 1301;
  display: flex;
  flex-direction: column;
  transform: ${(props) =>
    props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`

export const Header = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  text-align: center;
  gap: 16px;

  @media ${device.mobile} {
    padding: 24px 12px;
    gap: 12px;
  }
`

export const Texto = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.buttonText};
  margin: 0;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Botao = styled.button`
  width: 100%;
  max-width: 328px;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: none;
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
