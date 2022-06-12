import React, { useState } from 'react'
import remuneracaoCargos from '../../../domain/entities/RemuneracaoCargo'
import { EbitidaFactory } from '../../../domain/entities/indicadores/Ebitida'
import FormularioCalculoBonus from '../../FormularioCalculoBonus'
import { useModal } from '../../Modal/Modal'
import ResultadoPLR from '../../ResultadoPLR'

import {
  BannerContainer,
  Background,
  Text,
  Title,
  SectionBanner
} from './style'
import RemuneracaoCargo from '../../../domain/entities/RemuneracaoCargo'
import { AvaliacaoDesempenhoFactory } from '../../../domain/entities/indicadores/AvaliacaoDesempenho'
import { NPSFactory } from '../../../domain/entities/indicadores/NPS'
import { ReceitaBrutaFactory } from '../../../domain/entities/indicadores/ReceitaBruta'
import { toast } from 'react-nextjs-toast'

const Banner = () => {
  const { setModal } = useModal()
  const [indicadores, setIndicadores] = useState([])
  const [salarioBase, setSalarioBase] = useState(0)
  const [multiploSalarioAnual, setMultiploSalarioAnual] = useState(0)

  const handleModal = () => {
    setModal({
      title: `Seu resultado`,
      body: <ResultadoPLR salarioBase={salarioBase} indicadores={indicadores} multiploSalarioAnual={multiploSalarioAnual} />
    })
  }

  const onCalcularPlr = (calculoInput) => {
    try {
      const { multiplo_salario_anual, nivel, salario_base, obtidoEbitida, obitidoReceitaBruta, obitidoNps } = calculoInput

      const salario = Number.parseFloat(salario_base)
      const multiploSalario = Number.parseFloat(multiplo_salario_anual)
      const valorEbitida = Number.parseFloat(obtidoEbitida)
      const valorReceitaBruta = Number.parseFloat(obitidoReceitaBruta)
      const valorNps = Number.parseFloat(obitidoNps)

      const remuneracaoCargo = new RemuneracaoCargo(nivel)
      const bonificacaoAlvo = remuneracaoCargo.calcularBonusAlvo(salario, nivel)

      const ebitida = EbitidaFactory(bonificacaoAlvo, valorEbitida)
      const atingimentoGatilhoGeral = !(ebitida.getValorPagamentoIndicador() === 0)
      const avaliacaoDesempenho = AvaliacaoDesempenhoFactory(bonificacaoAlvo, multiploSalario, atingimentoGatilhoGeral)
      const nps = NPSFactory(bonificacaoAlvo, atingimentoGatilhoGeral, valorNps)
      const receitaBruta = ReceitaBrutaFactory(bonificacaoAlvo, atingimentoGatilhoGeral, valorReceitaBruta)

      setSalarioBase(salario)
      setIndicadores([ebitida, avaliacaoDesempenho, nps, receitaBruta])
      setMultiploSalarioAnual(multiploSalario)

      handleModal()
      debugger
    } catch (error) {
      console.error(error)
      toast.notify(
        'Houve um erro ao realizar o calculo da PLR. Tente novamente mais tarde!',
        {
          type: 'error'
        }
      )
    }
  }

  return (
    <BannerContainer>
      <Background>
        <SectionBanner>
          {/* <Slogan /> */}
          {/* <Title>PLR 2022</Title> */}
          {/* <Text>O programa de PLR da Vórtx mudou e mudou pra melhor!</Text> */}
          <FormularioCalculoBonus onCalcularPlr={onCalcularPlr} indicadores={indicadores} />
        </SectionBanner>
      </Background>
    </BannerContainer>
  )
}

export default Banner
