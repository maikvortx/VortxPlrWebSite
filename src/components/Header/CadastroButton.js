import React from 'react'
import { NavLink as Link } from "react-router-dom"
import Button from '../../components/Buttons/Button'

function CadastroButton() {
  return (
    <Link href="/cadastro">
      <Button color="outlined">Cadastro / Login</Button>
    </Link>
  )
}

export default CadastroButton
