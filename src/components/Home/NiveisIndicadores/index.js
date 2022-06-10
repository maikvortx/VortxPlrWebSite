import React from 'react'
import { Section, Title, Container, Content, Numbers } from './style'

const NossosNumeros = () => {
  return (
    <Section>
      <Title>Indicadores do Quarter</Title>
      <Container>
        <div>
          <Content>
            <Numbers>109.6M</Numbers>
          </Content>
          <p>EBITDA</p>
        </div>
        <div>
          <Content>
            <Numbers>215.4M</Numbers>
          </Content>
          <p>Receita Bruta</p>
        </div>
        <div>
          <Content>
            <Numbers>51</Numbers>
          </Content>
          <p>NPS</p>
        </div>
      </Container>
    </Section>
  )
}
export default NossosNumeros
