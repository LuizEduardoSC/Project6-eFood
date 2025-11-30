import styled from 'styled-components'
import { cores, device } from '../../styles'

export const Fter = styled.footer`
  margin-top: 80px;
  padding: 40px;
  background-color: ${cores.buttonText};
  text-align: center;

  @media ${device.tablet} {
    margin-top: 60px;
    padding: 32px 24px;
  }

  @media ${device.mobile} {
    margin-top: 40px;
    padding: 24px 16px;
  }
`

export const SocialLinks = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 8px;

  @media ${device.tablet} {
    margin-top: 32px;
    gap: 6px;
  }

  @media ${device.mobile} {
    margin-top: 24px;
    gap: 4px;
  }
`

export const FooterText = styled.p`
  margin-top: 80px;
  font-size: 13px;
  color: ${cores.vermelho};
  text-align: center;
  line-height: 100%;
  letter-spacing: 0%;

  @media ${device.tablet} {
    margin-top: 60px;
    font-size: 12px;
  }

  @media ${device.mobile} {
    margin-top: 40px;
    font-size: 11px;
    padding: 0 8px;
  }
`
