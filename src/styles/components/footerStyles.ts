import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 20px;
  color: ${props => props.theme.colors.white};

  #direitos {
    text-align: center;
    background-color: black;
    padding: 10px;
    color: white;
    font-size: 0.8rem;
  }

  @media (min-width: 700px) {
    height: 350px;
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 0;
  border-top: 2px solid ${props => props.theme.colors.white};

  #address {
    p {
      margin: 5px 0;
    }
  }

  .social {
    margin: 30px 0;

    button {
      width: 100%;
      margin: 10px 0;
      padding: 15px 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: ${props => props.theme.colors.white};
      font-weight: bold;

      svg {
        height: 2rem;
        width: 2rem;
        margin-right: 10px;
      }

      :hover {
        background-color: ${props => props.theme.colors.primaryHover}
      }
    }
  }

  iframe {
    border: none;
  }

  @media (min-width: 700px) {
    .social {
      margin: unset;
    }
  }
`

export const Logo = styled.div`

  margin: 20px 0;

  #cascata {
  font-family: ${props => props.theme.fontFamilys.decorated};
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 2.8rem;
  }

  #pousada {
    font-family: ${props => props.theme.fontFamilys.subTitle};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.9rem;
    line-height: 0.6rem;
    letter-spacing: 9px;
  };

  #recanto {
    font-family: ${props => props.theme.fontFamilys.title};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2.25rem;
  }
`



