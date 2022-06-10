import React from 'react'
import { makeStyles } from '@mui/styles'
import { container } from '../../assets/ui-kit'

const useStyles = makeStyles({
  container
})

function Container({ children }) {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}

export default Container
