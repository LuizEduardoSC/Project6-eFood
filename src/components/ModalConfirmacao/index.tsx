import * as S from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const ModalConfirmacao = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Titulo>Pedido realizado!</S.Titulo>
        <S.Texto>
          O pedido foi concluído com sucesso. Em breve você receberá sua entrega
          no endereço informado.
        </S.Texto>
        <S.Botao onClick={onClose}>Concluir</S.Botao>
      </S.Container>
    </S.Overlay>
  )
}

export default ModalConfirmacao
