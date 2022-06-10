import styled from 'styled-components'
import { primaryColor } from '../../../assets/ui-kit'

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid rgba(196, 196, 196, 0.6);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  justify-content: space-between;

  & div {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 640px) {
    box-shadow: unset;
    border-bottom: unset;
    border-radius: unset;
    max-width: 100%;
    text-align: left;
    > * {
      &:first-child {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
    }
  }
`
export const TokenImage = styled.img`
  max-height: 50px;
  padding: 0 1rem;
  max-width: fit-content;
  @media only screen and (max-width: 640px) {
    margin-bottom: 1rem;
    padding: 0;
  }
`
export const TokenInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const TokenTitle = styled.h3`
  font-family: 'Open Sans';
  font-size: 1.5em;
  padding-bottom: 1rem;
  width: 100%;
`
export const TokenDescription = styled.div`
  font-family: 'Open Sans';
  margin-right: 1rem;
  display: block;
  & p {
    line-height: 2rem;
    width: 100%;
  }
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`
export const TokenButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  padding-right: 3rem;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`
export const DownloadLink = styled.a`
  text-decoration: underline;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  & .doc-icon {
    font-size: 3rem;
    color: #c8c8c8;
  }
  & .doc-download-icon {
    margin-left: -1rem;
    background: ${primaryColor};
    border-radius: 50px;
    color: #ffffff;
    padding: 4px;
  }
`
export const Icons = styled.div`
  display: block;
  margin-right: 0.5rem;
  align-items: baseline;
`
