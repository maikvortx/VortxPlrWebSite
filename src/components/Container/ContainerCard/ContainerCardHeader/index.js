import React from 'react'

import { StyledContainerCardHeader } from './styles'

function ContainerCardHeader({ children, divider }) {
  return (
    <>
      <StyledContainerCardHeader>{children}</StyledContainerCardHeader>
      {divider && <StyledContainerCardHeader.Divider />}
    </>
  )
}

export default ContainerCardHeader
