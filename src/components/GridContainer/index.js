import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function GridContainer(props) {
  const { children, className, ...rest } = props
  return (
    <Container container {...rest} className={className}>
      {children}
    </Container>
  )
}

GridContainer.defaultProps = {
  className: ''
}

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
