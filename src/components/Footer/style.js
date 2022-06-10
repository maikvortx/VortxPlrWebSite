import styled from 'styled-components'
import { primaryColor, whiteColor } from '../../assets/ui-kit'

export const FooterSection = styled.footer`
  background-color: #202020;
  border-top: 1px solid ${whiteColor};
  scroll-snap-align: end;
  color: ${whiteColor};
`

export const FooterRow = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  font-size: 12px;
  line-height: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 750px) {
    padding: 1rem 1.2rem;
  }

  > ul {
    width: 20%;
    list-style: none;
    color: ${whiteColor};

    @media only screen and (max-width: 750px) {
      width: 24%;
    }
    @media only screen and (max-width: 570px) {
      width: 45%;
      padding-left: 16px;
    }

    > li > a {
      color: ${whiteColor};
      :hover {
        color: ${primaryColor};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

export const FooterTitle = styled.li`
  font-size: 13px;
  font-weight: bolder;
  text-transform: uppercase;
  margin: 30px 0 10px 0;
  list-style: none;
`
export const RedesSociais = styled.div`
  > a > img {
    width: 28px;
    padding-right: 8px;
    padding-top: 20px;
  }
`
