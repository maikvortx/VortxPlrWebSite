import React, { useRef, useEffect, useState } from 'react'
import { NavLink as Link } from "react-router-dom";

import NoData from '../NoData'
import {
  CardToken,
  CardTokenHeader,
  CardTokenDivider,
  CardTokenBody,
  LaminaButton,
  TokensContainer,
  TokensHeader,
  Mercado,
  MercadoButton
} from './style'
import GridContainer from '../GridContainer'
import GridItem from '../GridItem'
import { Container } from '../Container'
import Dropdown from '../Dropdown'
import { GetApp } from '@mui/icons-material'

import { EMISSOR } from '../../domain/valueObjects/TipoParteEnum'
import { MercadoEnum, TipoAtivoEnum } from '../../domain/valueObjects'

import { useQuery } from '@apollo/client'

import Loading from '../Loading/Loading'
import { BUSCAR_TOKENS } from '../../services/graphql/token/tokenService'
import Config from '../../config/Config'

const QUANTIDADE_POR_PAGINA = 10
const retornaNomeParte = (partes, tipoParte) =>
  partes.find((parte) => parte?.tipoParte?.id === tipoParte)?.empresa?.nome

const { baseURL, operacao } = Config.URL_SITE_VORTX
export default function GridTokens() {
  const loaderRef = useRef(null)
  const [pagina, setPagina] = useState(0)
  const [total, setTotal] = useState(0)
  const [tipoAtivo, setTipoAtivo] = useState('')
  const [tokens, setTokens] = useState([])
  const [mercado, setMercado] = useState('')
  const [isIntersecting, setIntersecting] = useState(false)

  const { data, loading } = useQuery(BUSCAR_TOKENS, {
    variables: {
      pagina,
      quantidadePorPagina: QUANTIDADE_POR_PAGINA,
      tipoAtivo: tipoAtivo !== 'todos' ? tipoAtivo : '',
      inativo: false,
      disponivelParaNegociacao: true,
      isMercadoPrimario: mercado
        ? mercado === MercadoEnum.PRIMARIO
          ? true
          : false
        : undefined
    }
  })

  useEffect(() => {
    if (!loaderRef || !loaderRef.current) {
      return
    }

    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0]
      if (target.isIntersecting) {
        setIntersecting(true)
      } else {
        setIntersecting(false)
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [loaderRef])

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
      setTotal(data?.buscarTokens?.total ? data?.buscarTokens?.total : 0)
    }
  }, [data])

  useEffect(() => {
    if (isIntersecting) {
      if (total !== 0 && (pagina + 1) * QUANTIDADE_POR_PAGINA < total) {
        setPagina((oldPagina) => oldPagina + 1)
      }
    }
  }, [isIntersecting])

  return (
    <>
      {loading ? (
        <Loading size={100} />
      ) : (
        <Container>
          <TokensContainer>
            <TokensHeader>
              <div>
                <h2>Tokens disponíveis</h2>
              </div>

              <Dropdown
                options={[
                  {
                    label: 'Todos',
                    value: 'todos'
                  },
                  {
                    label: 'Cotas de Fundo',
                    value: TipoAtivoEnum.COTA_FI
                  },
                  {
                    label: 'Debênture',
                    value: TipoAtivoEnum.DEBENTURE
                  }
                ]}
                placeholder="Tipo de ativo"
                value={tipoAtivo}
                onChange={(value) => {
                  if (!tipoAtivo && value === 'todos') {
                    setTipoAtivo(value)
                    return
                  }

                  setTokens([])
                  setTotal(0)
                  setPagina(0)
                  setTipoAtivo(value)
                }}
              />

              <Mercado>
                <MercadoButton
                  selected={mercado === MercadoEnum.PRIMARIO}
                  onClick={() => {
                    if (mercado !== MercadoEnum.PRIMARIO) {
                      setTokens([])
                      setTotal(0)
                      setPagina(0)
                      setMercado(MercadoEnum.PRIMARIO)
                    }
                  }}
                >
                  Primário
                </MercadoButton>
                <MercadoButton
                  selected={mercado === MercadoEnum.SECUNDARIO}
                  onClick={() => {
                    if (mercado !== MercadoEnum.SECUNDARIO) {
                      setTokens([])
                      setTotal(0)
                      setPagina(0)
                      setMercado(MercadoEnum.SECUNDARIO)
                    }
                  }}
                >
                  Secundário
                </MercadoButton>
              </Mercado>
            </TokensHeader>

            {!tokens.length ? (
              <NoData />
            ) : (
              <GridContainer>
                {tokens.map((token) => {
                  return (
                    <GridItem xs={12} sm={6} md={4} lg={3} key={token.isin}>
                      <CardToken>
                        <div>
                          <LaminaButton
                            variant="outlined"
                            color="outlined"
                            onClick={() => console.log('Baixar lamina')}
                          >
                            <GetApp className="icon" />
                            <Link href="/cadastro">Lâmina</Link>
                          </LaminaButton>
                        </div>
                        <CardTokenHeader>
                          <img
                            src={'/img/token-padrao.png'}
                            alt={token.nome}
                            title={token.nome}
                          />
                          <h3>{token?.nome}</h3>
                        </CardTokenHeader>

                        <CardTokenDivider />

                        <CardTokenBody>
                          <CardTokenBody.Info>
                            <p>
                              <strong>Emissão:</strong> {token?.ativo?.emissao}
                            </p>
                            <p>
                              <strong>Série:</strong> {token?.ativo?.serie}
                            </p>
                            <p>
                              <strong>Código TK:</strong> {token?.ticker}
                            </p>
                            <p>
                              <strong>Apelido:</strong> {token?.ativo?.nome}
                            </p>
                            <p>
                              <strong>Valor de Emissão (Un):</strong> R$ 1000,00
                            </p>
                            <p>
                              <strong>Remuneração:</strong> xxxx
                            </p>
                          </CardTokenBody.Info>

                          <CardTokenBody.ComprarButton
                            variant="outlined"
                            color="outlined"
                          >
                            <Link href="/cadastro">Comprar</Link>
                          </CardTokenBody.ComprarButton>

                          {token.tipoAtivo === 'Debênture' && (
                            <CardTokenBody.SaberMaisButton>
                              <Link
                                href={`${baseURL}${operacao}${token.id}`}
                                target="_blank"
                              >
                                Saber mais
                              </Link>
                            </CardTokenBody.SaberMaisButton>
                          )}
                        </CardTokenBody>
                      </CardToken>
                    </GridItem>
                  )
                })}
              </GridContainer>
            )}
          </TokensContainer>
          <div ref={loaderRef} />
        </Container>
      )}
    </>
  )
}
