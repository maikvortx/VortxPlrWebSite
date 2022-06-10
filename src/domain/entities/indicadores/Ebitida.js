import FormatHelper from '../../../helpers/formatHelper'
import Desempenho from '../Desempenho'

export default class Ebitida {
  constructor(titulo, peso, resultado, bonificacao, bonificacaoAlvo) {
    this.titulo = titulo
    this.peso = peso
    this.bonificacao = bonificacao
    this.bonificacaoAlvo = bonificacaoAlvo
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
    if (this.desempenho.hasMinimoAceitavel()) {
      const [pontoInicial, pontoMedio, pontoMaximo] = this.getBonificacaoIndicador()
      
      if (this.desempenho.obtido == this.desempenho.aceitavel) return pontoInicial      
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

export function EbitidaFactory(bonificacaoAlvo) {
  const ebitida = Number.parseFloat(process.env.NEXT_PUBLIC_EBIIDA)
  return new Ebitida(
    'Ebitida',
    0.15,
    {
      aceitavel: 95.389,
      esperado: 102.469,
      excepcional: 109.549,
      obtido: ebitida
    },
    {
      minimo: 0.75,
      alvo: 1,
      maximo: 1.5
    },
    bonificacaoAlvo
  )
}
