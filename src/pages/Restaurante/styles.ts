import styled from 'styled-components'

export const Hero = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  padding-bottom: 32px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const CategoryTag = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  margin-bottom: 156px;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
`

export const MenuSection = styled.section`
  padding: 56px 0 120px;
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
