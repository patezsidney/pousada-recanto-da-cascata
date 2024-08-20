import styled from "styled-components";

export const ModalContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  #closeModal {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 3;
  }

  svg {
    fill: ${props => props.theme.colors.white}
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 800px;
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;

  p {
    margin: 1rem;
  }

  svg {
    width: 60px;
    height: 60px;
    fill: ${props => props.theme.colors.white}
  }
`
