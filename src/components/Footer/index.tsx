import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instragram.svg'
import Logo from '../../assets/Logo.svg'
import Twitter from '../../assets/Twitter.svg'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Fter>
      <img src={Logo} alt="" />
      <S.SocialLinks>
        <div className="Instragram">
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
        <div className="Facebook">
          <a href="">
            <img src={Facebook} alt="" />
          </a>
        </div>
        <div className="Twitter">
          <a href="">
            <img src={Twitter} alt="" />
          </a>
        </div>
      </S.SocialLinks>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </S.Fter>
  )
}

export default Footer
