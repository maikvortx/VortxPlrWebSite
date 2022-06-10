import React from 'react'
import TituloTransparente from '../../components/TituloTransparente'

import { Slogan, TextoCadastro } from './style'

const SloganCadastro = () => {
  return (
    <Slogan>
      <TituloTransparente titulo="O Futuro" />
      <TituloTransparente titulo="Chegou" />
      <TituloTransparente titulo="Ao Seu" />
      <TituloTransparente titulo="Presente" />
      <TextoCadastro>Cadastre-se.</TextoCadastro>
    </Slogan>
  )
}

export default SloganCadastro
