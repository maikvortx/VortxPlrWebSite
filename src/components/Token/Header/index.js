import React from 'react'
import {
  HeaderContainer,
  TokenButtons,
  TokenInfo,
  TokenDescription,
  TokenImage,
  TokenTitle,
  DownloadLink,
  Icons
} from './style'
import { NavLink as Link } from "react-router-dom"
import Button from '../../Buttons/Button'
import { InsertDriveFile, GetApp } from '@mui/icons-material'

const TokenHeader = ({ ativo }) => {
  return (
    <HeaderContainer>
      <div>
        <TokenImage src="/img/token-padrao.png" />
        <TokenInfo>
          <TokenTitle>{ativo.nome}</TokenTitle>
          <TokenDescription>
            <p>
              {ativo.emissao} - {ativo.serie} - {ativo.codigoIsin}
            </p>
            <p>
              Número IF {ativo.numeroIF} | ISIN {ativo.codigoIsin}
            </p>
          </TokenDescription>
        </TokenInfo>
      </div>
      <TokenButtons>
        <DownloadLink href={ativo.documento} target="_blank">
          <Icons>
            <InsertDriveFile className="doc-icon" />
            <GetApp className="doc-download-icon" />
          </Icons>
          <p>Baixar relatório completo.pdf</p>
        </DownloadLink>
        <Button color="primary">
          <Link href="/cadastro">Comprar</Link>
        </Button>
      </TokenButtons>
    </HeaderContainer>
  )
}

export default TokenHeader
