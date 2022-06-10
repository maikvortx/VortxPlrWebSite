import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion
} from '@mui/material'
import styled from 'styled-components'
import { primaryColor, blackColor } from '../../../assets/ui-kit/index'

export const FaqSection = styled.div`
  padding-top: 6rem;
  margin: 0 auto;
  @media only screen and (max-width: 570px) {
    padding-top: 2rem;
  }
`

export const FaqContainer = styled.div`
  max-width: 800px;
  text-align: left;
  padding: 20px;
  margin: 0 auto;
  display: flex;
`

export const Title = styled.h1`
  color: ${blackColor};
  margin: 0 auto;
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  padding-left: 6.5rem;
  & span {
    font-weight: 600;
  }
  @media only screen and (max-width: 920px) {
    padding-left: 1.2rem;
  }
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
  }
`

export const Question = styled(Typography)`
  font-weight: 700 !important;
  font-size: 1.2rem;
  @media only screen and (max-width: 570px) {
    font-size: 1.4rem;
  }
`
export const Answer = styled(AccordionDetails)`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${blackColor};
  line-height: 2rem;
`
export const QuestionContainer = styled(AccordionSummary)`
  border-bottom: 1px solid ${blackColor} !important;
  padding: 0;
  & .Mui-expanded {
    color: ${primaryColor};
  }
`
export const FaqContent = styled(Accordion)`
  width: 100%;
  padding: 0;
`
