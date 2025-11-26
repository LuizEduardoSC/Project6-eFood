import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { Container } from '../../styles'
import { api } from '../../services/api'
import RestauranteModel from '../../models/Restaurante'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const carregarRestaurantes = async () => {
      try {
        setLoading(true)
        const dadosAPI = await api.buscarRestaurantes()

        if (!dadosAPI || !Array.isArray(dadosAPI) || dadosAPI.length === 0) {
          throw new Error('Nenhum restaurante encontrado')
        }

        const restaurantesConvertidos: RestauranteModel[] = dadosAPI.map(
          (rest) => ({
            id: rest.id,
            nome: rest.titulo,
            avaliacao: rest.avaliacao,
            desc: rest.descricao,
            capa: rest.capa,
            page: `/restaurante/${rest.id}`,
            categorias: [rest.tipo]
          })
        )

        setRestaurantes(restaurantesConvertidos)
        setError(null)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Erro ao carregar restaurantes'
        setError(errorMessage)
        console.error('Erro ao carregar restaurantes:', err)
      } finally {
        setLoading(false)
      }
    }

    carregarRestaurantes()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Container>
          <div style={{ padding: '40px', textAlign: 'center' }}>
            Carregando...
          </div>
        </Container>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <Container>
          <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
            {error}
          </div>
        </Container>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Container>
        <Restaurantes restauranteModel={restaurantes} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
