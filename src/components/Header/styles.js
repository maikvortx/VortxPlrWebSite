import styled from 'styled-components'
import {
  primaryColor,
  paragraph,
  title,
  whiteColor,
  blackColor
} from '../../assets/ui-kit'

export const HeaderApp = styled.nav`
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.headerColor || whiteColor};
  height: 65px;
  position: fixed;
  width: 100vw;
  z-index: 101;
  box-shadow: ${(props) =>
    props.headerColor === whiteColor
      ? '0px 4px 15px rgba(0, 0, 0, 0.05)'
      : 'none'};

  > svg {
    color: ${whiteColor}
    background-color: ${whiteColor};
    position: fixed;
    top: 0;
    left: 0;
  }

  ${({ exibeMenu }) =>
    exibeMenu &&
    `
      height: 100vh;
      display: block;
      background-color: ${whiteColor};
    }
  `}
`

export const HeaderContainer = styled.div`
  margin: 0px 30px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1201px) {
    
    > ul {
      list-style: none;
      padding-right: 20px;
    }
  }

  @media (max-width: 1200px) {
    ${({ exibeMenu }) =>
      exibeMenu &&
      `
      flex-direction: column;
      margin-top: 20px;
      align-items: flex-start;
    }
  `}
  }
}

  @media (max-width: 320px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
HeaderContainer.btnMenuEImgDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

HeaderContainer.btnMenu = styled.div`
  display: none;
  color: ${(props) =>
    props.headerColor === whiteColor ? blackColor : whiteColor};
  cursor: pointer;
  transform: scale(1.4);

  @media (max-width: 1200px) {
    display: block;
  }
`

HeaderContainer.ImgDiv = styled.div`
  height: 25px;

  > img {
    height: 100%;
  }

  > span {
    padding-top: 10px !important;
    margin-left: 30px !important;
  }

  @media (max-width: 1200px) {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      ${({ exibeMenu }) =>
        exibeMenu &&
        `
        flex-direction: column;
      }
    `}
    }
  }
`

HeaderContainer.Menu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  > li {
    list-style: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  ${({ exibeMenu }) =>
    exibeMenu &&
    `
      flex-direction: column;

      @media (max-width: 1200px) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
        width: 100%;
      }
    }
  `}

  > a {
    height: 100%;
    font-size: 1rem;
    padding: 0px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.color || primaryColor};
    margin-right: 20px;
    font-family: ${paragraph.fontFamily};
    font-weight: ${paragraph.fontWeight};
    white-space: nowrap;
  }

  > a:last-of-type {
    margin-right: 0px;
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
  font-weight: ${title.fontWeight};
  white-space: nowrap;
  cursor: pointer;
`
