import React from 'react'
import Header from '../../components/Header'

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header estilo={'home'} />
      <>{children}</>
      {/* <Calculadora /> */}
      {/* <Footer /> */}
    </>
  )
}
