import React from 'react'
import {
  Niveis,
  Section,
  Title,
  Container,
  Content,
  Numbers,
  SectionItem
} from './style'

const NiveisIndicadores = () => {
  return (
    <Niveis>
      <Section>
        <Title>Aceitável</Title>
        <Container>
          <SectionItem>
            <Content>
              <Numbers>R$ 95.389</Numbers>
            </Content>
            <p>EBITDA</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>R$ 187.486</Numbers>
            </Content>
            <p>Receita Bruta</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>-</Numbers>
            </Content>
            <p>NPS</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>2,0</Numbers>
            </Content>
            <p>Avaliação de Desempenho</p>
          </SectionItem>
        </Container>
      </Section>
      <Section>
        <Title>Esperado</Title>
        <Container>
          <SectionItem>
            <Content>
              <Numbers>R$ 102.469</Numbers>
            </Content>
            <p>EBITDA</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>R$ 201.455</Numbers>
            </Content>
            <p>Receita Bruta</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers> 30,0</Numbers>
            </Content>
            <p>NPS</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>2,7</Numbers>
            </Content>
            <p>Avaliação de Desempenho</p>
          </SectionItem>
        </Container>
      </Section>
      <Section>
        <Title>Excepcional</Title>
        <Container>
          <SectionItem>
            <Content>
              <Numbers>R$ 109.549</Numbers>
            </Content>
            <p>EBITDA</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>R$ 215.425</Numbers>
            </Content>
            <p>Receita Bruta</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>51</Numbers>
            </Content>
            <p>NPS</p>
          </SectionItem>
          <SectionItem>
            <Content>
              <Numbers>3,4</Numbers>
            </Content>
            <p>Avaliação de Desempenho</p>
          </SectionItem>
        </Container>
      </Section>
    </Niveis>
  )
}
export default NiveisIndicadores
