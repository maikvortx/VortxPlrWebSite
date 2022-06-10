import React from 'react'
import { CalculadoraButton } from './style'
import CalculadoraBody from './CalculadoraBody'
import CalculadoraIcon from '../../assets/img/calculadora-icon.png'
import { useModal } from '../Modal/Modal'

function Calculadora() {
  const { setModal } = useModal()

  const handleModal = () => {
    setModal({
      title: `Simule`,
      body: <CalculadoraBody />
    })
  }

  return (
    <section>
      <CalculadoraButton
        className="m-calculadora"
        id="calculadora"
        title="Calculadora Vórtx"
        onClick={handleModal}
      >
        <img src={CalculadoraIcon} alt="ícone calculadora" layout="fixed" />
      </CalculadoraButton>
    </section>
  )
}

export default Calculadora
