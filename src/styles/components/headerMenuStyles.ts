import styled from "styled-components";


export const Container = styled.nav`

  display: none;

  @media (min-width: 700px) {
    background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 0 0 5px 5px;
  padding: 20px 25px;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${props => props.theme.colors.white};
      font-weight: bold;
      text-shadow: 0px 0px 3px ${props => props.theme.colors.black};
      transition: all .2s linear;
      padding: 14px;

      :hover {
        color: ${props => props.theme.colors.primary};
      }
    }


  }
  }
`
export const Button = styled.button`
  padding: 12px 24px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  text-shadow: 0px 0px 3px ${props => props.theme.colors.black};
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  transition: all .2s linear;

  :hover {
    background-color: ${props => props.theme.colors.secondaryHover};
  }
`
