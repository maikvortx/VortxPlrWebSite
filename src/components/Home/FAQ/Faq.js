import React from 'react'
import { FaqSection, Title } from './style'
import FaqItems from './FaqItems'
import faqQuestions from './FaqQuestions'
import uuid from '../../../helpers/uuid'

function Faq() {
  return (
    <FaqSection>
      <Title>
        <span>Perguntas</span>
        <br />
        frequentes
      </Title>
      {faqQuestions.map((question) => (
        <FaqItems key={uuid()} question={question} />
      ))}
    </FaqSection>
  )
}

export default Faq
