import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text}
  }

  body {
    background: ${props => props.theme.colors.white}
  }

  p {
    font-family: ${props => props.theme.fontFamilys.paragraph}
  }

  h1 {
    font-family: ${props => props.theme.fontFamilys.decorated}
  }
`
