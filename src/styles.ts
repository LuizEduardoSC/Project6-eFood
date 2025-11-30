import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  vermelho: '#E66767',
  buttonText: `#FFEBD9`
}

// Breakpoints
export const breakpoints = {
  mobile: '767px',
  tablet: '1023px',
  laptop: '1024px'
}

// Helper functions para media queries
export const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: 768px) and (max-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  tabletAndUp: `(min-width: 768px)`,
  laptopAndDown: `(max-width: ${breakpoints.tablet})`
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

  @media ${device.mobile} {
    padding: 0 8px;
  }
`
