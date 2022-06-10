import {
  primaryColor,
  dangerColor,
  successColor,
  blackColor,
  paragraph
} from '../../assets/ui-kit'

const InputStyle = {
  disabled: {
    backgroundColor: '#F7F7F7',
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important'
    },
    '&:after': {
      borderColor: primaryColor
    }
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor
    },
    '& svg': {
      color: primaryColor
    }
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#FFFFFF'
    },
    '&:after': {
      borderColor: '#FFFFFF'
    }
  },
  labelRoot: {
    fontFamily: paragraph.fontFamily,
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px'
    }
  },
  labelRootError: {
    color: dangerColor + ' !important'
  },
  labelRootSuccess: {
    color: successColor + ' !important'
  },
  formControl: {
    margin: '0 0 17px 0',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057'
    }
  },
  input: {
    padding: '10px',
    color: blackColor,
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
  },
  multilineClass: {
    padding: '0px'
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1'
    }
  }
}

export default InputStyle
