import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media ${device.mobile} {
    padding: 6px;
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;

  @media ${device.tablet} {
    height: 150px;
  }

  @media ${device.mobile} {
    height: 140px;
  }
`

export const Content = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${device.mobile} {
    padding-top: 6px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${cores.buttonText};
  margin-bottom: 8px;

  @media ${device.mobile} {
    font-size: 15px;
    margin-bottom: 6px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.buttonText};
  margin-bottom: 8px;
  flex: 1;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 6px;
  }
`

export const Porcao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.buttonText};
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 12px;
  }
`

export const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.mobile} {
    padding: 6px 8px;
    font-size: 13px;
  }
`
