import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 1px ${cores.vermelho};
  width: 472px;
  min-height: 398px;
  padding-bottom: 40px;
`

export const ImagemResta = styled.img`
  width: 470px;
`

export const RestaTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};
`

export const RestaTextArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 8px;
`

export const NotaDeAvaliacao = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};
  margin-right: 8px;
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
`

export const TagsContainer = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 10px;

  & > *:not(:last-child) {
    margin-right: 80px;
  }
`
