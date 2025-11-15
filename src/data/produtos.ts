import ProdutoModel from '../models/Produto'

import ImageProduct from '../assets/ImageProduct.svg'

export const produtosHiokiSushi: ProdutoModel[] = [
  new ProdutoModel(
    1,
    'Pizza Margherita',
    'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    60.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  ),
  new ProdutoModel(
    2,
    'Pizza Calabresa',
    'Pizza com calabresa fatiada, cebola, azeitonas e queijo mussarela. Tradicional e irresistível!',
    65.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  ),
  new ProdutoModel(
    3,
    'Pizza Quatro Queijos',
    'Combinação perfeita de mussarela, provolone, parmesão e gorgonzola. Para os amantes de queijo!',
    70.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  ),
  new ProdutoModel(
    4,
    'Pizza Portuguesa',
    'Presunto, ovos, cebola, azeitonas, ervilha e mussarela. Sabor completo em cada fatia!',
    68.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  ),
  new ProdutoModel(
    5,
    'Pizza Frango com Catupiry',
    'Frango desfiado temperado com catupiry cremoso. A favorita dos brasileiros!',
    67.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  ),
  new ProdutoModel(
    6,
    'Pizza Napolitana',
    'Molho de tomate, mussarela, tomate em rodelas, parmesão e manjericão. Clássica italiana!',
    64.9,
    ImageProduct,
    'Serve de 2 a 3 pessoas'
  )
]

export const produtosLaDolceVita: ProdutoModel[] = [
  new ProdutoModel(
    1,
    'Spaghetti Carbonara',
    'Massa fresca al dente com molho cremoso de ovos, queijo pecorino, pancetta crocante e pimenta-do-reino na medida.',
    55.9,
    ImageProduct,
    'Serve 1 pessoa'
  ),
  new ProdutoModel(
    2,
    'Lasagna Bolognese',
    'Camadas generosas de massa fresca intercaladas com molho bolonhesa caseiro, bechamel e queijo gratinado.',
    62.9,
    ImageProduct,
    'Serve 1 pessoa'
  ),
  new ProdutoModel(
    3,
    'Risotto ai Funghi',
    'Risoto cremoso preparado com mix de cogumelos frescos, vinho branco, parmesão e manteiga trufada.',
    58.9,
    ImageProduct,
    'Serve 1 pessoa'
  ),
  new ProdutoModel(
    4,
    'Ossobuco alla Milanese',
    'Tradicional ossobuco de vitela braseado lentamente com vinho branco, servido com risoto açafrão.',
    78.9,
    ImageProduct,
    'Serve 1 pessoa'
  ),
  new ProdutoModel(
    5,
    'Gnocchi al Pesto',
    'Nhoque de batata artesanal ao molho pesto genovese com manjericão fresco, pinolis e parmesão.',
    52.9,
    ImageProduct,
    'Serve 1 pessoa'
  ),
  new ProdutoModel(
    6,
    'Tiramisu Classico',
    'Sobremesa tradicional italiana com camadas de biscoito champagne embebido em café, mascarpone e cacau.',
    32.9,
    ImageProduct,
    'Serve 1 pessoa'
  )
]
