const Indicadores = [
  {
    indicador: 'Ebitida',
    peso: 0.15,
    resultado: {
      aceitavel: 95.389,
      esperado: 102.469,
      excepcional: 109.549,
      obtido: 95.389
    },
    bonificacao: {
      minimo: 0.75,
      alvo: 1,
      maximo: 1.5
    }
  },
  {
    indicador: 'Receita Bruta',
    peso: 0.15,
    resultado: {
      aceitavel: 187.486,
      esperado: 201.455,
      excepcional: 215.425,
      obtido: 187.486
    },
    bonificacao: {
      minimo: 0.75,
      alvo: 1,
      maximo: 2
    }
  },
  {
    indicador: 'NPS',
    peso: 0.2,
    resultado: {
      aceitavel: null,
      esperado: 30,
      excepcional: 51,
      obtido: 30
    },
    bonificacao: {
      minimo: 0.5,
      alvo: 1,
      maximo: 1.5
    }
  },
  {
    indicador: 'Avaliação de Desempenho',
    peso: 0.5,
    resultado: {
      aceitavel: 2.0,
      esperado: 2.7,
      excepcional: 3.4,
      obtido: 2.7
    },
    bonificacao: {
      minimo: 0.5,
      alvo: 1,
      maximo: 1.5
    }
  }
]
export default Indicadores
