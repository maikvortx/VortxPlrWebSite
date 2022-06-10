import styled from 'styled-components'
import { primaryColor } from '../../../assets/ui-kit/index'

export const Section = styled.div`
  background-color: #202020;
  padding: 6.5rem;
  @media only screen and (max-width: 920px) {
    padding: 1.2rem;
  }
`
export const Container = styled.div`
  padding-top: 2rem 0;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 920px) {
    padding-top: 35px;
    text-align: center;
  }
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`
export const Content = styled.div`
  display: flex;
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`
export const Title = styled.h3`
  background-color: #202020;
  color: #ffffff;
  font-size: 2em;
  font-weight: 600;
  border-top: 1px solid #979797;
  padding-top: 6.5rem;
  padding-bottom: 6.5rem;
`
export const OutlinedText = styled.h1`
  margin: 0;
  font-family: 'Open Sans';
  font-size: 2rem;
  line-height: 90px;
  font-weight: 800;

  @media only screen and (max-width: 640px) {
    max-width: 3rem;
    width: 100%;
    height: auto;
    font-size: 2rem;
  }

  svg {
    display: block;
    height: auto;
    width: auto;
  }

  text {
    text-transform: uppercase;
    fill: transparent;
    stroke: #fff;
    stroke-width: 1;
  }
`
export const Numbers = styled.h1`
  color: ${primaryColor};
  font-family: 'Open Sans';
  font-size: 5em;
  font-weight: 800;
  & span {
    font-size: 0.5em;
    color: #202020;
    -webkit-text-stroke: 1px white;
  }
`
