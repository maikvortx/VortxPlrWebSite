// ---- Variables - Styles that are used on more than one component ---- //

const drawerWidth = 260

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
}

const containerFluid = {
  paddingRight: '40px',
  paddingLeft: '40px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '30px',
  marginBottom: '30px',
  width: '100%'
}

const container = {
  ...containerFluid,
  '@media (max-width: 768px)': {
    paddingRight: '15px',
    paddingLeft: '15px'
  }
}

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
}

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff'
}

// Para as tags HTML <h1 />, <h2 />, <h3 />, <h4 />, <h5 />, <h6 />
const title = {
  color: '#161616',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: `"Josefin Sans", "Times New Roman", serif`
}

// Para a tag HTML <p />
const paragraph = {
  color: '#161616',
  fontWeight: '400',
  lineHeight: '1.5em',
  fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif'
}

// Cores primárias
const primaryColor = '#cb1e25'
const primaryLightColor = '#C12C2C'
const primaryDarkColor = '#8B0D09'
const goldColor = 'transparent'
const goldLightColor = '#C99846'
const beigeColor = '#F4F2ED'
const whiteColor = '#ffffff'
const blackColor = '#161616'

//Cores Secundárias
const warningColor = '#ff9800'
const dangerColor = '#C12C2C'
const successColor = '#4caf50'
const infoColor = '#00acc1'
const roseColor = '#B84D80'
const grayLightColor = '#F7F7F7'
const grayColor = '#999999'
const blueColor = '#3D6582'
const yellowColor = '#F7A700'
const orangeColor = '#E04A13'
const greenLightColor = '#1BAA46'
const greenColor = '#469639'
const greenDarkColor = '#225E03'

// Cores de componentes
const navbarColor = '#161616'

const primaryBoxShadow = {
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25);'
}
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)'
}
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)'
}
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)'
}
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)'
}
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)'
}

const warningCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow
}
const successCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow
}
const dangerCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow
}
const infoCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow
}
const primaryCardHeader = {
  color: '#fff',
  backgroundColor: '#CB1E25',
  ...primaryBoxShadow
}
const roseCardHeader = {
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow
}
const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...paragraph
}

const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px'
}

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s'
}

const cardTitle = {
  ...title,
  marginTop: '.625rem'
}

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
}

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem'
}

export {
  //variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  primaryColor,
  primaryLightColor,
  primaryDarkColor,
  goldColor,
  goldLightColor,
  beigeColor,
  whiteColor,
  blackColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayLightColor,
  grayColor,
  yellowColor,
  orangeColor,
  blueColor,
  greenLightColor,
  greenColor,
  greenDarkColor,
  navbarColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  paragraph,
  cardTitle,
  cardLink,
  cardSubtitle
}
