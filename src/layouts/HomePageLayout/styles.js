import styled from 'styled-components'

export const Background = styled.div`
  padding: 100px 60px;
  background-image: url('/img/background-cadastro.png');
  background-color: #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;
  background-position-x: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  @media only screen and (max-width: 920px) {
    overflow-y: scroll;
    padding: 100px 15px;
  }
`
