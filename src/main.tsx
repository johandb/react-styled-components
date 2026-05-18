import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import "./index.css";
import GlobalStyle from "./styled/global.tsx";
import { theme } from "./styled/themes/themes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);
