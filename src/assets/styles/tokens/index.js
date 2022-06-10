import styled from 'styled-components'
import { primaryColor, paragraph } from '../../ui-kit'

export const Section = styled.div`
  padding: 6rem 5rem 2rem 5rem;
  > * {
    &:first-child {
      text-align: right;
      padding: 2rem 0;
    }
  }
  @media only screen and (max-width: 640px) {
    padding: 4rem 1rem;
    > * {
      &:first-child {
        text-align: right;
        padding: 1rem 0 0 0;
      }
    }
  }
`
export const LinkButton = styled.a`
  height: 100%;
  font-size: 1rem;
  padding: 0px 15px;
  align-items: center;
  color: ${(props) => props.color || primaryColor};
  margin-right: 20px;
  font-family: ${paragraph.fontFamily};
  font-weight: ${paragraph.fontWeight};
  white-space: nowrap;
  cursor: pointer;
  text-decoration: underline;
`
