import { createGlobalStyle } from 'styled-components';

export const GlobalStyling = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  body {
    background: #000000;
    font-family: Arial;
  }
`;
