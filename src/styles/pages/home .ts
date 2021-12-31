import styled from "styled-components";

export const Container = styled.div`


  color: ${props => props.theme.colors.text};

  h2 {
    color: ${props => props.theme.colors.primary};
  }
`

export const Content = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`

export const SingleCard = styled.section`
  width: 100%;
  height: 350px;
  display: flex;

  background-color: ${props => props.theme.colors.white};

  .cardContent {
    height: 100%;
    padding: 20px;
    div{
      padding: 20px;
      border-left: 2px solid ${props => props.theme.colors.primary};
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      p{
        padding: 20px 0;
        line-height: 1.4rem;
      }

      button {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      padding: 15px 60px;
      border-radius: 10px;
    }
    }
  }

  div {
    width: 50%;
  }

  .cardImage {
    width: 50%;
    height: 100%;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  #geral {
    background-image: url('./assets/images/Pousada-1.jpg')
  }
  #hidroInterna {
    background-image: url('./assets/images/hidro_interna-2.jpg')
  }
`

export const ReverseCard = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row-reverse;

  div {
    width: 50%;
  }

  h2 {
    color: ${props => props.theme.colors.white};
  }

  background-color: ${props => props.theme.colors.primary};

  .cardContent {
    height: 100%;
    padding: 20px;
    div{
      padding: 20px;
      border-right: 2px solid ${props => props.theme.colors.white};
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      p{
        padding: 20px 0;
        line-height: 1.4rem;
      }

      button {
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.primary};
      text-transform: uppercase;
      padding: 15px 60px;
      border-radius: 10px;
    }
    }
  }

  .cardImage {
    width: 50%;
    height: 100%;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  #hidroExterna {
    background-image: url('./assets/images/hidro_externa-2.jpg')
  }
  #cidade {
    background-image: url('./assets/images/cidade-1.jpg')
  }
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  text-shadow: 0px 0px 3px ${props => props.theme.colors.black};
  font-size: 1.4rem;
  padding: 15px 0;

  :hover{
    background-color: ${props => props.theme.colors.secondaryHover};

  }
`
