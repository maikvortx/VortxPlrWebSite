import React from 'react'
import { FaqSection, Title } from './style'
import FaqItems from './FaqItems'
import faqQuestions from './FaqQuestions'

function Faq() {
  return (
    <FaqSection>
      <Title>
        <span>Perguntas</span>
        <br />
        frequentes
      </Title>
      {faqQuestions.map((question) => (
        <FaqItems question={question} key={question} />
      ))}
    </FaqSection>
  )
}

export default Faq
