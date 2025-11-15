class RestauranteModel {
  id: number
  nome: string
  avaliacao: number
  desc: string
  capa: string
  page: string
  categorias: string[]
  categoriaAdicional?: string

  constructor(
    id: number,
    nome: string,
    avaliacao: number,
    desc: string,
    capa: string,
    page: string,
    categorias: string[],
    categoriaAdicional?: string
  ) {
    this.id = id
    this.nome = nome
    this.avaliacao = avaliacao
    this.desc = desc
    this.capa = capa
    this.page = page
    this.categorias = categorias
    this.categoriaAdicional = categoriaAdicional
  }
}

export default RestauranteModel
