import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <StyledContext.Provider value={defaultStyle}> */}
    <App />
    {/* </StyledContext.Provider> */}
  </StrictMode>,
);
