import { createGlobalStyle } from 'styled-components'
import { blackColor, paragraph, title, whiteColor } from '../../ui-kit'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }
  @media screen and (min-width: 1000px) {
    html {
      font-size: 14px;
    }
  }

  body {
    color: #343434;
    background-color: ${whiteColor};
    margin: 0;
    font-family: ${paragraph.fontFamily}
  }

  strong {
    font-weight: 700;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${title.fontFamily};
    font-weight: ${title.fontWeight};
    color: ${blackColor};
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: #343434;
  }

  p {
    font-family: ${paragraph.fontFamily};
    font-size: 1rem;
    margin: 0;
    font-weight: ${paragraph.fontWeight};
    line-height: 1.2rem;
  }

  select,
  input[type='text'],
  input[type='number'],
  textarea {
    background: transparent;
    outline: none;
    font-family: 'Open sans', sans-serif;
  }

  input:disabled {
    border-radius: 4px;
    background-color: #f2f4f9;
    color: #616469;
  }

  ::selection {
    background: #343434;
    color: white;
  }
  ::-moz-selection {
    background: #343434;
  }

  .MuiSelect-select{
    padding: 11.5px 14px!important;
  }
`
