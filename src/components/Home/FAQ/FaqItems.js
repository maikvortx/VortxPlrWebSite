import React from 'react'
import {
  FaqContainer,
  Question,
  QuestionContainer,
  FaqContent,
  Answer
} from './style'
import { Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const FaqItems = ({ question }) => {
  return (
    <FaqContainer>
      <FaqContent disableGutters elevation={0}>
        <QuestionContainer
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Question>{question.question}</Question>
        </QuestionContainer>
        <Answer>
          <Typography>{question.answer}</Typography>
        </Answer>
      </FaqContent>
    </FaqContainer>
  )
}

export default FaqItems
