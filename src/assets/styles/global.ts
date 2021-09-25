import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font: 16px Roboto, sans-serif;
    background: #E9EAEC;
    width: 100vw;
    min-height: 100vh;
  }
`