import React from 'react'
import { FormHelperText } from '@mui/material'

export default function ErrorMessage({ message = '' }) {
  return <FormHelperText style={{ color: '#cb1e25' }}>{message}</FormHelperText>
}
