import React, { useEffect, useState } from 'react'
import { NavLink as Link } from "react-router-dom"
import { Grid } from '@mui/material'
import Token from './Token'
import { Section, Header, Title, Container, LinkButton } from './style'
import Button from '../../../components/Buttons/Button'
import { EMISSOR } from '../../../domain/valueObjects/TipoParteEnum'

import { useQuery } from '@apollo/client'

import { BUSCAR_TOKENS } from '../../../services/graphql/token/tokenService'

const QUANTIDADE_POR_PAGINA = 4
const retornaNomeParte = (partes, tipoParte) =>
  partes.find((parte) => parte?.tipoParte?.id === tipoParte)?.empresa?.nome

function TopTokens() {
  const [tokens, setTokens] = useState()

  const { data } = useQuery(BUSCAR_TOKENS, {
    variables: {
      pagina: 0,
      quantidadePorPagina: QUANTIDADE_POR_PAGINA,
      tipoAtivo: '',
      inativo: false,
      disponivelParaNegociacao: true
    }
  })

  useEffect(() => {
    if (data?.buscarTokens?.data) {
      setTokens((oldTokens) => [
        ...oldTokens,
        ...data.buscarTokens.data.map((token) => ({
          ticker: token?.ticker,
          nome: token?.nome,
          serie: token?.ativo?.serie,
          emissao: token?.ativo?.emissao,
          emissor: token?.ativo?.partes
            ? retornaNomeParte(token?.ativo?.partes, EMISSOR)
            : '',
          isin: token?.isin,
          id: token?.id
        }))
      ])
    }
  }, [data])

  return (
    <>
      {tokens && tokens.length && (
        <Section>
          <Header>
            <Title>
              Top tokens <br /> disponíveis
            </Title>
            <Button simple color="white">
              <Link href="/tokens">
                <LinkButton>Ver todos</LinkButton>
              </Link>
            </Button>
          </Header>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Container>
                {tokens.map((token, index) => (
                  <Token token={token} index={index} key={index} />
                ))}
              </Container>
            </Grid>
          </Grid>
        </Section>
      )}
    </>
  )
}

export default TopTokens
