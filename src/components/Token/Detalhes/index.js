import React, { useState } from 'react'
import Config from '../../../config/Config'

export default function Detalhes() {
  const [flowChart] = useState([])

  return (
    <div>
      {flowChart ? (
        <img
          style={{ width: '100%' }}
          // src={`${Config.URL_VXINFORMA}/${operacao.operation.flowChart}`}
          src={`${Config.URL_VXINFORMA}/86`}
        />
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </div>
  )
}
