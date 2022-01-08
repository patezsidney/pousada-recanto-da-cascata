import styled, { keyframes } from "styled-components";

const slideshow = keyframes`
  0% {opacity: 0;
    right: -10%
  }
  10% {opacity: 1}
  75% {opacity: 1}
  100% {opacity: 0;
    left: -10%;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  img{

    animation: ${slideshow} 10s reverse ;
  }

  .hidden {
    display: none;
  }

`
