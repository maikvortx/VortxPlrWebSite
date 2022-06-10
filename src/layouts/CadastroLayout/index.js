import React from 'react'
import Header from '../../components/Header'
import { Background } from './styles'

export default function CadastroLayout({ children }) {
  return (
    <>
      <Header estilo={'cadastro'} />
      <Background>{children}</Background>
    </>
  )
}
