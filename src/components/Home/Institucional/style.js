import styled from 'styled-components'

export const Section = styled.div`
  background-color: #202020;
`
export const Container = styled.div`
  background-color: #202020;
  padding: 0 6.5rem 0rem 6.5rem;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 920px) {
    padding: 0 1.2rem;
  }
`
export const Content = styled.div`
  border-radius: 6px;
  display: none;
  text-align: left;
  max-width: 22%;
  & img {
    transition: transform 0.2s;
    max-width: 85%;
    & :hover {
      transform: scale(1.1);
    }
    @media only screen and (max-width: 640px) {
      max-width: 100%;
    }
  }
  &.visible {
    display: block;
    text-align: center;
    padding: 2rem 0 0 0;
    margin: auto;
  }
`
export const Title = styled.h3`
  color: #ffffff;
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
  top: -20rem;
  left: -3rem;
  text-align: left;
  & span {
    font-weight: 600;
  }

  @media only screen and (max-width: 640px) {
    top: -21rem;
    left: -1rem;
    text-align: left;
  }
`
export const ContentInfo = styled.div`
  line-height: 3em;
  display: none;
  &.visible {
    display: block;
  }
`
export const Subtitle = styled.h4`
  font-family: 'Josefin Sans', sans-serif; !important
  color: #ffffff;
  font-weight: 600;
  color: #ffffff;
  font-size: 1.5rem;
`
export const Text = styled.p`
  width: 60%;
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 400;
  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`
export const Arrows = styled.svg`
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
    position: absolute;
    margin-top: 50%;
  }
  &.right-arrow {
    right: 1rem;
  }
`
