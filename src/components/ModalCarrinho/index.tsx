import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { remover, fecharCarrinho, limpar } from '../../store/reducers/cartSlice'
import lixeiraIcon from '../../assets/lixeira.svg'
import fecharIcon from '../../assets/fechar.svg'
import ModalEntrega, { DadosEntrega } from '../ModalEntrega'
import ModalPagamento from '../ModalPagamento'
import ModalConfirmacao from '../ModalConfirmacao'

const ModalCarrinho = () => {
  const itensCarrinho = useSelector((state: RootReducer) => state.cart.itens)
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen)
  const dispatch = useDispatch()
  const [isEntregaOpen, setIsEntregaOpen] = useState(false)
  const [isPagamentoOpen, setIsPagamentoOpen] = useState(false)
  const [isConfirmacaoOpen, setIsConfirmacaoOpen] = useState(false)
  const [dadosEntrega, setDadosEntrega] = useState<DadosEntrega | null>(null)
  const [orderId, setOrderId] = useState<string | undefined>(undefined)

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => total + item.preco, 0)
  }

  const removerItem = (index: number) => {
    dispatch(remover(index))
  }

  const fechar = () => {
    dispatch(fecharCarrinho())
    setIsEntregaOpen(false)
    setIsPagamentoOpen(false)
  }

  const iniciarEntrega = () => {
    if (itensCarrinho.length === 0) return
    setIsEntregaOpen(true)
  }

  const avancarParaPagamento = (dados: DadosEntrega) => {
    setDadosEntrega(dados)
    setIsEntregaOpen(false)
    setIsPagamentoOpen(true)
  }

  const voltarParaEntrega = () => {
    setIsPagamentoOpen(false)
    setIsEntregaOpen(true)
  }

  const finalizarFluxo = () => {
    setIsConfirmacaoOpen(false)
    dispatch(limpar())
    fechar()
  }

  const handleCheckoutSucesso = (orderId?: string) => {
    setOrderId(orderId)
    setIsPagamentoOpen(false)
    setIsConfirmacaoOpen(true)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        fechar()
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
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={fechar} />
      <S.Drawer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.HeaderDrawer>
          <S.Titulo>Produtos no carrinho</S.Titulo>
          <S.CloseButton onClick={fechar}>
            <img src={fecharIcon} alt="Fechar" />
          </S.CloseButton>
        </S.HeaderDrawer>

        <S.Content>
          {itensCarrinho.length === 0 ? (
            <S.CarrinhoVazio>
              <S.MensagemVazio>Seu carrinho está vazio</S.MensagemVazio>
            </S.CarrinhoVazio>
          ) : (
            <>
              <S.ListaItens>
                {itensCarrinho.map((item, index) => (
                  <S.ItemCarrinho key={`${item.id}-${index}`}>
                    <S.ImagemProduto src={item.imagem} alt={item.nome} />
                    <S.ConteudoItem>
                      <S.NomeProduto>{item.nome}</S.NomeProduto>
                      <S.PrecoProduto>
                        R$ {formatarPreco(item.preco)}
                      </S.PrecoProduto>
                    </S.ConteudoItem>
                    <S.BotaoRemover onClick={() => removerItem(index)}>
                      <img src={lixeiraIcon} alt="Remover" />
                    </S.BotaoRemover>
                  </S.ItemCarrinho>
                ))}
              </S.ListaItens>
              <S.ResumoCarrinho>
                <S.LinhaTotal>
                  <S.LabelTotal>Valor total</S.LabelTotal>
                  <S.ValorTotal>
                    R$ {formatarPreco(calcularTotal())}
                  </S.ValorTotal>
                </S.LinhaTotal>
                <S.BotaoContinuar onClick={iniciarEntrega}>
                  Continuar com a entrega
                </S.BotaoContinuar>
              </S.ResumoCarrinho>
            </>
          )}
        </S.Content>
      </S.Drawer>
      {isEntregaOpen && (
        <ModalEntrega
          isOpen={isEntregaOpen}
          onClose={() => setIsEntregaOpen(false)}
          onVoltarCarrinho={() => setIsEntregaOpen(false)}
          onConfirmarEntrega={avancarParaPagamento}
        />
      )}
      {isPagamentoOpen && (
        <ModalPagamento
          isOpen={isPagamentoOpen}
          dadosEntrega={dadosEntrega}
          onClose={() => setIsPagamentoOpen(false)}
          onVoltarEntrega={voltarParaEntrega}
          onCheckoutSucesso={handleCheckoutSucesso}
        />
      )}
      <ModalConfirmacao
        isOpen={isConfirmacaoOpen}
        onClose={finalizarFluxo}
        orderId={orderId}
      />
    </>
  )
}

export default ModalCarrinho
