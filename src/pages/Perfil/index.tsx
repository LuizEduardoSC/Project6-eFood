import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import ProdutoCard from '../../components/ProdutoCard'
import * as S from './styles'
import { restaurantes } from '../../data/restaurantes'
import { produtosHiokiSushi, produtosLaDolceVita } from '../../data/produtos'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()

  // Busca o restaurante pelo ID
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  // Define os produtos baseado no restaurante
  const getProdutos = () => {
    if (!restaurante) return []

    // Aqui você pode mapear cada restaurante para seus produtos
    switch (restaurante.id) {
      case 1:
        return produtosHiokiSushi
      case 2:
        return produtosLaDolceVita
      default:
        return produtosHiokiSushi // fallback
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

export default Perfil
