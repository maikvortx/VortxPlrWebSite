import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function PagesLayout({ children }) {
  return (
    <>
      <Header estilo={'tokens'} />
      <>{children}</>
      <Footer />
    </>
  )
}
