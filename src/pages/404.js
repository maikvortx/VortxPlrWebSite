import React from 'react'
import { Container } from '../assets/styles/404'

const Custom404 = () => {
  return (
    <Container>
      <img
        src="http://cdn.vortx.com.br/images/vortx-one/ops-ocorreu-um-erro.svg"
        alt="erro"
      />
      <p>Oops! Não conseguimos encontrar a página solicitada.</p>
    </Container>
  )
}

Custom404.layout = 'PagesLayout'

export default Custom404
