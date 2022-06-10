import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

function Emissoras({ options, value, onChange }) {
  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      fullWidth
      id="comboBox-Emissoras"
      options={options}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        if (option.inputValue) {
          return option.inputValue
        }
        return option.nome
      }}
      renderOption={(props, option) => <li {...props}>{option.nome}</li>}
      freeSolo
      renderInput={(params) => <TextField {...params} />}
    />
  )
}

export default Emissoras
