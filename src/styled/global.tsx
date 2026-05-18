import { createGlobalStyle } from "styled-components";
import { theme } from "./themes/themes";

const GlobalStyle = createGlobalStyle`
  body, h1,h2,h3,h4,h5,p,div {
    margin: 0; 
    padding: 0; 
    background-color: inherit;
    font-family: ${theme.font.defaultFamily};
  }
  h1 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 2.0rem; 
  }
  h2 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 1.8rem;
  }
  h3 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 1.4rem; 
  }
  h4 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 1.0rem; 
  }
  h5 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 0.8rem; 
  }
`;

export default GlobalStyle;
