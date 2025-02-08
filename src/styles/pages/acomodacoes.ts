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
    flex-direction: row;
    width: 100%;
    padding: 20px 0;
    justify-content: center;
  }

  .carousel {
    width: 90%;
    height: 50vw;
    max-height: 80vw;
  }

  @media (min-width: 700px) {
    h2 {
      padding-bottom: 50px;
    }

    section {
      flex-direction: row;

    }

    .carousel {
      width: 90%;
      height: 60vw;
    }
  }

`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  text-shadow: 0px 0px 3px ${props => props.theme.colors.black};
  font-size: 1.4rem;
  padding: 15px 0;
  margin-top: 15px;

  :hover{
    background-color: ${props => props.theme.colors.primaryHover};

  }

  // @media (min-width: 700px) {
  //   flex-direction: column;
  // }
`

