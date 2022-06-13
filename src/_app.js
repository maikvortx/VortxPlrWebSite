import { ApolloProvider } from '@apollo/client'
import client from './services/graphql'
import React from 'react'
import { ModalProvider } from './components/Modal/Modal'
import { ThemeProvider } from '@mui/material/styles'
import theme from './assets/styles/global/Theme'

import HomePageLayout from './layouts/HomePageLayout'

import { GlobalStyle } from './assets/styles/global'

import './style.css'
import Home from './pages/Home'


function MyApp() {
  
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <HomePageLayout>
            <GlobalStyle />
            <Home />
          </HomePageLayout>
        </ModalProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
