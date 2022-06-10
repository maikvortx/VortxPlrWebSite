import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './styles'
export default function GridItem(props) {
  const { children, className, ...rest } = props
  return (
    <Item item {...rest} className={className}>
      {children}
    </Item>
  )
}

GridItem.defaultProps = {
  className: ''
}

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
