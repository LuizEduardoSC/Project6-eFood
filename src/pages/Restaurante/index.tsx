import { useParams } from 'react-router-dom'
import ProdutoCard from '../../Cards/ProdutoCard'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { produtosHiokiSushi, produtosLaDolceVita } from '../../data/produtos'
import { restaurantes } from '../../data/restaurantes'
import * as S from './styles'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()

  const restaurante = restaurantes.find((r) => r.id === Number(id))

  const getProdutos = () => {
    if (!restaurante) return []

    switch (restaurante.id) {
      case 1:
        return produtosHiokiSushi
      case 2:
        return produtosLaDolceVita
      default:
        return produtosHiokiSushi
    }
  }

  const produtos = getProdutos()

  if (!restaurante) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <>
      <Header />
      <S.Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <S.HeroOverlay>
          <S.Container>
            <S.CategoryTag>{restaurante.categorias[0]}</S.CategoryTag>
            <S.RestaurantName>{restaurante.nome}</S.RestaurantName>
          </S.Container>
        </S.HeroOverlay>
      </S.Hero>

      <S.MenuSection>
        <S.Container>
          <S.MenuGrid>
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                imagem={produto.imagem}
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
