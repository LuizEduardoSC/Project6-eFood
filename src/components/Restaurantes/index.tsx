import * as S from './styles'
import RestauranteModel from '../../models/Restaurante'
import Restaurante from '../../RestauranteCard'

type Props = {
  restauranteModel: RestauranteModel[]
}

const Restaurantes = ({ restauranteModel }: Props) => {
  return (
    <S.Resta>
      {restauranteModel.map((restaunt) => (
        <Restaurante
          key={restaunt.id}
          capa={restaunt.capa}
          nome={restaunt.nome}
          avaliacao={restaunt.avaliacao}
          desc={restaunt.desc}
          page={restaunt.page}
          categoria={restaunt.categorias}
        />
      ))}
    </S.Resta>
  )
}

export default Restaurantes
