import imagemDois from '../assets/Italiana.svg'
import imagemUm from '../assets/Japonesa.svg'
import RestauranteModel from '../models/Restaurante'

export const restaurantes: RestauranteModel[] = [
  new RestauranteModel(
    1,
    'Hioki Sushi',
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagemUm,
    '/restaurante/1',
    ['Destaque da Semana', 'Japonesa']
  ),
  new RestauranteModel(
    2,
    'La Dolce Vita',
    4.7,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagemDois,
    '/restaurante/2',
    ['Italiana']
  ),
  new RestauranteModel(
    3,
    'El Cacto',
    4.7,
    'Peça os sabores autênticos do México direto na sua casa! Pratos tradicionais, temperos marcantes e ingredientes frescos. Entrega rápida, cuidado na embalagem e satisfação garantida. Viva a experiência do México sem sair do sofá com nosso delivery!',
    imagemDois,
    '/restaurante/3',
    ['Mexicana']
  ),
  new RestauranteModel(
    4,
    'Jin Long',
    4.9,
    'Desfrute da verdadeira culinária chinesa no conforto do seu lar! Pratos clássicos, sabores intensos e ingredientes frescos preparados com carinho. Entrega rápida, embalagens seguras e qualidade garantida. Saboreie a China sem sair de casa com nosso delivery!',
    imagemUm,
    '/restaurante/4',
    ['Chinesa Tradicional']
  ),
  new RestauranteModel(
    5,
    'Terra Nativa',
    4.9,
    'Sinta o sabor do Brasil sem sair de casa! Pratos típicos, temperos caseiros e receitas tradicionais feitas com carinho. Entrega rápida, embalagens resistentes e qualidade garantida. Experimente o melhor da nossa cozinha no conforto do seu lar!',
    imagemUm,
    '/restaurante/5',
    ['Brasileira']
  ),
  new RestauranteModel(
    6,
    'Oliva',
    4.9,
    'Desfrute dos sabores frescos do Mediterrâneo na sua casa! Pratos leves, ingredientes naturais e temperos autênticos que encantam o paladar. Entrega rápida, cuidado nas embalagens e qualidade garantida. Viva a experiência mediterrânea sem sair do lar!',
    imagemUm,
    '/restaurante/6',
    ['Mediterraneo']
  )
]
