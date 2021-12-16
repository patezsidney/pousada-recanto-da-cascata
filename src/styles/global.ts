import { createGlobalStyle } from 'styled-components'
import imagens from '../assets/images'

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
    background-image: url('./background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center
  }

  p {
    font-family: ${props => props.theme.fontFamilys.paragraph}
  }

  h1 {
    font-family: ${props => props.theme.fontFamilys.decorated}
  }
`
