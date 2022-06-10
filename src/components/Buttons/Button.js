import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'

// core components
import buttonStyle from './buttonStyle'

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle
}))

// eslint-disable-next-line react/display-name
const RegularButton = forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props

  const classes = makeComponentStyles()

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  })
  return (
    <Button {...rest} ref={ref} className={btnClasses} variant={props.variant}>
      {children}
    </Button>
  )
})

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'transparent',
    'outlined'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

export default RegularButton
