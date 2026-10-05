import React from "react";
import { cn } from "../shared/lib/cn";
import { useLocale } from "../i18n/context";
import { LOCALES, pageUrl, type PageId } from "../i18n/locale";

interface Props {
  page: PageId;
  className?: string;
}

export const LangSwitch: React.FC<Props> = ({ page, className }) => {
  const current = useLocale();

  return (
    <nav aria-label="Language" className={cn("flex items-center gap-1.5 font-luna text-[11px] sm:text-[12px]", className)}>
      {LOCALES.map((locale, index) => (
        <React.Fragment key={locale}>
          {index > 0 && <span className="text-[#9a9a9a]">/</span>}
          {locale === current ? (
            <span className="text-primary" aria-current="page">{locale.toUpperCase()}</span>
          ) : (
            <a href={pageUrl(page, locale)} hrefLang={locale} lang={locale} className="hover:text-primary transition">
              {locale.toUpperCase()}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
