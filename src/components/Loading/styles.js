import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;

  & > div {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div.MuiCircularProgress-root {
    display: block;

    width: 100px !important;
    height: 100px !important;
  }
`
