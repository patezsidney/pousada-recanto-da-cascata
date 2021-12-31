import styled from "styled-components";
import { Drawer } from '@mui/material'

export const Container = styled.div`
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 20px 25px;
  align-self: center;

  svg {
    fill: ${props => props.theme.colors.white};
    width: 30px;
    height: 30px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

export const StyledDrawer = styled(Drawer)`
  text-align: center;

  .MuiPaper-root {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 20px 25px;
  }

  svg {
    fill: ${props => props.theme.colors.white};
    width: 50px;
    height: 50px;
    padding: 10px;
    align-self: flex-end;
  }

  ul {
      width: 100%;
      font-size: 1.5rem;

      li {
        margin-bottom: 20px;
      }
      .default {
        color: ${props => props.theme.colors.white};
      }

      .active {
        color: ${props => props.theme.colors.primary};
      }

      a {
        font-weight: bold;
        text-shadow: 0px 0px 3px ${props => props.theme.colors.black};
        transition: all .2s linear;
        padding: 14px;

        :hover {
          color: ${props => props.theme.colors.primary};
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
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  transition: all .2s linear;

  :hover {
    background-color: ${props => props.theme.colors.secondaryHover};
  }
`
