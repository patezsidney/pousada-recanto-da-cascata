import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 20px;

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

  #masonry {
    margin-top: 40px;
  }

  @media (min-width: 700px) {
    p {
      max-width: 90%;
      margin: 0 auto;
    }

    #carrossel {
      height: 250px;
    }
  }
`
