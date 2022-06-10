import styled from 'styled-components'
import { primaryColor } from '../../assets/ui-kit'

export const CalculadoraButton = styled.div`
  position: fixed;
  bottom: 35px;
  right: 15px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background-color: ${primaryColor};
  border: 10px solid ${primaryColor};
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: all 400ms ease-in-out;
  filter: blur(2);
  animation: slowShow 4s forwards ease-in-out;
`
export const CalculadoraModal = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`
export const CalculadoraContent = styled.div`
  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`
export const FormType = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`
export const FormSelector = styled.h4`
  width: 6rem;
  padding: 7px 0;
  margin-right: 1rem;
  & :nth-child(2) {
    right: 0;
  }
  &.selected {
    color: ${primaryColor};
    border-bottom: 5px solid ${primaryColor};
  }
  :hover {
    z-index: 1;
    cursor: pointer;
    border-bottom: 5px solid ${primaryColor};
    color: ${primaryColor};
  }
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: end;
  > div {
    margin: 1rem 0;
  }
`
export const Form = styled.div`
  margin-top: 2rem;
`
