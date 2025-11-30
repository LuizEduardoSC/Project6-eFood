import { useState } from 'react'
import * as S from './styles'
import Modal from '../../components/Modal'

type Props = {
  id: number
  imagem: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const ProdutoCard = ({ id, imagem, nome, descricao, porcao, preco }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <>
      <S.Card>
        <S.Imagem src={imagem} alt={nome} />
        <S.Content>
          <S.Titulo>{nome}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
          <S.Porcao>{porcao}</S.Porcao>
          <S.BotaoAdicionar onClick={() => setModalAberta(true)}>
            Adicionar ao carrinho - R$ {formatarPreco(preco)}
          </S.BotaoAdicionar>
        </S.Content>
      </S.Card>
      <Modal
        isOpen={modalAberta}
        onClose={() => setModalAberta(false)}
        id={id}
        imagem={imagem}
        nome={nome}
        descricao={descricao}
        porcao={porcao}
        preco={preco}
      />
    </>
  )
}

export default ProdutoCard
