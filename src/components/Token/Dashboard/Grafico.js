import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import Config from '../../../config/Config'
import FormatHelper from '../../../helpers/formatHelper'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function Grafico() {
  const [historicoPu, setHistoricoPu] = useState([])
  const [dataPoints] = useState([])
  const [labels] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ])

  const mapHistoricoPU = (unitPrice) => {
    return {
      data: FormatHelper.formatDate(unitPrice.paymentDate),
      valorNominal: FormatHelper.formatUnitPrice(unitPrice.nominalValue),
      juros: FormatHelper.formatUnitPrice(unitPrice.interestValue),
      pagJuros: FormatHelper.formatUnitPrice(unitPrice.interest),
      pagAmort: FormatHelper.formatUnitPrice(unitPrice.amortization),
      pagTot: FormatHelper.formatNumericValueDecimals(unitPrice.total, 2, 2),
      pu: FormatHelper.formatUnitPrice(unitPrice.unitPriceFull)
    }
  }

  useEffect(() => {
    axios
      .get(
        `${Config.URL_API}/api/operacao/86/preco-unitario/historico-pagamentos`
      )
      .then((response) => response.data)
      .then((response) => {
        if (!response.success) return

        const historico = response.unitPrices.map(mapHistoricoPU)
        setHistoricoPu(historico)
      })
  }, [])

  if (historicoPu) {
    historicoPu.forEach((element) => {
      const data = element.data
      const pu = element.pu
      const puFloat = parseFloat(pu.replace('.', '').replace(',', '.'))
      dataPoints.push(puFloat)
      labels.push(data)
    })
  } else {
    ;('-')
  }

  let lastPu = dataPoints.slice(Math.max(dataPoints.length - 30, 0))
  let lastLabels = labels.slice(Math.max(labels.length - 30, 0))

  const data = {
    labels: lastLabels,
    datasets: [
      {
        label: 'Preço Unitário',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(203,30,37,0.4)',
        borderColor: 'rgba(203,30,37,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(203,30,37,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(255,255,255,1)',
        pointHoverBorderColor: 'rgba(203,30,37,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: lastPu
      }
    ]
  }
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false
      }
    }
  }
  return (
    <div className="m-chart">
      <h4>Preço Unitário - R$</h4>
      <Line data={data} options={options} />
    </div>
  )
}
