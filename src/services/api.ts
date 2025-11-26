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
  }
}
