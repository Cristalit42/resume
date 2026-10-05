import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LocaleContext } from "./i18n/context";
import { getDocumentLocale } from "./i18n/locale";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleContext.Provider value={getDocumentLocale()}>
      <App />
    </LocaleContext.Provider>
  </StrictMode>,
);
