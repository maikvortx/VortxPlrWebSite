import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Container } from './styles'

function Loading() {
  return (
    <Container>
      <div>
        <CircularProgress size={100} color="primary" />
      </div>
    </Container>
  )
}

export default Loading
