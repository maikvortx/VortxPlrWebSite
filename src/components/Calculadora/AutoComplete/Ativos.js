import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

function Ativos({ options, value, onChange }) {
  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      fullWidth
      id="comboBox-Ativos"
      options={options}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.caso
      }}
      renderOption={(props, option) => <li {...props}>{option.caso}</li>}
      freeSolo
      renderInput={(params) => <TextField {...params} />}
    />
  )
}

export default Ativos
