import styled from "styled-components";

export const Container = styled.div`
  color:  ${props => props.theme.colors.white};
  text-align: center;
  padding: 60px 0;


  #pousada {
    font-family: ${props => props.theme.fontFamilys.subTitle};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2.5rem;
    line-height: 0rem;
    text-shadow: 0px 0px 15px #000000;
    letter-spacing: 9px;
  };
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 12rem;
  line-height: 7rem;
  text-shadow: 0px 0px 15px #000000;

  #recanto {
    font-family: ${props => props.theme.fontFamilys.title};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 5.7rem;
  }
`