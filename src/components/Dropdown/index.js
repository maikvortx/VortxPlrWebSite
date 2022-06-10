import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { makeStyles } from '@mui/styles'
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText
} from '@mui/material'

// core components
import styles from './styles'
import ErrorMessage from '../ErrorMessage'

const useStyles = makeStyles(styles)

export default function Dropdown(props) {
  const classes = useStyles()
  const {
    options = [],
    labelText,
    id,
    value,
    onChange,
    inputProps,
    disabled,
    success,
    error,
    errorMessage,
    white,
    checkbox,
    variant,
    placeholder
  } = props

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  })
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  })

  const handleSelect = (event) => {
    onChange(event.target.value)
  }

  return (
    <FormControl variant="outlined" margin="dense" style={{ width: '100%' }}>
      <InputLabel
        id={id}
        htmlFor={id}
        className={classes.labelRoot + ' ' + labelClasses}
      >
        {labelText}
      </InputLabel>
      <Select
        classes={{
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        value={value}
        defaultValue=""
        onChange={handleSelect}
        disabled={disabled}
        label={labelText}
        error={error}
        variant={variant}
        displayEmpty
        {...inputProps}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300
            }
          }
        }}
        renderValue={(selected) => {
          if (placeholder && !selected) {
            return placeholder
          }

          const text = options.find((option) => option.value === selected)

          return text?.label ? text.label : ''
        }}
      >
        {placeholder && (
          <MenuItem disabled key={placeholder} value={''}>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {checkbox ? (
              <Checkbox color="primary" checked={value === option.value} />
            ) : null}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {error && errorMessage && <ErrorMessage message={errorMessage} />}
    </FormControl>
  )
}

Dropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary'
}

Dropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose'
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func
}
