import { useEffect, useState } from 'react'
import * as S from './styles'
import fecharIcon from '../../assets/fechar.svg'

export type DadosEntrega = {
  recebedor: string
  endereco: string
  cidade: string
  cep: string
  complemento?: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  onVoltarCarrinho: () => void
  onConfirmarEntrega?: (dados: DadosEntrega) => void
}

const ModalEntrega = ({
  isOpen,
  onClose,
  onVoltarCarrinho,
  onConfirmarEntrega
}: Props) => {
  const [dados, setDados] = useState<DadosEntrega>({
    recebedor: '',
    endereco: '',
    cidade: '',
    cep: '',
    complemento: ''
  })
  const [erro, setErro] = useState('')

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (campo: keyof DadosEntrega, valor: string) => {
    if (campo === 'cep') {
      // Remove tudo que não é número
      const apenasNumeros = valor.replace(/\D/g, '')
      // Limita a 8 dígitos
      const cepLimitado = apenasNumeros.slice(0, 8)
      setDados((prev) => ({ ...prev, [campo]: cepLimitado }))
    } else {
      setDados((prev) => ({ ...prev, [campo]: valor }))
    }
  }

  const validar = () => {
    if (!dados.recebedor || !dados.endereco || !dados.cidade || !dados.cep) {
      setErro('Preencha todos os campos obrigatórios para continuar.')
      return false
    }
    // Valida se o CEP tem 8 dígitos
    const cepLimpo = dados.cep.replace(/\D/g, '')
    if (cepLimpo.length !== 8) {
      setErro('CEP deve conter 8 dígitos.')
      return false
    }
    setErro('')
    return true
  }

  const continuar = () => {
    if (!validar()) return
    if (onConfirmarEntrega) {
      onConfirmarEntrega(dados)
    }
  }

  return (
    <S.Overlay $isOpen={isOpen} onClick={onClose}>
      <S.Drawer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Titulo>Entrega</S.Titulo>
          <S.CloseButton onClick={onClose}>
            <img src={fecharIcon} alt="Fechar" />
          </S.CloseButton>
        </S.Header>
        <S.Container>
          {erro && <S.Erro>{erro}</S.Erro>}

          <S.CampoGrupo>
            <S.Label>Quem irá receber</S.Label>
            <S.Input
              value={dados.recebedor}
              onChange={(e) => handleChange('recebedor', e.target.value)}
            />
          </S.CampoGrupo>

          <S.CampoGrupo>
            <S.Label>Endereço</S.Label>
            <S.Input
              value={dados.endereco}
              onChange={(e) => handleChange('endereco', e.target.value)}
            />
          </S.CampoGrupo>

          <S.LinhaCampos>
            <S.Coluna>
              <S.CampoGrupo>
                <S.Label>Cidade</S.Label>
                <S.Input
                  value={dados.cidade}
                  onChange={(e) => handleChange('cidade', e.target.value)}
                />
              </S.CampoGrupo>
            </S.Coluna>
            <S.Coluna>
              <S.CampoGrupo>
                <S.Label>CEP</S.Label>
                <S.Input
                  type="text"
                  inputMode="numeric"
                  value={dados.cep}
                  onChange={(e) => handleChange('cep', e.target.value)}
                  placeholder="00000000"
                  maxLength={8}
                />
              </S.CampoGrupo>
            </S.Coluna>
          </S.LinhaCampos>

          <S.CampoGrupo>
            <S.Label>Complemento (opcional)</S.Label>
            <S.Input
              value={dados.complemento}
              onChange={(e) => handleChange('complemento', e.target.value)}
            />
          </S.CampoGrupo>

          <S.Acoes>
            <S.BotaoPrimario onClick={continuar}>
              Continuar com o pagamento
            </S.BotaoPrimario>
            <S.BotaoSecundario onClick={onVoltarCarrinho}>
              Voltar para o carrinho
            </S.BotaoSecundario>
          </S.Acoes>
        </S.Container>
      </S.Drawer>
    </S.Overlay>
  )
}

export default ModalEntrega
