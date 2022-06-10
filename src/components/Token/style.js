import styled from 'styled-components'
import { Box } from '@mui/material'

export const TabsMenu = styled(Box)`
  font-family: 'Open Sans';
  width: 100%;
  margin: 5rem 0;
  @media only screen and (max-width: 640px) {
    margin: 1rem;
    border-bottom: 1px solid #e4e8ec;
    border-top: 1px solid #e4e8ec;
  }
`
