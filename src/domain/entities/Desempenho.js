export default class Desempenho {
  constructor({ aceitavel, esperado, excepcional, obtido }) {
    this.aceitavel = aceitavel
    this.esperado = esperado
    this.excepcional = excepcional
    this.obtido = obtido
  }

  hasMinimoAceitavel() {
    return this.obtido >= this.aceitavel
  }
}
