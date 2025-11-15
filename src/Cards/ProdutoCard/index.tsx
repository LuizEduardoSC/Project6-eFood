import * as S from './styles'

type Props = {
  imagem: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const ProdutoCard = ({ imagem, nome, descricao, porcao, preco }: Props) => {
  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <S.Card>
      <S.Imagem src={imagem} alt={nome} />
      <S.Content>
        <S.Titulo>{nome}</S.Titulo>
        <S.Descricao>{descricao}</S.Descricao>
        <S.Porcao>{porcao}</S.Porcao>
        <S.BotaoAdicionar>
          Adicionar ao carrinho - R$ {formatarPreco(preco)}
        </S.BotaoAdicionar>
      </S.Content>
    </S.Card>
  )
}

export default ProdutoCard
