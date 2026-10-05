import { createContext, useContext } from "react";
import type { Locale } from "./locale";

export const LocaleContext = createContext<Locale>("ru");

export const useLocale = () => useContext(LocaleContext);
