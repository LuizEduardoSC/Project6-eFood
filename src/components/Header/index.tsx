import * as S from './styles'
import heroImg from '../../assets/Background.svg'
import LogoImg from '../../assets/Logo.svg'
import { useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '../../styles'
import { RootReducer } from '../../store'
import { abrirCarrinho } from '../../store/reducers/cartSlice'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const isHome = location.pathname === '/'
  const isPerfil = location.pathname.startsWith('/restaurante/')
  const itensCarrinho = useSelector((state: RootReducer) => state.cart.itens)
  const quantidadeItens = itensCarrinho.length

  const abrirModalCarrinho = () => {
    dispatch(abrirCarrinho())
  }

  return (
    <S.Hero $isHome={isHome} style={{ backgroundImage: `url(${heroImg})` }}>
      <Container>
        {isPerfil ? (
          <S.HeaderPerfil>
            <Link to="/">
              <S.RestaurantesLink>Restaurantes</S.RestaurantesLink>
            </Link>
            <Link to="/">
              <S.Logo src={LogoImg} alt="Logo" />
            </Link>
            <S.CarrinhoLink onClick={abrirModalCarrinho}>
              {quantidadeItens} produto{quantidadeItens !== 1 ? 's' : ''} no
              carrinho
            </S.CarrinhoLink>
          </S.HeaderPerfil>
        ) : (
          <S.HomeContent>
            <S.Logo src={LogoImg} alt="Logo" />
            {isHome && (
              <S.PageTitle>
                Viva experiências gastronômicas <br /> no conforto da sua casa
              </S.PageTitle>
            )}
          </S.HomeContent>
        )}
      </Container>
    </S.Hero>
  )
}

export default Header
