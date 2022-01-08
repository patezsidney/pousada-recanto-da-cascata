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

  h3 {
    padding: 20px 0;
    font-size: 2.3rem;
    color: ${props => props.theme.colors.text};
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .carouselTitle {
    width: 100%;
    align-self: center;
  }

  .carousel {
    width: 100%;
    height: 100vw;
    max-height: 400px;
  }

  @media (min-width: 700px) {
    h2 {
      padding-bottom: 50px;
    }

    section {
      flex-direction: row-reverse;

      :nth-child(odd) {
        flex-direction: row;
      }
    }
    .carouselTitle {
      width: 50%;
      height: 100%;
    }

    .carousel {
      width: 50%;
    }
  }

`

