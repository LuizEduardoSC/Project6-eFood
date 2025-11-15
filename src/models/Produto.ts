class ProdutoModel {
  id: number
  nome: string
  descricao: string
  preco: number
  imagem: string
  porcao: string

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    imagem: string,
    porcao: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.imagem = imagem
    this.porcao = porcao
  }
}

export default ProdutoModel
