import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import FormatHelper from '../../helpers/formatHelper'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Container, Section, BonificacaoItem, ProgressContainer } from './style'

const ResultadoPLR = ({
    indicadores,
    salarioBase,
    multiploSalarioAnual
}) => {

    const [bonificacaoFinal, setBonificacaoFinal] = useState(0)
    const [quantidadeSalarios, setQuantidadeSalarios] = useState(0)
    const [percentualRelacaoAlvo, setPercentualRelacaoAlvo] = useState(0)

    useEffect(() => {
        debugger
        if (indicadores && indicadores.length) {
            let valorFinal = 0
            indicadores.forEach(indicador => valorFinal += indicador.getValorPagamentoIndicador())
            setBonificacaoFinal(valorFinal)
            setQuantidadeSalarios((valorFinal / salarioBase).toFixed(1))
            setPercentualRelacaoAlvo((valorFinal / salarioBase) / multiploSalarioAnual)
        }
    }, [indicadores])


    const CircularChart = ({ currentValue, minValue, maxValue, text, pathColor }) => {
        debugger
        return (
            <>
                <CircularProgressbar
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        textSize: '12px',
                        pathTransitionDuration: 0.5,
                        pathColor: pathColor,
                        textColor: '#666',
                        trailColor: '#d6d6d6',
                    })}
                    value={currentValue}
                    minValue={minValue}
                    maxValue={maxValue}
                    text={text} />
            </>
        )
    }

    return (
        <>
            <Container>
                <Section>
                    <Grid container spacing={2}>
                        {indicadores.map((indicador, index) => {
                            const [pontoInicial, pontoMedio, pontoMaximo] = indicador.getBonificacaoIndicador()
                            return (
                                <>
                                    <Grid item xs={3}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6" component="div">
                                                    {indicador.titulo}
                                                </Typography>
                                                <ProgressContainer>
                                                    <CircularChart
                                                        pathColor={'#c12c2c'}
                                                        currentValue={indicador.getValorPagamentoIndicador()}
                                                        minValue={pontoInicial}
                                                        maxValue={pontoMaximo}
                                                        text={indicador.getFormattedValue()} />
                                                </ProgressContainer>
                                                <Typography style={{ marginBottom: '1.3em' }} variant="h6" component="div">
                                                    Bonificação
                                                </Typography>
                                                <BonificacaoItem>
                                                    <p>Inicial</p>
                                                    <p>{FormatHelper.formatCurrency(pontoInicial)}</p>
                                                </BonificacaoItem>
                                                <BonificacaoItem>
                                                    <p>Médio</p>
                                                    <p>{FormatHelper.formatCurrency(pontoMedio)}</p>
                                                </BonificacaoItem>
                                                <BonificacaoItem>
                                                    <p>Máximo</p>
                                                    <p>{FormatHelper.formatCurrency(pontoMaximo)}</p>
                                                </BonificacaoItem>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Section>


                <Section>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Bonificação Final
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ fontSize: 18, paddingTop: 20 }}
                                    >
                                        {FormatHelper.formatCurrency(bonificacaoFinal)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Quantidade de Salários/Mês
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ fontSize: 18, paddingTop: 20 }}
                                    >
                                        {quantidadeSalarios}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        % em relação ao Alvo
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ fontSize: 18, paddingTop: 20 }}
                                    >
                                        {FormatHelper.formatPercent(percentualRelacaoAlvo)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Section>
            </Container>
        </>
    )
}

export default ResultadoPLR
