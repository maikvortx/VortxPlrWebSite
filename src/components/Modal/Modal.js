import React, { useCallback, useState } from 'react'
import {
  ModalContainer,
  ModalContent,
  ModalCloseBtn,
  ModalHeader,
  ModalBody,
  ModalButton
} from './styles'
import Button from '../Buttons/Button'

const ModalContext = React.createContext()

const Modal = ({ modal, unSetModal }) => {
  return (
    <ModalContainer id={modal.id}>
      <ModalContent width={modal.width}>
        <ModalCloseBtn onClick={unSetModal}>&times;</ModalCloseBtn>
        <ModalHeader>
          <h1>{modal.title}</h1>
          <p>{modal.subtitle}</p>
        </ModalHeader>
        <ModalBody>{modal.body}</ModalBody>
        {modal.button ? (
          <ModalButton>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={unSetModal}
            >
              {modal.button}
            </Button>
          </ModalButton>
        ) : null}
      </ModalContent>
    </ModalContainer>
  )
}

const ModalProvider = (props) => {
  const [modal, setModal] = useState()
  const unSetModal = useCallback(() => {
    setModal()
  }, [setModal])

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a UserProvider')
  }

  return context
}

export { ModalProvider, useModal }
