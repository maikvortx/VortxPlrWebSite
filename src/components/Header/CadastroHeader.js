import React from 'react'
import { NavLink as Link } from "react-router-dom"
import { LinkButton } from './styles'
import { primaryColor } from '../../assets/ui-kit'

function CadastroHeader() {
  return (
    <li>
      Já tem cadastro?
      <Link href="/cadastro">
        <LinkButton color={primaryColor}>Entre aqui</LinkButton>
      </Link>
    </li>
  )
}

export default CadastroHeader
