import TipoNivel from '../valueObjects/TipoNivel'

export default class RemuneracaoCargo {
  constructor(nivel) {
    this.niveisRemuneracao = new Map()

    this.niveisRemuneracao.set(TipoNivel.HEAD_ESTRATEGICO, 9)
    this.niveisRemuneracao.set(TipoNivel.HEAD, 6)
    this.niveisRemuneracao.set(TipoNivel.SPECIALIST_II, 6)
    this.niveisRemuneracao.set(TipoNivel.TEAM_LEADER, 4.5)
    this.niveisRemuneracao.set(TipoNivel.SPECIALIST_I, 4.5)
    this.niveisRemuneracao.set(TipoNivel.PRO, 3.5)
    this.niveisRemuneracao.set(TipoNivel.DEMAIS_NIVEIS, 3.5)
  }

  calcularBonusAlvo(salarioBase, nivel) {
    const alvo = this.niveisRemuneracao.get(nivel) || 0
    const bonificacaoAlvo = salarioBase * alvo
    return bonificacaoAlvo
  }
}
