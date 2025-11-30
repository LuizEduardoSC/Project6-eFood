import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProdutoCard from '../../Cards/ProdutoCard'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as S from './styles'
import { api, RestauranteAPI, ProdutoAPI } from '../../services/api'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<RestauranteAPI | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const carregarRestaurante = async () => {
      if (!id) return

      try {
        setLoading(true)
        const dados = await api.buscarRestaurantePorId(Number(id))

        if (!dados) {
          setError('Restaurante não encontrado')
        } else {
          setRestaurante(dados)
          setError(null)
        }
      } catch (err) {
        setError('Erro ao carregar restaurante')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    carregarRestaurante()
  }, [id])

  if (loading) {
    return (
      <>
        <Header />
        <S.MenuSection>
          <S.Container>
            <div style={{ padding: '40px', textAlign: 'center' }}>
              Carregando...
            </div>
          </S.Container>
        </S.MenuSection>
        <Footer />
      </>
    )
  }

  if (error || !restaurante) {
    return (
      <>
        <Header />
        <S.MenuSection>
          <S.Container>
            <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
              {error || 'Restaurante não encontrado'}
            </div>
          </S.Container>
        </S.MenuSection>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <S.Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <S.HeroOverlay>
          <S.Container>
            <S.CategoryTag>{restaurante.tipo}</S.CategoryTag>
            <S.RestaurantName>{restaurante.titulo}</S.RestaurantName>
          </S.Container>
        </S.HeroOverlay>
      </S.Hero>

      <S.MenuSection>
        <S.Container>
          <S.MenuGrid>
            {restaurante.cardapio.map((produto: ProdutoAPI) => (
              <ProdutoCard
                key={produto.id}
                id={produto.id}
                imagem={produto.foto}
                nome={produto.nome}
                descricao={produto.descricao}
                porcao={produto.porcao}
                preco={produto.preco}
              />
            ))}
          </S.MenuGrid>
        </S.Container>
      </S.MenuSection>

      <Footer />
    </>
  )
}

export default Restaurante
