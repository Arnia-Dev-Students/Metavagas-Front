import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }


  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Poppins';
  }

  body, input, select, textarea {
    font-size: 1rem;
    background-color: #1A1033;
    
  }
`;
