import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { Container } from '../../styles'
import { restaurantes } from '../../data/restaurantes'
import Footer from '../../components/footer'

const Home = () => {
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
