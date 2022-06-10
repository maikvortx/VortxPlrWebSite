import styled from 'styled-components'
import { CardContent, Typography } from '@mui/material'
import { Close, DensityMedium, SettingsApplications } from '@mui/icons-material'

export const ContainerCadastro = styled.div`
  position: absolute;
  top: 150px;
  width: 800px;
  @media only screen and (max-width: 920px) {
    width: 100%;
    margin-top: 40px;
  }
`

export const Formulario = styled.form`
  /* padding-bottom: 50px; */
`

export const CardFormulario = styled(CardContent)`
  padding: 40px !important;
  /* height: 400px; */
`

export const MensagemCadastroSucesso = styled.div`
  text-align: center;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    font-size: 32px;
    margin-top: 120px;
    margin-bottom: 50px;
  }

  p {
    font-size: 18px;
    line-height: 1.8rem;
    margin-bottom: 20px;
  }
`

export const HeaderFomulario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const IndicadoresIcon = styled(DensityMedium)`
  cursor: pointer;
`

export const CloseIcon = styled(Close)`
  cursor: pointer;
`

export const TituloFormulario = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.8em;
  margin-bottom: 15px;
  font-weight: 700;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`