import React from 'react'

import { Titulo } from './styles'

function TituloTransparente({ titulo }) {
  return (
    <Titulo>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="72"
        viewBox="0 0 700 72"
      >
        <text x="0" y="70">
          {titulo}
        </text>
      </svg>
    </Titulo>
  )
}

export default TituloTransparente
