import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { remover, fecharCarrinho } from '../../store/reducers/cartSlice'
import lixeiraIcon from '../../assets/lixeira.svg'
import fecharIcon from '../../assets/fechar.svg'

const ModalCarrinho = () => {
  const itensCarrinho = useSelector((state: RootReducer) => state.cart.itens)
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen)
  const dispatch = useDispatch()

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
                      <S.PrecoProduto>R$ {formatarPreco(item.preco)}</S.PrecoProduto>
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
                  <S.ValorTotal>R$ {formatarPreco(calcularTotal())}</S.ValorTotal>
                </S.LinhaTotal>
                <S.BotaoContinuar onClick={fechar}>Continuar comprando</S.BotaoContinuar>
              </S.ResumoCarrinho>
            </>
          )}
        </S.Content>
      </S.Drawer>
    </>
  )
}

export default ModalCarrinho

