import React, { useState, useEffect } from 'react'

function CalculadoraResultado({ resultado }) {
  const [calculadoraPu, setCalculadoraPu] = useState(resultado)

  useEffect(() => {
    setCalculadoraPu(resultado)
  }, [resultado])

  return (
    <div>
      {calculadoraPu.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Valor Nominal de Juros</th>
              <th>Valor Nominal de Amortização</th>
              <th>Dias úteis a Decorrer</th>
              <th>Fator de Desconto conforme a TIR</th>
              <th>Valor Descontado</th>
            </tr>
          </thead>
          <tbody>
            {calculadoraPu.map((data) => (
              <tr key="tabelaPU">
                <td key={data.vnjuros}> {data.vnjuros} </td>
                <td key={data.vnamort}> {data.vnamort} </td>
                <td key={data.diasuteis_ateevento}>
                  {' '}
                  {data.diasuteis_ateevento}{' '}
                </td>
                <td key={data.fator_txdescparc}> {data.fator_txdescparc} </td>
                <td key={data.eventodescontado}> {data.eventodescontado} </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Nenhuma informação encontrada </div>
      )}
    </div>
  )
}
export default CalculadoraResultado
