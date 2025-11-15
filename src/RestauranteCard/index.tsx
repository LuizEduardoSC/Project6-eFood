import Estrela from '../assets/Estrela.svg'
import Tag from '../components/Tag'
import * as S from './styles'

type Props = {
  capa: string
  nome: string
  avaliacao: number
  desc: string
  page: string
  categoria: string[]
}

const RestauranteCard = ({
  capa,
  nome,
  avaliacao,
  desc,
  page,
  categoria
}: Props) => {
  return (
    <S.Card>
      <S.ImagemResta src={capa} alt="" />
      <S.TagsContainer>
        {categoria.map((categoria) => (
          <Tag key={categoria}>{categoria}</Tag>
        ))}
      </S.TagsContainer>
      <S.RestaTextArea>
        <S.RestaTitle>{nome}</S.RestaTitle>
        <S.Avaliacao className="avaliacao">
          <div>
            <S.NotaDeAvaliacao>{avaliacao}</S.NotaDeAvaliacao>
          </div>
          <div>
            <img src={Estrela} alt="" />
          </div>
        </S.Avaliacao>
      </S.RestaTextArea>
      <S.RestText>{desc}</S.RestText>
      <S.LinkStyled to={page}>Saiba mais</S.LinkStyled>
    </S.Card>
  )
}

export default RestauranteCard
