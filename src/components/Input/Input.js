import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles } from '@mui/styles'
import { FormControl, InputLabel, OutlinedInput } from '@mui/material'

import styles from './InputStyle'
import ErrorMessage from '../ErrorMessage'

const useStyles = makeStyles(styles)

export default function Input(props) {
  const classes = useStyles()
  const {
    formControlProps,
    labelText,
    id,
    value,
    placeholder,
    labelProps,
    inputProps,
    disabled,
    error,
    errorMessage,
    white,
    inputRootCustomClasses,
    success,
    type,
    rows,
    multiline
  } = props

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  })
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  })
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  })
  const multilineClasses = classNames({
    [classes.multilineClass]: multiline
  })
  return (
    <FormControl
      variant="outlined"
      {...formControlProps}
      style={{
        width: '100%',
        display: type === 'hidden' ? 'none' : 'inline-flex'
      }}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + ' ' + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <OutlinedInput
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          multiline: multilineClasses
          // underline: underlineClasses
        }}
        value={value}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        id={id}
        type={type}
        rows={rows}
        multiline={multiline}
        {...inputProps}
      />
      {error && errorMessage && <ErrorMessage message={errorMessage} />}
    </FormControl>
  )
}

Input.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
}
