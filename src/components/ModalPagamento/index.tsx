import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import fecharIcon from '../../assets/fechar.svg'
import { RootReducer } from '../../store'
import { DadosEntrega } from '../ModalEntrega'
import { api, CheckoutPayload } from '../../services/api'

type DadosPagamento = {
  nomeNoCartao: string
  numeroCartao: string
  cvv: string
  mesVencimento: string
  anoVencimento: string
}

type Props = {
  isOpen: boolean
  dadosEntrega: DadosEntrega | null
  onClose: () => void
  onVoltarEntrega: () => void
  onCheckoutSucesso: (orderId?: string) => void
}

const ModalPagamento = ({
  isOpen,
  dadosEntrega,
  onClose,
  onVoltarEntrega,
  onCheckoutSucesso
}: Props) => {
  const itensCarrinho = useSelector((state: RootReducer) => state.cart.itens)
  const [pagamento, setPagamento] = useState<DadosPagamento>({
    nomeNoCartao: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: ''
  })
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

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

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0)

  const handleChange = (campo: keyof DadosPagamento, valor: string) => {
    setPagamento((prev) => ({ ...prev, [campo]: valor }))
  }

  const validar = () => {
    if (
      !pagamento.nomeNoCartao ||
      !pagamento.numeroCartao ||
      !pagamento.cvv ||
      !pagamento.mesVencimento ||
      !pagamento.anoVencimento
    ) {
      setErro('Preencha todos os dados do cartão para continuar.')
      return false
    }
    if (!dadosEntrega) {
      setErro('Preencha os dados de entrega antes de pagar.')
      return false
    }
    setErro('')
    return true
  }

  const concluirPagamento = async () => {
    if (!validar()) return

    if (!dadosEntrega) return

    const payload: CheckoutPayload = {
      itens: itensCarrinho.map((item) => ({
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        quantidade: 1
      })),
      entrega: {
        recebedor: dadosEntrega.recebedor,
        endereco: dadosEntrega.endereco,
        cidade: dadosEntrega.cidade,
        cep: dadosEntrega.cep,
        complemento: dadosEntrega.complemento
      },
      pagamento: {
        nomeNoCartao: pagamento.nomeNoCartao,
        numeroCartao: pagamento.numeroCartao,
        cvv: pagamento.cvv,
        mesVencimento: pagamento.mesVencimento,
        anoVencimento: pagamento.anoVencimento
      }
    }

    try {
      setLoading(true)
      await api.checkout(payload)
      onCheckoutSucesso()
    } catch (e) {
      setErro('Não foi possível concluir o pagamento. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Drawer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Titulo>Pagamento</S.Titulo>
          <S.CloseButton onClick={onClose}>
            <img src={fecharIcon} alt="Fechar" />
          </S.CloseButton>
        </S.Header>

        <S.Content>
          {erro && <S.Erro>{erro}</S.Erro>}

          <S.GrupoCampo>
            <S.Label>Nome no cartão</S.Label>
            <S.Input
              value={pagamento.nomeNoCartao}
              onChange={(e) => handleChange('nomeNoCartao', e.target.value)}
            />
          </S.GrupoCampo>

          <S.GrupoCampo>
            <S.Label>Número do cartão</S.Label>
            <S.Input
              value={pagamento.numeroCartao}
              onChange={(e) => handleChange('numeroCartao', e.target.value)}
            />
          </S.GrupoCampo>

          <S.LinhaCampos>
            <S.Coluna>
              <S.GrupoCampo>
                <S.Label>Mês de vencimento</S.Label>
                <S.Input
                  value={pagamento.mesVencimento}
                  onChange={(e) =>
                    handleChange('mesVencimento', e.target.value)
                  }
                />
              </S.GrupoCampo>
            </S.Coluna>
            <S.Coluna>
              <S.GrupoCampo>
                <S.Label>Ano de vencimento</S.Label>
                <S.Input
                  value={pagamento.anoVencimento}
                  onChange={(e) =>
                    handleChange('anoVencimento', e.target.value)
                  }
                />
              </S.GrupoCampo>
            </S.Coluna>
            <S.Coluna>
              <S.GrupoCampo>
                <S.Label>CVV</S.Label>
                <S.Input
                  value={pagamento.cvv}
                  onChange={(e) => handleChange('cvv', e.target.value)}
                />
              </S.GrupoCampo>
            </S.Coluna>
          </S.LinhaCampos>

          <S.Resumo>
            <span>Resumo do pedido</span>
            <S.TotalLinha>
              <span>Total</span>
              <span>R$ {formatarPreco(total)}</span>
            </S.TotalLinha>
          </S.Resumo>

          <S.Botoes>
            <S.BotaoPrimario onClick={concluirPagamento} disabled={loading}>
              {loading ? 'Processando...' : 'Concluir pagamento'}
            </S.BotaoPrimario>
            <S.BotaoSecundario onClick={onVoltarEntrega}>
              Voltar para a edição de endereço
            </S.BotaoSecundario>
          </S.Botoes>
        </S.Content>
      </S.Drawer>
    </S.Overlay>
  )
}

export default ModalPagamento
