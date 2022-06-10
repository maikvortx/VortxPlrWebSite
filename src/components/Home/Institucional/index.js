import React, { useEffect, useState } from 'react'
import {
  Section,
  Container,
  Content,
  Title,
  ContentInfo,
  Subtitle,
  Text,
  Arrows
} from './style'
import institucionalItens from './InstitucionalItens'

const Institucional = () => {
  const [visible, setVisible] = useState(1)
  const [widthDimension, setWidthDimension] = useState()

  const removeVisible = () => {
    let todosImagens = document.querySelectorAll('.institucional-img')
    for (let i = 0; i < todosImagens.length; i++) {
      todosImagens[i].classList.remove('visible')
    }
  }

  const addVisible = (visible) => {
    let item = document.querySelector(`#institucional-${visible}`)
    item.classList.add('visible')
  }

  const goToNextSlide = () => {
    let idx = visible
    setVisible(idx < institucionalItens.length ? (idx += 1) : (idx = 1))
    removeVisible()
    addVisible(idx)
  }

  const goToPrevSlide = () => {
    let idx = visible
    setVisible(idx > 1 ? (idx -= 1) : (idx = institucionalItens.length))
    removeVisible()
    addVisible(idx)
  }

  useEffect(() => {
    setWidthDimension(window.innerWidth)
    let item = document.querySelectorAll('.institucional-img')
    let i = 0
    if (window.innerWidth > 640) {
      for (i; i < item.length; i++) {
        item[i].classList.add('visible')
      }
    } else {
      for (i; i < item.length; i++) {
        item[i].classList.remove('visible')
      }
      addVisible(1)
    }
  }, [widthDimension])

  useEffect(() => {
    function handleResize() {
      setWidthDimension(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Section id="sobre-nos">
      <Container>
        <Arrows
          width="20"
          height="20"
          viewBox="0 0 50 80"
          onClick={goToPrevSlide}
        >
          <polyline
            fill="none"
            strokeWidth="20"
            points="45,75 0,38 45,0"
            stroke="#ffffff"
          />
        </Arrows>
        {institucionalItens.map((item) => (
          <Content
            key={item.id}
            id={`institucional-${item.id}`}
            className={'institucional-img visible'}
            onMouseOver={() => setVisible(Number(item.id))}
          >
            <img src={item.imagePath} alt={item.altText} />
            <Title>
              <span>{item.titleBold}</span>
              <br /> {item.title}
            </Title>
          </Content>
        ))}
        <Arrows
          width="20"
          height="20"
          viewBox="0 0 50 80"
          onClick={goToNextSlide}
          className="right-arrow"
        >
          <polyline
            fill="none"
            strokeWidth="20"
            points="0,0 45,38 0,75"
            stroke="#ffffff"
          />
        </Arrows>
      </Container>
      <Container>
        {institucionalItens.map((item) => (
          <ContentInfo
            key={item.id}
            id="somos"
            className={visible === Number(item.id) && 'visible'}
          >
            <Subtitle>{item.subtitle}</Subtitle>
            <Text>{item.text}</Text>
          </ContentInfo>
        ))}
      </Container>
    </Section>
  )
}
export default Institucional
