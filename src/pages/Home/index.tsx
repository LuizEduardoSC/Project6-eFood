import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { restaurantes } from '../../data/restaurantes'
import { Container } from '../../styles'

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
