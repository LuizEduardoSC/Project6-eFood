export interface RestauranteAPI {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProdutoAPI[]
}

export interface ProdutoAPI {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'
const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

export interface CheckoutItem {
  id: number
  nome: string
  preco: number
  quantidade: number
}

export interface CheckoutEntrega {
  recebedor: string
  endereco: string
  cidade: string
  cep: string
  complemento?: string
}

export interface CheckoutPagamento {
  nomeNoCartao: string
  numeroCartao: string
  cvv: string
  mesVencimento: string
  anoVencimento: string
}

export interface CheckoutPayload {
  itens: CheckoutItem[]
  entrega: CheckoutEntrega
  pagamento: CheckoutPagamento
}

export const api = {
  async buscarRestaurantes(): Promise<RestauranteAPI[]> {
    try {
      const response = await fetch(API_BASE_URL)
      if (!response.ok) {
        throw new Error('Erro ao buscar restaurantes')
      }
      const data = await response.json()

      let restaurantes: RestauranteAPI[]

      if (Array.isArray(data)) {
        restaurantes = data
      } else if (data && data.value && Array.isArray(data.value)) {
        restaurantes = data.value
      } else {
        console.error('Resposta da API em formato inesperado:', data)
        throw new Error('Formato de resposta da API inválido')
      }

      if (!restaurantes || restaurantes.length === 0) {
        throw new Error('Nenhum restaurante encontrado')
      }

      return restaurantes
    } catch (error) {
      console.error('Erro na requisição:', error)
      throw error
    }
  },

  async buscarRestaurantePorId(id: number): Promise<RestauranteAPI | null> {
    try {
      const restaurantes = await this.buscarRestaurantes()
      return restaurantes.find((r) => r.id === id) || null
    } catch (error) {
      console.error('Erro ao buscar restaurante:', error)
      throw error
    }
  },

  async checkout(payload: CheckoutPayload) {
    const response = await fetch(CHECKOUT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error('Erro ao realizar checkout')
    }

    return response.json()
  }
}
