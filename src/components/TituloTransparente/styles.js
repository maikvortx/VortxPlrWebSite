import styled from 'styled-components'

export const Titulo = styled.h1`
  margin: 0;
  font-family: 'Open Sans';
  font-size: 70px;
  line-height: 90px;
  font-weight: 800;

  @media only screen and (max-width: 640px) {
    font-size: 100px;
  }

  svg {
    display: block;
  }

  text {
    text-transform: uppercase;
    fill: transparent;
    stroke: #fff;
    stroke-width: 1;
  }
`
