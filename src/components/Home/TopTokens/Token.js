import React from 'react'
import {
  TokenContent,
  SideContent,
  TokenInfo,
  TokenImage,
  TokenTitle,
  TokenContainer
} from './style'

const Token = ({ token, index }) => {
  return (
    <TokenContainer>
      <SideContent>
        <h3>{index + 1}</h3>
        <TokenImage src="./img/token-padrao.png" />
      </SideContent>
      <TokenContent>
        <TokenTitle>{token.ativo.nome}</TokenTitle>
        <TokenInfo>
          <p>
            <strong>Emissão:</strong> {token.ativo.emissao}
          </p>
          <p>
            <strong>Código TK:</strong> {token.ticker}
          </p>
          <p>
            <strong>Valor Base do ativo:</strong> {token.ativo.valorBaseDoAtivo}
          </p>
        </TokenInfo>
        <TokenInfo>
          <p>
            <strong>Série:</strong> {token.ativo.serie}
          </p>
          <p>
            <strong>Apelido:</strong> {token.nome}
          </p>
          <p>
            <strong>Remuneração:</strong> {token.remuneracao}
          </p>
        </TokenInfo>
      </TokenContent>
    </TokenContainer>
  )
}

export default Token
