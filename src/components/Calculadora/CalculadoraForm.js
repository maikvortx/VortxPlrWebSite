import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, FormType, FormSelector, Row } from './style'
import { TextField } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker } from '@mui/lab'
import Config from '../../config/Config'

import Button from '../../components/Buttons/Button'
import Emissoras from './AutoComplete/Emissoras'
import Ativos from './AutoComplete/Ativos'

function CalculadoraForm({ setResultado }) {
  const [calcular, setCalcular] = useState('tir')
  const [dataCompra, setDataCompra] = useState('')
  const [ativos, setAtivos] = useState([])
  const [emissoras, setEmissoras] = useState([])
  const [tircompra, setTircompra] = useState('')
  const [pucompra, setPUcompra] = useState('')
  const [codatvbase, setCodatvbase] = useState('')
  const [value, setValue] = useState(null)

  const selectEmissora = (emissora) => {
    setValue(emissora)
    if (emissora) {
      axios
        .get(
          `${Config.URL_VXINFORMA}/WsSite/OperacoesEmissora.php?cnpj=${emissora.cnpj}`
        )
        .then((response) => response.data)
        .then((data) => {
          setAtivos(data.data)
        })
    }
  }

  const selectAtivo = (ativo) => {
    setCodatvbase(ativo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: `/api/calculadora`,
      data: {
        datacompra: dataCompra,
        codatvbase: codatvbase,
        TIRcompra: tircompra,
        PUcompra: pucompra
      }
    }).then((response) => {
      setResultado(response.data)
    })
  }

  useEffect(() => {
    axios
      .get(`${Config.URL_VXINFORMA}/WsSite/ListarEmissoras.php`)
      .then((response) => response.data)
      .then((data) => {
        setEmissoras(data.data)
      })
  }, [])

  return (
    <Form
      method="POST"
      action="/send"
      id="calculator_form"
      onSubmit={handleSubmit}
    >
      <FormType>
        <FormSelector
          id="tir"
          className={calcular == 'tir' ? 'selected' : ''}
          onClick={(e) => setCalcular(e.currentTarget.id)}
        >
          Taxa
        </FormSelector>
        <FormSelector
          id="pu"
          className={calcular == 'pu' ? 'selected' : ''}
          onClick={(e) => setCalcular(e.currentTarget.id)}
        >
          Preço único
        </FormSelector>
      </FormType>
      <div>
        <p>Selecione a emissora</p>
        <Emissoras
          options={emissoras}
          value={value}
          onChange={(valorSelecionado) => selectEmissora(valorSelecionado)}
          key="comboBox-Emissoras"
        />
        {ativos.length > 0 && (
          <>
            <p>Selecione um token</p>
            <Ativos
              options={ativos}
              value={codatvbase}
              onChange={(valorSelecionado) => selectAtivo(valorSelecionado)}
              key="comboBox-Ativos"
            />
          </>
        )}
        <Row>
          <div>
            <p>Data da compra</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                placeholder="DD/MM/AAAA"
                value={dataCompra}
                inputFormat="dd-MM-yyyy"
                style={{ border: 'unset' }}
                onChange={(newValue) => {
                  setDataCompra(newValue.toISOString().slice(0, 10))
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </div>
          {calcular == 'pu' && (
            <div>
              <p>Taxa da compra</p>
              <TextField
                type="number"
                name="tircompra"
                id="tircompra"
                placeholder="0.10%"
                size="small"
                onChange={(e) => setTircompra(e.target.value)}
              />
            </div>
          )}
          {calcular == 'tir' && (
            <div>
              <p>Preço da compra</p>
              <TextField
                type="number"
                name="pucompra"
                id="pucompra"
                placeholder="R$ 1.000,00"
                size="small"
                onChange={(e) => setPUcompra(e.target.value)}
              />
            </div>
          )}
          <div>
            <Button
              type="submit"
              name="send"
              id="submit_calculator"
              color="outlined"
            >
              Calcular
            </Button>
          </div>
        </Row>
      </div>
    </Form>
  )
}
export default CalculadoraForm
