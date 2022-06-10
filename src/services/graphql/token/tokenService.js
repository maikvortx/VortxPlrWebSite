import { gql } from '@apollo/client'

export const BUSCAR_TOKENS = gql`
  query buscarTokens(
    $pagina: Float
    $quantidadePorPagina: Float
    $tipoAtivo: String
    $isMercadoPrimario: Boolean
    $disponivelParaOferta: Boolean
    $disponivelParaNegociacao: Boolean
    $inativo: Boolean
  ) {
    buscarTokens(
      pagina: $pagina
      quantidadePorPagina: $quantidadePorPagina
      tipoAtivo: $tipoAtivo
      isMercadoPrimario: $isMercadoPrimario
      disponivelParaOferta: $disponivelParaOferta
      disponivelParaNegociacao: $disponivelParaNegociacao
      inativo: $inativo
    ) {
      total
      data {
        id
        nome
        isin
        ticker
        tipoAtivo
        isMercadoSecundario
        ativo {
          id
          nome
          dataEmissao
          dataVencimento
          serie
          emissao
          codigoIsin
          partes {
            id
            tipoParte {
              id
              nome
            }
            cnpj
            empresa {
              cnpj
              nome
            }
          }
        }
      }
    }
  }
`
