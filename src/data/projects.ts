import type { Localized } from "../i18n/locale";

export interface CommercialProject {
  /** Имя файлов скриншотов: <slug>.png и <slug>-mobile.png в src/assets/projects/ */
  slug: string;
  domain: string;
  url: string;
  /** Тип проекта */
  kind: Localized<string>;
  tasks: Localized<string[]>;
}

// Все картинки из src/assets/projects подхватываются автоматически
const screenshots = import.meta.glob<string>("../assets/projects/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const findScreenshot = (name: string) =>
  Object.entries(screenshots).find(([path]) => path.replace(/^.*\/|\.[^.]+$/g, "") === name)?.[1];

export const getScreenshots = (slug: string) => ({
  desktop: findScreenshot(slug),
  mobile: findScreenshot(`${slug}-mobile`),
});

const base: Localized<string[]> = {
  ru: ["Вёрстка и интеграция с WordPress", "Формы"],
  en: ["WordPress theme development", "Forms"],
};

/** Общие задачи + специфичные для проекта, на обоих языках */
const tasks = (ru: string[], en: string[]): Localized<string[]> => ({
  ru: [...base.ru, ...ru],
  en: [...base.en, ...en],
});

export const commercialProjects: CommercialProject[] = [
  {
    slug: "elektra",
    domain: "elektra.moscow",
    url: "https://elektra.moscow",
    kind: {
      ru: "Интернет-магазин зарядных станций для электромобилей",
      en: "Online store for EV charging stations",
    },
    tasks: tasks(
      ["Логика WooCommerce: фильтры, каталог, карточка товара", "Оплата Т-Банк", "Доставка СДЭК"],
      ["WooCommerce logic: filters, catalog, product page", "T-Bank payment gateway", "CDEK shipping integration"]
    ),
  },
  {
    slug: "fullarch",
    domain: "fullarchcourse.ru",
    url: "https://fullarchcourse.ru",
    kind: { ru: "Сайт обучающей программы по стоматологии", en: "Website for a dental education program" },
    tasks: tasks(["Анимации"], ["Animations"]),
  },
  {
    slug: "profilelight",
    domain: "profilelight.pro",
    url: "https://profilelight.pro",
    kind: { ru: "Сайт компании по остеклению частных домов", en: "Website for a home glazing company" },
    tasks: tasks(["Анимации"], ["Animations"]),
  },
  {
    slug: "n5troe37",
    domain: "n5troe37.beget.tech",
    url: "http://n5troe37.beget.tech",
    kind: {
      ru: "Сайт компании, занимающейся организацией восхождений в горы",
      en: "Website for a mountain expedition company",
    },
    tasks: tasks(["Анимации"], ["Animations"]),
  },
];
