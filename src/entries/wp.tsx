import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { ResumePage } from "../resume/ResumePage";
import { resumes } from "../data/resumes";
import { LocaleContext } from "../i18n/context";
import { getDocumentLocale } from "../i18n/locale";

const locale = getDocumentLocale();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleContext.Provider value={locale}>
      <ResumePage data={resumes.wp[locale]} />
    </LocaleContext.Provider>
  </StrictMode>,
);
