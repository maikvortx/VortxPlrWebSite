const DropdownStyle = {
  disabled: {
    backgroundColor: '#f2f4f9',
    color: '#616469',
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  input: {
    padding: '10px',
    color: '#000',
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: '#C4C4C4'
    }
  }
}

export default DropdownStyle
