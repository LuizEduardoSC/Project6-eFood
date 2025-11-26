import styled from 'styled-components'
import { cores } from '../../styles'

interface HeroProps {
  $isHome?: boolean
}

export const Hero = styled.div<HeroProps>`
  width: 100%;
  height: ${(props) => (props.$isHome ? '384px' : '186px')};
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 40px 0;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  margin-top: 140px;
  color: ${cores.vermelho};

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 80px;
  }
`

export const HeaderPerfil = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 16px;

  a {
    text-decoration: none;
  }
`

export const RestaurantesLink = styled.span`
  position: absolute;
  left: 16px;
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
  position: absolute;
  right: 16px;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const HomeContent = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
