import { useEffect } from 'react'
import * as S from './styles'
import fecharIcon from '../../assets/fechar.svg'

type Props = {
  isOpen: boolean
  onClose: () => void
  orderId?: string
}

const ModalConfirmacao = ({ isOpen, onClose, orderId }: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={onClose} />
      <S.Drawer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Titulo>Pedido realizado</S.Titulo>
          <S.CloseButton onClick={onClose}>
            <img src={fecharIcon} alt="Fechar" />
          </S.CloseButton>
        </S.Header>

        <S.Content>
          <S.Titulo>Pedido realizado!</S.Titulo>
          {orderId && (
            <S.OrderIdContainer>
              <S.OrderIdLabel>Número do pedido:</S.OrderIdLabel>
              <S.OrderIdValue>{orderId}</S.OrderIdValue>
            </S.OrderIdContainer>
          )}
          <S.Texto>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </S.Texto>
          <S.Texto>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </S.Texto>
          <S.Texto>
            Lembre-se da importância de higienizar as embalagens em recebimentos
            na entrega.
          </S.Texto>
          <S.Texto>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.Texto>
          <S.Botao onClick={onClose}>Concluir</S.Botao>
        </S.Content>
      </S.Drawer>
    </>
  )
}

export default ModalConfirmacao
