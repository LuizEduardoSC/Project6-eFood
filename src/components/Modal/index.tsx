import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import fecharIcon from '../../assets/fechar.svg'
import { adicionar } from '../../store/reducers/cartSlice'
import type { ProdutoCarrinho } from '../../store/reducers/cartSlice'

type Props = {
  isOpen: boolean
  onClose: () => void
  id: number
  imagem: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const Modal = ({
  isOpen,
  onClose,
  id,
  imagem,
  nome,
  descricao,
  porcao,
  preco
}: Props) => {
  const dispatch = useDispatch()

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const adicionarAoCarrinho = () => {
    const produto: ProdutoCarrinho = {
      id,
      nome,
      descricao,
      preco,
      imagem,
      porcao
    }
    dispatch(adicionar(produto))
    onClose()
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <img src={fecharIcon} alt="Fechar" />
        </S.CloseButton>
        <S.Imagem src={imagem} alt={nome} />
        <S.Content>
          <S.Titulo>{nome}</S.Titulo>
          <S.Descricao>{descricao}</S.Descricao>
          <S.Porcao>Serve: {porcao}</S.Porcao>
          <S.BotaoAdicionar onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho - R$ {formatarPreco(preco)}
          </S.BotaoAdicionar>
        </S.Content>
      </S.ModalContent>
    </S.Overlay>
  )
}

export default Modal
