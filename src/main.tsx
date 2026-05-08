import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./components/themes/themes.tsx";
import { StyledContext } from "./hooks/styled.context.ts";
import "./index.css";

const defaultStyle = {
  color: theme.colors.primary,
  size: "md",
  disabled: false,
  mt: 2,
  mb: 2,
  ml: 2,
  mr: 2,
  pt: 2,
  pb: 2,
  pl: 2,
  pr: 2,
  radius: 5,
  fm: theme.font.defaultFamily,
  fs: "inherit",
  fw: "normal",
  align: "left",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledContext.Provider value={defaultStyle}>
      <App />
    </StyledContext.Provider>
  </StrictMode>,
);
