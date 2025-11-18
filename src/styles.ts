import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  vermelho: '#E66767',
  buttonText: `#FFEBD9`
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.background};
    }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`
