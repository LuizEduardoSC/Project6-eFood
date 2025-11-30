import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProdutoCarrinho {
  id: number
  nome: string
  descricao: string
  preco: number
  imagem: string
  porcao: string
}

interface CarrinhoState {
  itens: ProdutoCarrinho[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ProdutoCarrinho>) => {
      state.itens.push(action.payload)
      state.isOpen = true
    },
    remover: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.itens.length) {
        state.itens.splice(index, 1)
      }
    },
    limpar: (state) => {
      state.itens = []
    },
    abrirCarrinho: (state) => {
      state.isOpen = true
    },
    fecharCarrinho: (state) => {
      state.isOpen = false
    }
  }
})

export const { adicionar, remover, limpar, abrirCarrinho, fecharCarrinho } = cartSlice.actions
export default cartSlice.reducer
