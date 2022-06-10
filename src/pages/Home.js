import React from 'react'
import Faq from '../components/Home/FAQ/Faq'
import Banner from './../components/Home/Banner/Banner'
import NossosNumeros from '../components/Home/NossosNumeros'
import Institucional from '../components/Home/Institucional'
// import TopTokens from '../components/Home/TopTokens'

const Home = () => {
  return (
    <>
      <Banner />
      {/* <TopTokens /> */}
      <Institucional />
      <NossosNumeros />
      {/* <NaMidia /> */}
      <Faq />
    </>
  )
}
Home.layout = 'HomePageLayout'

export default Home
