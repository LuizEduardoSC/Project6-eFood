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

export interface CheckoutResponse {
  orderId?: string
  id?: string
  order?: {
    id?: string
    orderId?: string
  }
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

  async checkout(payload: CheckoutPayload): Promise<CheckoutResponse> {
    // Converter para formato snake_case que é comum em APIs REST
    const payloadFormatado = {
      products: payload.itens.map((item) => ({
        id: item.id,
        price: item.preco // ou o preço correto
      })),
      delivery: {
        receiver: payload.entrega.recebedor,
        address: {
          description: payload.entrega.endereco,
          city: payload.entrega.cidade,
          zipCode: payload.entrega.cep,
          number: 0, // você precisa capturar o número do endereço
          complement: payload.entrega.complemento || ''
        }
      },
      payment: {
        card: {
          name: payload.pagamento.nomeNoCartao,
          number: payload.pagamento.numeroCartao,
          code: Number(payload.pagamento.cvv),
          expires: {
            month: Number(payload.pagamento.mesVencimento),
            year: Number(payload.pagamento.anoVencimento)
          }
        }
      }
    }

    console.log(
      'Payload formatado enviado:',
      JSON.stringify(payloadFormatado, null, 2)
    )

    const response = await fetch(CHECKOUT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payloadFormatado)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Erro na resposta:', response.status, errorText)
      throw new Error(
        `Erro ao realizar checkout: ${errorText || response.statusText}`
      )
    }

    return response.json()
  }
}
