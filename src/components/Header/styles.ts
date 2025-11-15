import styled from 'styled-components'
import { cores } from '../../styles'

interface HeroProps {
  isHome?: boolean
}

export const Hero = styled.div<HeroProps>`
  width: 100%;
  height: ${(props) => (props.isHome ? '384px' : '186px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  letter-spacing: 0;
  text-align: center;
  margin-top: 140px;
  color: ${cores.vermelho};
`

export const HeaderPerfil = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 40px;

  a {
    text-decoration: none;
  }
`

export const RestaurantesLink = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const CarrinhoLink = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
