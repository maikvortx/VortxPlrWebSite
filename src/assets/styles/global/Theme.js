import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'
import {
  primaryColor,
  primaryLightColor,
  primaryDarkColor,
  whiteColor
} from '../../ui-kit/index'

const theme = createTheme(
  {
    typography: {
      fontFamily: ['Open Sans'].join(',')
    },
    palette: {
      primary: {
        light: primaryLightColor,
        main: primaryColor,
        dark: primaryDarkColor,
        contrastText: whiteColor
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1366,
        xl: 1920
      }
    },
    overrides: {
      MuiTab: {
        selected: {
          fontWeight: 500
        }
      },
      MuiAccordion: {
        root: {
          ':before': {
            backgroundColor: 'unset'
          }
        }
      }
    }
  },
  ptBR
)

export default theme
