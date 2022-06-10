import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Config from '../../../config/Config'
import { InsertDriveFile } from '@mui/icons-material'
import {
  Section,
  DocumentosContainer,
  Categorias,
  CategoriaTitle,
  Documento,
  DocumentoNome,
  ExpandirBotao
} from './style'

export default function Documentos() {
  const [documentos, setDocumentos] = useState([])

  useEffect(() => {
    axios
      .get(`${Config.URL_API}/api/operacao/86/documentos-por-tipo`)
      .then((response) => response.data)
      .then((data) => {
        setDocumentos(Object.values(data))
      })
  }, [])
  return (
    <Section>
      {documentos.map(({ documents, type }, i) => (
        <DocumentosContainer key={i} disableGutters elevation={0}>
          <Categorias key={i} id="categorias-documentos">
            <CategoriaTitle>
              {type} <ExpandirBotao>+</ExpandirBotao>
            </CategoriaTitle>
          </Categorias>
          <Documento id={`documentos-${type}`}>
            {documents.map((documents, j) => (
              <a
                href={documents.url}
                target="_blank"
                rel="nofollow noreferrer"
                key={j}
              >
                <DocumentoNome>
                  <InsertDriveFile /> {documents.description}
                </DocumentoNome>
              </a>
            ))}
          </Documento>
        </DocumentosContainer>
      ))}
    </Section>
  )
}
