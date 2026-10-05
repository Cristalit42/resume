import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { ResumePage } from "../resume/ResumePage";
import { wpResume } from "../data/resumes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResumePage data={wpResume} />
  </StrictMode>,
);
