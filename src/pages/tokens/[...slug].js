import React, { useState, useEffect } from 'react'

import { Section, LinkButton } from '../../assets/styles/tokens'
import TokenHeader from './../../components/Token/Header'
import TokenNavTabs from './../../components/Token/TokenNavTabs'
import Button from '../../components/Buttons/Button'
import { NavLink as Link } from "react-router-dom"

const Ativo = () => {
  const [ativo, setAtivo] = useState({})

  useEffect(() => {
    setAtivo()
  }, [])

  return (
    <Section>
      <div>
        <Button simple color="white">
          <Link href="/tokens">
            <LinkButton>Ver mais tokens</LinkButton>
          </Link>
        </Button>
      </div>
      <TokenHeader ativo={ativo} />
      <TokenNavTabs ativo={ativo} />
    </Section>
  )
}

Ativo.layout = 'PagesLayout'

export default Ativo
