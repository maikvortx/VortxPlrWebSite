import styled from 'styled-components'
import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion
} from '@mui/material'
import { blackColor, grayLightColor } from '../../../assets/ui-kit'

export const Section = styled.div``
export const DocumentosContainer = styled(Accordion)`
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  & :before {
    background-color: unset;
  }
`
export const CategoriaTitle = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
  width: 100%;
  @media only screen and (max-width: 570px) {
    font-size: 1.4rem;
  }
`
export const Categorias = styled(AccordionSummary)`
  background-color: ${grayLightColor};
  margin: 5px 0;
  padding: 1rem;
`
export const Documento = styled(AccordionDetails)`
  padding: 1.5rem 0;
  line-height: 2rem;
`
export const DocumentoNome = styled.p`
  padding: 1rem 0;
`
export const ExpandirBotao = styled.div`
  color: ${blackColor};
  font-size: 25px;
  margin-left: auto;
  float: right;
`
