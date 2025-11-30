import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 1px ${cores.vermelho};
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  min-height: 100%;

  @media ${device.mobile} {
    padding-bottom: 32px;
  }
`

export const ImagemResta = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;

  @media ${device.tablet} {
    height: 200px;
  }

  @media ${device.mobile} {
    height: 180px;
  }
`

export const RestaTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};

  @media ${device.mobile} {
    font-size: 16px;
  }
`

export const RestaTextArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 8px;

  @media ${device.mobile} {
    margin: 5px 6px;
  }
`

export const NotaDeAvaliacao = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};
  margin-right: 8px;

  @media ${device.mobile} {
    font-size: 16px;
    margin-right: 6px;
  }
`

export const Avaliacao = styled.div`
  display: flex;
`

export const RestText = styled.p`
  color: ${cores.vermelho};
  font-weight: 400;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  line-height: 22px;
  letter-spacing: 0%;
  flex: 1;

  @media ${device.mobile} {
    font-size: 14px;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 8px;
    line-height: 20px;
  }
`

export const LinkStyled = styled(Link)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 87px;
  padding: 4px;
  background-color: ${cores.vermelho};
  color: ${cores.buttonText};
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 80px;
    padding: 3px;
    font-size: 14px;
    bottom: 6px;
    left: 6px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 8px;

  @media ${device.tablet} {
    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }

  @media ${device.mobile} {
    margin-left: 6px;
    margin-top: 8px;
    gap: 6px;

    & > *:not(:last-child) {
      margin-right: 0;
    }
  }
`
