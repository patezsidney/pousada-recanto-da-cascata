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

  #nextImageButton, #previousImageButton{
    cursor: pointer;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100vh;
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  #nextImageButton{
    right: 0;
  }

  #previousImageButton{
    left: 0;
  }

  svg {
    fill: ${props => props.theme.colors.white}
  }
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 1200px;
  max-width: 90vw;
  max-height: 90vh;
  position: relative;

  svg {
    width: 60px;
    height: 60px;
    fill: ${props => props.theme.colors.white}
  }
`
