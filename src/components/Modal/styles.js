import styled from 'styled-components'
import { primaryColor, whiteColor } from '../../assets/ui-kit'

export const ModalContainer = styled.div`
  position: fixed;
  display: block;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(13px);
  margin-top: 60px;
`
export const ModalContent = styled.div`
  background-color: ${whiteColor};
  border-radius: 6px;
  background-color: #fefefe solid;
  height: auto;
  width: ${(props) => props.width || '80%'};
  max-width: 1250px;
  padding: 50px;
  filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.1));
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 640px) {
    padding: 20px;
    width: 80%;
    height: 80%;
  }

  @media only screen and (max-width: 640px) {
    padding: 20px;
    width: 80%;
    height: 80%;
  }
`
export const ModalCloseBtn = styled.p`
  color: #343434;
  float: right;
  font-size: 30px;
  font-weight: 300;
  margin: -1rem;
  &:hover {
    cursor: pointer;
    color: ${primaryColor};
  }
`
export const ModalContentInfo = styled.div`
  margin: 30px;
  & h4 {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  & h5 {
    font-size: 16px;
    margin-bottom: 20px;
  }
`
export const ModalHeader = styled.div`
  margin: 30px 0 10px 0;
  & h3 {
    padding-bottom: 20px;
    margin-bottom: 10px;
    position: relative;
  }
`
export const ModalBody = styled.div`
  // margin: 30px;
`
export const ModalButton = styled.div`
  border-top: 1px solid #c4c4c4;
  padding: 30px 0;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & button:disabled {
    background-color: #d4d3d6;
  }
`
