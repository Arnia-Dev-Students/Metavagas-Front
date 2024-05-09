import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }


  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

 body {    
    background-color: #1A1033;
    margin: 0;
    padding: 0;
    
    
  }
`;
