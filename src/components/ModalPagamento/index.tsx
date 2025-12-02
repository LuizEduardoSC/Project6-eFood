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
    if (campo === 'numeroCartao') {
      // Remove tudo que não é número e limita a 19 dígitos
      const apenasNumeros = valor.replace(/\D/g, '').slice(0, 19)
      setPagamento((prev) => ({ ...prev, [campo]: apenasNumeros }))
    } else if (campo === 'cvv') {
      // Remove tudo que não é número e limita a 4 dígitos
      const apenasNumeros = valor.replace(/\D/g, '').slice(0, 4)
      setPagamento((prev) => ({ ...prev, [campo]: apenasNumeros }))
    } else if (campo === 'mesVencimento') {
      // Remove tudo que não é número e limita a 2 dígitos
      const apenasNumeros = valor.replace(/\D/g, '').slice(0, 2)
      setPagamento((prev) => ({ ...prev, [campo]: apenasNumeros }))
    } else if (campo === 'anoVencimento') {
      // Remove tudo que não é número e limita a 4 dígitos
      const apenasNumeros = valor.replace(/\D/g, '').slice(0, 4)
      setPagamento((prev) => ({ ...prev, [campo]: apenasNumeros }))
    } else {
      setPagamento((prev) => ({ ...prev, [campo]: valor }))
    }
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

    // Valida número do cartão (13-19 dígitos)
    const numeroCartaoLimpo = pagamento.numeroCartao.replace(/\D/g, '')
    if (numeroCartaoLimpo.length < 13 || numeroCartaoLimpo.length > 19) {
      setErro('Número do cartão deve conter entre 13 e 19 dígitos.')
      return false
    }

    // Valida CVV (3-4 dígitos)
    const cvvLimpo = pagamento.cvv.replace(/\D/g, '')
    if (cvvLimpo.length < 3 || cvvLimpo.length > 4) {
      setErro('CVV deve conter 3 ou 4 dígitos.')
      return false
    }

    // Valida mês (01-12)
    const mesLimpo = pagamento.mesVencimento.replace(/\D/g, '')
    const mesNumero = parseInt(mesLimpo, 10)
    if (!mesLimpo || mesNumero < 1 || mesNumero > 12) {
      setErro('Mês de vencimento deve ser entre 01 e 12.')
      return false
    }

    // Valida ano (2 ou 4 dígitos, ano atual ou futuro)
    const anoLimpo = pagamento.anoVencimento.replace(/\D/g, '')
    if (anoLimpo.length !== 2 && anoLimpo.length !== 4) {
      setErro('Ano de vencimento deve conter 2 ou 4 dígitos.')
      return false
    }
    const anoAtual = new Date().getFullYear()
    let anoNumero: number
    if (anoLimpo.length === 2) {
      // Se for 2 dígitos, assume 2000-2099
      anoNumero = 2000 + parseInt(anoLimpo, 10)
    } else {
      anoNumero = parseInt(anoLimpo, 10)
    }
    if (anoNumero < anoAtual) {
      setErro('Ano de vencimento não pode ser no passado.')
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
        complemento: dadosEntrega.complemento || ''
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
      const response = await api.checkout(payload)
      // Extrair o ID do pedido da resposta (pode vir em diferentes formatos)
      const orderId =
        response.orderId ||
        response.id ||
        response.order?.id ||
        response.order?.orderId ||
        undefined
      onCheckoutSucesso(orderId)
    } catch (e) {
      setErro('Não foi possível concluir o pagamento. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Overlay $isOpen={isOpen} onClick={onClose}>
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

          <S.LinhaCampos>
            <S.ColunaNumeroCartao>
              <S.GrupoCampo>
                <S.Label>Número do cartão</S.Label>
                <S.Input
                  type="text"
                  inputMode="numeric"
                  value={pagamento.numeroCartao}
                  onChange={(e) => handleChange('numeroCartao', e.target.value)}
                  placeholder="0000000000000000"
                  maxLength={19}
                />
              </S.GrupoCampo>
            </S.ColunaNumeroCartao>
            <S.ColunaCVV>
              <S.GrupoCampo>
                <S.Label>CVV</S.Label>
                <S.Input
                  type="text"
                  inputMode="numeric"
                  value={pagamento.cvv}
                  onChange={(e) => handleChange('cvv', e.target.value)}
                  placeholder="000"
                  maxLength={4}
                />
              </S.GrupoCampo>
            </S.ColunaCVV>
          </S.LinhaCampos>

          <S.LinhaCampos>
            <S.Coluna>
              <S.GrupoCampo>
                <S.Label>Mês de vencimento</S.Label>
                <S.Input
                  type="text"
                  inputMode="numeric"
                  value={pagamento.mesVencimento}
                  onChange={(e) =>
                    handleChange('mesVencimento', e.target.value)
                  }
                  placeholder="MM"
                  maxLength={2}
                />
              </S.GrupoCampo>
            </S.Coluna>
            <S.Coluna>
              <S.GrupoCampo>
                <S.Label>Ano de vencimento</S.Label>
                <S.Input
                  type="text"
                  inputMode="numeric"
                  value={pagamento.anoVencimento}
                  onChange={(e) =>
                    handleChange('anoVencimento', e.target.value)
                  }
                  placeholder="AAAA"
                  maxLength={4}
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
