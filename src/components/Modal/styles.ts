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
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
  padding: 16px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    padding: 8px;
  }
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${cores.vermelho};
  width: 1024px;
  max-width: 100%;
  height: 344px;
  display: flex;
  align-items: flex-start;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    width: 90%;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 95vh;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 8px;
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
    top: 4px;
    right: 4px;
    padding: 4px;
  }
`

export const Imagem = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-left: 32px;
  margin-top: 32px;
  flex-shrink: 0;

  @media ${device.tablet} {
    width: 240px;
    height: 240px;
    margin-left: 24px;
    margin-top: 24px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 200px;
    margin-left: 0;
    margin-top: 0;
  }
`

export const Content = styled.div`
  padding: 32px;
  padding-left: 24px;
  padding-top: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;

  @media ${device.tablet} {
    padding: 24px;
    gap: 12px;
  }

  @media ${device.mobile} {
    padding: 16px;
    gap: 12px;
  }
`

export const Titulo = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 900;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
  color: ${cores.buttonText};
  margin: 0;

  @media ${device.mobile} {
    font-size: 16px;
  }
`

export const Descricao = styled.p`
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

export const Porcao = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.buttonText};
  margin: 0;

  @media ${device.mobile} {
    font-size: 13px;
  }
`

export const BotaoAdicionar = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: none;
  padding: 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: 200px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 32px;
    font-size: 13px;
  }
`
