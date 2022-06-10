/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from '../../../config/Config'
import FormatHelper from '../../../helpers/formatHelper'
import { GetApp } from '@mui/icons-material'
import { Table, TableRow, NoDataCell } from './style'

export default function FatosRelevantes() {
  const [fatosRelevantes, setFatosRelevantes] = useState([])

  useEffect(() => {
    axios
      .get(`${Config.URL_API}/api/operacao/86/fatos-relevantes`)
      .then((response) => response.data)
      .then((data) => {
        setFatosRelevantes(data.relevantFacts)
      })
  }, [])

  return (
    <Table id="tabela-fatos">
      <thead>
        <tr>
          <th id="emissor">Data</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Documento</th>
        </tr>
      </thead>
      <tbody>
        {fatosRelevantes && fatosRelevantes.length > 0 ? (
          fatosRelevantes.map(
            (
              {
                referenceDate: dataReferencia,
                title: titulo,
                description: descricao,
                files: arquivos
              },
              idx
            ) => (
              <TableRow>
                <td key={idx}>{FormatHelper.formatDate(dataReferencia)}</td>
                <td key={idx}>{titulo}</td>
                <td key={idx}>{descricao}</td>
                <td>
                  {arquivos &&
                    arquivos.map((arquivos) => (
                      <a
                        href={arquivos}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <GetApp /> Download{' '}
                      </a>
                    ))}
                </td>
              </TableRow>
            )
          )
        ) : (
          <NoDataCell colSpan="4">
            <p>Nenhum registro encontrado</p>
          </NoDataCell>
        )}
      </tbody>
    </Table>
  )
}
