import * as S from './styles'
import heroImg from '../../assets/Background.svg'
import LogoImg from '../../assets/Logo.svg'
import { useLocation, Link } from 'react-router-dom'
import { Container } from '../../styles'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPerfil = location.pathname.startsWith('/restaurante/')

  return (
    <S.Hero isHome={isHome} style={{ backgroundImage: `url(${heroImg})` }}>
      <Container>
        {isPerfil ? (
          <S.HeaderPerfil>
            <Link to="/">
              <S.RestaurantesLink>Restaurantes</S.RestaurantesLink>
            </Link>
            <Link to="/">
              <S.Logo src={LogoImg} alt="Logo" />
            </Link>
            <S.CarrinhoLink>0 produto(s) no carrinho</S.CarrinhoLink>
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
