import FormatHelper from '../../../helpers/formatHelper'
import Desempenho from '../Desempenho'

export default class NPS {
  constructor(titulo, peso, resultado, bonificacao, bonificacaoAlvo, atingimentoGatilhoGeral) {
    this.titulo = titulo
    this.peso = peso
    this.bonificacao = bonificacao
    this.bonificacaoAlvo = bonificacaoAlvo
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
      
      if ((this.desempenho.obtido || 0) < this.desempenho.aceitavel) return 0
      if (this.desempenho.obtido === this.desempenho.aceitavel) return pontoInicial
      if (this.desempenho.obtido <= this.desempenho.esperado) return (
        ((this.desempenho.obtido - this.desempenho.aceitavel) /
          (this.desempenho.esperado - this.desempenho.aceitavel)) *
        (pontoMedio - pontoInicial) +
        pontoInicial
      )

      if (this.desempenho.obtido >= this.desempenho.excepcional) return pontoMaximo
      
      return (
        ((this.desempenho.obtido - this.desempenho.esperado) /
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

export function NPSFactory(bonificacaoAlvo, atingimentoGatilhoGeral, valorNps) {
  
  return new NPS(
    'NPS',
    0.2,
    {
      aceitavel: null,
      esperado: 30,
      excepcional: 51,
      obtido: valorNps
    },
    {
      minimo: 0.5,
      alvo: 1,
      maximo: 1.5
    },
    bonificacaoAlvo,
    atingimentoGatilhoGeral
  )
}
