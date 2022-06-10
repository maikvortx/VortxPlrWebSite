import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-color: #cb1e25;
`

export const SectionBanner = styled.div`
  max-width: 800px;
  @media only screen and (max-width: 920px) {
    width: 100%;
    margin-top: 40px;
  }
`

export const Background = styled.div`
  height: 100vh;
  padding: 5rem;
  background-color: #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position-x: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background-color: #cb1e25;
  background: url(https://cdn.vortx.com.br/images/site/imagenscortadas/vortx_equipe7.png)
    no-repeat;
  background-position-x: right;
  background-position-y: center;
  padding: 100px 0;

  padding-right: 70px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media only screen and (max-width: 920px) {
    overflow-y: scroll;
    padding: 100px 15px;
  }
`

export const Title = styled.h1`
  font-family: 'Rockness', cursive;
  color: #fff;
  font-weight: 400;
  margin-top: 40px;
  font-size: 7.5em;
  line-height: 1.5em;
`

export const Text = styled.p`
  color: #fff;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 1.3em;
  line-height: 1.5em;
  @media only screen and (max-width: 920px) {
    width: 80%;
  }
`
