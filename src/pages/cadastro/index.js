import React from 'react'
import FormularioCadastro from '../../components/FormularioCadastro'
import SloganCadastro from '../../components/SloganCadastro'

import { Container } from '../../assets/styles/cadastro'

const Cadastro = () => {
  return (
    <Container>
      <SloganCadastro />
      <FormularioCadastro />
    </Container>
  )
}

Cadastro.layout = 'CadastroLayout'

export default Cadastro
