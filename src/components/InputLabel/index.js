import React from 'react'
import { StyledInputLabel } from './styles'

export default function InputLabel({ styles, children }) {
  return <StyledInputLabel styles={styles}>{children}</StyledInputLabel>
}
