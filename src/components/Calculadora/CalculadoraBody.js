import React, { useState } from 'react'
import { CalculadoraModal, CalculadoraContent, Form } from './style'
import CalculadoraForm from './CalculadoraForm'
import CalculadoraResultado from './CalculadoraResultado'

function CalculadoraBody() {
  const [resultado, setResultado] = useState()

  return (
    <section>
      <CalculadoraModal>
        <CalculadoraContent>
          <div>
            <p>
              Nossa <strong>calculadora digital</strong> te ajuda a fazer a
              decisão certa!
            </p>
          </div>
          <Form>
            <CalculadoraForm setResultado={setResultado} />
            {resultado && <CalculadoraResultado resultado={resultado} />}
          </Form>
        </CalculadoraContent>
      </CalculadoraModal>
    </section>
  )
}

export default CalculadoraBody
