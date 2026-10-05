export interface CommercialProject {
  /** Имя файлов скриншотов: <slug>.png и <slug>-mobile.png в src/assets/projects/ */
  slug: string;
  domain: string;
  url: string;
  /** Тип проекта — поправь формулировку, если нужно */
  kind: string;
  tasks: string[];
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

const base = ["Вёрстка и интеграция с WordPress", "Формы"];

export const commercialProjects: CommercialProject[] = [
  {
    slug: "elektra",
    domain: "elektra.moscow",
    url: "https://elektra.moscow",
    kind: "Интернет-магазин зарядных станций для электромобилей",
    tasks: [
      ...base,
      "Логика WooCommerce: фильтры, каталог, карточка товара",
      "Оплата Т-Банк",
      "Доставка СДЭК",
    ],
  },
  {
    slug: "fullarch",
    domain: "fullarchcourse.ru",
    url: "https://fullarchcourse.ru",
    kind: "Сайт обучающей программы по стоматологии",
    tasks: [...base, "Анимации"],
  },
  {
    slug: "profilelight",
    domain: "profilelight.pro",
    url: "https://profilelight.pro",
    kind: "Сайт компании по остеклению частных домов",
    tasks: [...base, "Анимации"],
  },
  {
    slug: "n5troe37",
    domain: "n5troe37.beget.tech",
    url: "http://n5troe37.beget.tech",
    kind: "Сайт компании, занимающейся организацией восхождений в горы",
    tasks: [...base, "Анимации"],
  },
];
