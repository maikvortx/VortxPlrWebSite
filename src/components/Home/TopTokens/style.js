import styled from 'styled-components'
import { paragraph, title, blackColor } from '../../../assets/ui-kit'
export const Section = styled.div`
  padding: 5rem;
  @media only screen and (max-width: 920px) {
    padding: 1.2rem;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media only screen and (max-width: 920px) {
    display: block;
  }
`

export const LinkButton = styled.a`
  height: 100%;
  font-size: 1rem;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: underline;
  color: ${blackColor};
  margin-right: 20px;
  font-family: ${paragraph.fontFamily};
  font-weight: ${title.fontWeight};
  white-space: nowrap;
`

export const Container = styled.div`
  padding-top: 2rem 0;
  margin: 0 auto;
  display: flex;
  font-family: 'Open Sans';
  flex-wrap: wrap;
  justify-content: space-between;
  flex-flow: column wrap;
  max-height: 30rem;
  @media only screen and (max-width: 920px) {
    padding-top: 35px;
    text-align: center;
  }
  @media only screen and (max-width: 640px) {
    justify-content: center;
    flex-flow: column;
    max-height: 100%;
  }
`
export const Content = styled.div`
  display: flex;
  font-family: 'Open Sans';
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`
export const Title = styled.h3`
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 5rem;
  @media only screen and (max-width: 640px) {
    padding-bottom: 1rem;
  }
`
export const TokenContainer = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid rgba(196, 196, 196, 0.6);
  display: flex;
  max-width: 45%;
  :hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  @media only screen and (max-width: 640px) {
    max-width: 100%;
    text-align: left;
  }
`
export const TokenInfo = styled.div`
  font-family: 'Open Sans';
  margin-right: 1rem;
  & p {
    line-height: 2rem;
  }
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`
export const TokenTitle = styled.h3`
  font-family: 'Open Sans';
  font-size: 1.2em;
  padding-bottom: 1rem;
  width: 100%;
`
export const TokenContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
`
export const TokenImage = styled.img`
  max-height: 50px;
  padding: 0 1rem;
`
export const SideContent = styled.div`
  display: flex;
  & h3 {
    font-family: 'Open Sans';
  }
`
