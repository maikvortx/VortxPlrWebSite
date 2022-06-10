import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Input from '../Input/Input'
import Button from '../Buttons/Button'
import GridItem from '../GridItem'
import GridContainer from '../GridContainer'
import Dropdown from '../Dropdown'
import InputLabel from '../InputLabel'
import { Card, Typography } from '@mui/material'
import listaNiveis from './listaNiveis'
import { FormularioCadastroSchema, useGotuValidationResolver } from './schema'

import {
  Formulario,
  CardFormulario,
  ContainerCadastro,
  TituloFormulario,
  HeaderFomulario,
  IndicadoresIcon,
} from './styles'

export default function FormularioCalculoBonus({ onCalcularPlr, indicadores }) {
  const [nivel, setNivel] = useState('Pro')
  const [showIndicadores, setShowIndicadores] = useState(false)

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid }
  } = useForm({
    // resolver: useGotuValidationResolver(FormularioCadastroSchema),
    mode: 'onChange'
  })

  const onSubmit = async () => {
    const values = getValues()
    onCalcularPlr(values)
  }


  return (
    <ContainerCadastro onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardFormulario>
          <Formulario>
            {(
              <>
                <HeaderFomulario>
                  <TituloFormulario>
                    Seus dados
                  </TituloFormulario>
                </HeaderFomulario>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>Nível*</InputLabel>
                    <Controller
                      defaultValue={nivel}
                      name="nivel"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Dropdown
                          id="nivel"
                          error={Boolean(errors?.nivel?.message)}
                          errorMessage={errors?.nivel?.message}
                          value={value}
                          onChange={(value) => {
                            setValue('salario_base', '')
                            setNivel(value)
                            onChange(value)
                          }}
                          options={listaNiveis?.map((option) => ({
                            label: option.nome,
                            value: option.id
                          }))}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>Salário Base*</InputLabel>
                    <Controller
                      defaultValue={''}
                      name="salario_base"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="salario_base"
                          type="number"
                          error={Boolean(errors?.salario_base?.message)}
                          errorMessage={errors?.salario_base?.message}
                          value={value}
                          inputProps={{
                            placeholder: ``,
                            onChange: (e) => onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>Nota Avaliação*</InputLabel>
                    <Controller
                      defaultValue={''}
                      name="multiplo_salario_anual"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="multiplo_salario_anual"
                          type="number"
                          error={Boolean(errors?.multiplo_salario_anual?.message)}
                          errorMessage={errors?.multiplo_salario_anual?.message}
                          value={value}
                          inputProps={{
                            placeholder: '',
                            onChange: (e) => onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <HeaderFomulario>
                  <TituloFormulario>
                    Indicadores
                  </TituloFormulario>
                </HeaderFomulario>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>Ebitida</InputLabel>
                    <Controller
                      defaultValue={''}
                      name="ebitida"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="ebitida"
                          type="number"
                          error={Boolean(errors?.ebitida?.message)}
                          errorMessage={errors?.ebitida?.message}
                          value={value}
                          inputProps={{
                            placeholder: ``,
                            onChange: (e) => onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>Receita Bruta*</InputLabel>
                    <Controller
                      defaultValue={''}
                      name="receitaBruta"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="receitaBruta"
                          type="number"
                          error={Boolean(errors?.receitaBruta?.message)}
                          errorMessage={errors?.receitaBruta?.message}
                          value={value}
                          inputProps={{
                            placeholder: '',
                            onChange: (e) => onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <InputLabel>NPS*</InputLabel>
                    <Controller
                      defaultValue={''}
                      name="nps"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="nps"
                          type="number"
                          error={Boolean(errors?.nps?.message)}
                          errorMessage={errors?.nps?.message}
                          value={value}
                          inputProps={{
                            placeholder: '',
                            onChange: (e) => onChange(e.target.value)
                          }}
                        />
                      )}
                    />
                  </GridItem>
                </GridContainer>
              </>
            )}

            <Button
              color="primary"
              disabled={!isDirty || !isValid}
              block
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Calcular!
            </Button>
          </Formulario>
        </CardFormulario>
      </Card>
    </ContainerCadastro>
  )
}