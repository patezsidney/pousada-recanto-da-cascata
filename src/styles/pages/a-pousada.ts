import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;

  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};

  h2 {
    padding: 20px 0;
    font-size: 2.3rem;
    color: ${props => props.theme.colors.primary};
    font-style: italic;
  }

  p {
    line-height: 2rem;
    max-width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 700px) {

  }
  .css-18hp29u-MuiMasonry-root {
    margin: 0;
  }

`

export const Button = styled.button`
  width: 90%;
  padding: 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  transition: all .2s linear;

  :hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`

