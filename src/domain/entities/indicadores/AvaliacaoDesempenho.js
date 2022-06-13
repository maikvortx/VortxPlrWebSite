import FormatHelper from '../../../helpers/formatHelper'
import Desempenho from '../Desempenho'

export default class AvaliacaoDesempenho {
  constructor(
    titulo,
    peso,
    resultado,
    bonificacao,
    bonificacaoAlvo,
    multiploAvaliacao,
    atingimentoGatilhoGeral
  ) {
    this.titulo = titulo
    this.peso = peso
    this.bonificacao = bonificacao
    this.bonificacaoAlvo = bonificacaoAlvo
    this.multiploAvaliacao = multiploAvaliacao
    this.atingimentoGatilhoGeral = atingimentoGatilhoGeral
    this.desempenho = new Desempenho(resultado)
  }

  getBonificacaoIndicador() {
    const pontoMedio = this.peso * this.bonificacaoAlvo
    const pontoInicial = pontoMedio * this.bonificacao.minimo
    const pontoMaximo = pontoMedio * this.bonificacao.maximo
    return [pontoInicial, pontoMedio, pontoMaximo]
  }

  getResultadoObtido() {
    return this.desempenho.obtido
  }

  getValorPagamentoIndicador() {
    if (this.atingimentoGatilhoGeral) {
      const [pontoInicial, pontoMedio, pontoMaximo] = this.getBonificacaoIndicador()
      
      if (this.multiploAvaliacao < this.desempenho.aceitavel) return 0
      if (this.multiploAvaliacao === this.desempenho.aceitavel) return pontoInicial
      if (this.multiploAvaliacao <= this.desempenho.esperado) return (
        ((this.multiploAvaliacao - this.desempenho.aceitavel) /
          (this.desempenho.esperado - this.desempenho.aceitavel)) *
        (pontoMedio - pontoInicial) +
        pontoInicial
      )

      if (this.multiploAvaliacao >= this.desempenho.excepcional) return pontoMaximo

      return (
        ((this.multiploAvaliacao - this.desempenho.esperado) /
          (this.desempenho.excepcional - this.desempenho.esperado)) *
        (pontoMaximo - pontoMedio) +
        pontoMedio
      )
    }

    return 0
  }

  getFormattedValue() {
    return FormatHelper.formatCurrency(this.getValorPagamentoIndicador())
  }

}

export function AvaliacaoDesempenhoFactory(bonificacaoAlvo, multiploAvaliacao, atingimentoGatilhoGeral) {
  return new AvaliacaoDesempenho(
    'Avaliação de Desempenho',
    0.5,
    {
      aceitavel: 2.0,
      esperado: 2.7,
      excepcional: 3.4,
      obtido: multiploAvaliacao
    },
    {
      minimo: 0.5,
      alvo: 1,
      maximo: 1.5
    },
    bonificacaoAlvo,
    multiploAvaliacao,
    atingimentoGatilhoGeral
  )
}
