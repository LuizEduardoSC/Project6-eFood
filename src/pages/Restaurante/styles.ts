import styled from 'styled-components'
import { device } from '../../styles'

export const Hero = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media ${device.tablet} {
    height: 240px;
  }

  @media ${device.mobile} {
    height: 200px;
  }
`

export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  padding-bottom: 32px;

  @media ${device.tablet} {
    padding-bottom: 24px;
  }

  @media ${device.mobile} {
    padding-bottom: 16px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media ${device.mobile} {
    padding: 0 8px;
  }
`

export const CategoryTag = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  margin-bottom: 156px;

  @media ${device.tablet} {
    font-size: 28px;
    margin-bottom: 120px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 80px;
  }
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #fff;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`

export const MenuSection = styled.section`
  padding: 56px 0 120px;

  @media ${device.tablet} {
    padding: 48px 0 100px;
  }

  @media ${device.mobile} {
    padding: 32px 0 80px;
  }
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;

  > * {
    display: flex;
    height: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
