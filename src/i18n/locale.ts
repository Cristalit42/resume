export type Locale = "ru" | "en";
export type Localized<T> = Record<Locale, T>;
export type PageId = "hub" | "react" | "wp";

export const LOCALES: Locale[] = ["ru", "en"];

/** Язык страницы берём из <html lang="..."> — у каждой версии свой index.html */
export const getDocumentLocale = (): Locale =>
  document.documentElement.lang === "en" ? "en" : "ru";

/** /resume/, /resume/react/, /resume/en/, /resume/en/wp/ ... (учитывает base из vite.config) */
export const pageUrl = (page: PageId, locale: Locale) =>
  `${import.meta.env.BASE_URL}${locale === "en" ? "en/" : ""}${page === "hub" ? "" : `${page}/`}`;
