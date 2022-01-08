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

  #links {
    div {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 10px;
      }
    }
  }



  @media (min-width: 700px) {
    #links {
      flex-direction: row;
      justify-content: space-between;
      div{
        flex: 1;
      }
    }

    #map {
      height: 60vh;
      max-height: 600px;
      iframe{
        flex: 1;
      }
    }
  }

`

