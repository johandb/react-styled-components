import { createGlobalStyle } from "styled-components";
import { theme } from "../components/themes/themes";

const GlobalStyle = createGlobalStyle`
  body, h1,h2,h3,h4,h5,p,div {
    margin: 0; 
    padding: 0; 
    background-color: inherit;
  }
  h1 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 2.2rem; 
  }
  h2 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 2.0rem; 
  }
  h3 {
    font-family: ${theme.font.defaultFamily};
    color: black;
    font-size: 1.6rem; 
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
