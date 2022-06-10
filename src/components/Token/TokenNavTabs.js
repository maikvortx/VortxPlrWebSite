/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tabs, Tab } from '@mui/material'
import Config from '../../config/Config'
import Dashboard from './Dashboard'
import { TabsMenu } from './style'
import Detalhes from './Detalhes'
import FatosRelevantes from './FatosRelevantes'
import Documentos from './Documentos'

export default function TokenNavTabs({ ativo }) {
  const [value, setValue] = useState(0)
  const [summary, setSummary] = useState({})
  const [coverages, setCoverages] = useState([])
  const [operationRating, setOperationRating] = useState({
    isRatingNotApply: false,
    ratings: []
  })

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  const operationDataId = 86
  useEffect(() => {
    axios
      .get(`${Config.URL_API}/api/operacao/${operationDataId}/resumo`)
      .then((response) => response.data)
      .then((data) => setSummary(data))

    axios
      .get(`${Config.URL_API}/api/operacao/${operationDataId}/lastro`)
      .then((response) => response.data)
      .then((data) => data.coverage)
      .then((coverages) => setCoverages(coverages))

    axios
      .get(`${Config.URL_API}/api/operacao/${operationDataId}/rating`)
      .then((response) => response.data)
      .then((data) => data.operationRating)
      .then((operationRating) => setOperationRating(operationRating))
  }, [])

  function resolvePage(index) {
    const painel = []
    painel[0] = <Dashboard ativo={ativo} id="Dashboard" />
    painel[1] = <Detalhes ativo={ativo} id="Detalhes" />
    painel[2] = <FatosRelevantes ativo={ativo} id="Fatos-Relevante" />
    painel[3] = <Documentos id="Documentos" />

    return painel[index]
  }
  return (
    <>
      <TabsMenu>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Dashboard" />
          <Tab label="Fatos Relevantes" />
          <Tab label="Detalhes" />
          <Tab label="Documentos" />
        </Tabs>
      </TabsMenu>
      {resolvePage(value)}
    </>
  )
}
