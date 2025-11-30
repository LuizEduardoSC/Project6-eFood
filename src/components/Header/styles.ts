import styled from 'styled-components'
import { cores, device } from '../../styles'

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

  @media ${device.tablet} {
    height: ${(props) => (props.$isHome ? '300px' : '160px')};
    padding: 32px 0;
  }

  @media ${device.mobile} {
    height: ${(props) => (props.$isHome ? '250px' : '140px')};
    padding: 24px 0;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    width: 110px;
    height: 50px;
  }

  @media ${device.mobile} {
    width: 90px;
    height: 41px;
    z-index: 2;
  }
`

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  margin-top: 140px;
  color: ${cores.vermelho};

  @media ${device.tablet} {
    font-size: 30px;
    margin-top: 100px;
  }

  @media ${device.mobile} {
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

  @media ${device.mobile} {
    padding: 0 90px;
    min-height: 60px;
    justify-content: center;
  }

  a {
    text-decoration: none;
    z-index: 1;
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
  white-space: nowrap;
  z-index: 1;

  @media ${device.tablet} {
    font-size: 16px;
    left: 12px;
  }

  @media ${device.mobile} {
    font-size: 12px;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

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
  text-align: right;
  z-index: 1;

  @media ${device.tablet} {
    font-size: 16px;
    right: 12px;
  }

  @media ${device.mobile} {
    font-size: 9px;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    max-width: 85px;
    line-height: 1.3;
    white-space: normal;
    word-wrap: break-word;
    text-align: right;
  }

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
