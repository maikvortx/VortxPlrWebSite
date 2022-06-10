import styled, { css } from 'styled-components'
import { blackColor, primaryColor } from '../../assets/ui-kit'
import Button from '../Buttons/Button'

export const TokensContainer = styled.div`
  padding: 0px 40px;
  max-width: 1366px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 0px;
  }
`

export const TokensHeader = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  margin-top: 70px;

  > div:first-of-type {
    text-align: left;
  }

  .MuiFormControl-root {
    width: 180px !important;
    margin: 0px 10px 0px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div:first-of-type {
      width: 100%;
    }

    .MuiFormControl-root {
      width: 100% !important;
      margin: 20px 0px !important;
    }
  }
`

export const Mercado = styled.div`
  > button:nth-of-type(2n + 1) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;

    > button {
      flex: 1;
    }
  }
`

export const MercadoButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${blackColor};
  border-radius: 4px;

  ${(props) =>
    props.selected &&
    css`
      border-color: ${primaryColor};
      color: ${primaryColor};
    `}

  &:hover {
    border-color: ${primaryColor};
    color: ${primaryColor};
  }
`

export const CardToken = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid rgba(196, 196, 196, 0.6);
  max-width: 300px;
  min-height: 390px;
  padding: 1rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin: 0px auto 40px auto;
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 8px 10px;
  }
`

export const CardTokenHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  > img {
    width: 70px;
    height: 70px;
    border-radius: 4px;
  }

  > h3 {
    margin-left: 10px;
    word-break: break-all;
  }
`

export const CardTokenDivider = styled.div`
  height: 1px;
  background-color: rgba(196, 196, 196, 0.6);
  margin: 15px 0px;
  width: 100%;
`

export const CardTokenBody = styled.div`
  width: 100%;
`

CardTokenBody.Info = styled.div`
  > p {
    margin-bottom: 5px;
  }
`

CardTokenBody.ComprarButton = styled(Button)`
  margin: 20px auto;
  display: block;
`
export const LaminaButton = styled(Button)`
  border-radius: 50px;
  text-align: left !important;
  margin: 5px !important;
  padding: 2px 10px 2px 2px !important;
  font-size: 0.6rem !important;
  background-color: rgba(203, 30, 37, 0.05) !important;
  border: 0.5px solid ${primaryColor} !important;
  color: #161616 !important;
  float: right;
  > svg {
    background: ${primaryColor};
    border-radius: 50px;
    color: #ffffff !important;
    padding: 4px;
  }
`

CardTokenBody.SaberMaisButton = styled.button`
  border-bottom: 1px solid ${blackColor};
  display: block;
  margin: 0 auto;
`
