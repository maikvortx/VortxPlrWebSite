import React from 'react'
import Grafico from './Grafico'
import { DashboardContainer, DashboardGrid } from './style'

export default function Dashboard({ ativo }) {
  return (
    <DashboardContainer>
      <DashboardGrid container>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Remuneração</h3>
          <p>{ativo.remuneracao}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Data de emissão</h3>
          <p>{ativo.dataEmissao}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Data de vencimento</h3>
          <p>{ativo.dataVencimento}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Volume emitido</h3>
          <p>{ativo.emissao}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Lastro</h3>
          <p>{ativo.lastro}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Distribuição</h3>
          <p>{ativo.distribuicao}</p>
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={1.5}>
          <h3>Rating</h3>
          <p>{ativo.rating}</p>
        </DashboardGrid>
      </DashboardGrid>

      <DashboardGrid container spacing={5}>
        <DashboardGrid item xs={12} md={12} lg={6}>
          <Grafico />
        </DashboardGrid>
        <DashboardGrid item xs={12} md={12} lg={4}>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Quantidade Emitida: </strong>
              1.000.000
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>PU de Emissão: </strong>
              R$ 1000
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Pagamento de Juros: </strong>
              {ativo.periodoPagamentoJuros}
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Amortização: </strong>
              {ativo.periodoAmortizacao}
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Data Primeira Integralização: </strong>
              {new Date(ativo.primeiraIntegralizacao).toLocaleDateString()}
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Início Rentabilidade: </strong>
              {ativo.inicioRentabilidade ? ativo.inicioRentabilidade : '-'}
            </p>
          </DashboardGrid>
          <DashboardGrid item xs={12} md={12} lg={12}>
            <p>
              <strong>Risco: </strong>
              {ativo.fatorDeRisco}
            </p>
          </DashboardGrid>
        </DashboardGrid>
      </DashboardGrid>
    </DashboardContainer>
  )
}
