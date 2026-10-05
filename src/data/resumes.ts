import type { Locale, Localized } from "../i18n/locale";
import { commercialProjects, type CommercialProject } from "./projects";

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  /** Если задан — название проекта само становится ссылкой */
  href?: string;
  meta?: string;
  links?: { text: string; href: string }[];
  stack?: string[];
  bullets: string[];
}

export type ResumeSlug = "react" | "wp";

export interface ResumeData {
  slug: ResumeSlug;
  role: string;
  stackLine: string;
  summary: string[];
  skills: { title: string; items: string[] }[];
  /** Порядок блоков отличается: для React важнее проекты, для WP — опыт */
  order: ("projects" | "experience" | "commercial")[];
  projectsTitle: string;
  projects: ResumeProject[];
  experience: ResumeExperience[];
  commercialTitle?: string;
  commercial?: ResumeProject[];
  /** Языки — показываются, только если заполнены */
  languages?: string[];
  other: { label: string; slug: ResumeSlug };
}

const toResumeProject = (p: CommercialProject, locale: Locale): ResumeProject => ({
  name: p.domain,
  href: p.url,
  meta: p.kind[locale],
  bullets: [p.tasks[locale].join(" · ")],
});

const projectsFor = (locale: Locale, count?: number) =>
  commercialProjects.slice(0, count).map((p) => toResumeProject(p, locale));

const STACK_PORTFOLIO = ["React", "TypeScript", "Vite", "Tailwind CSS"];
const STACK_PIZZA = ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"];
const LINKS_PORTFOLIO = (demo: string) => [
  { text: demo, href: "https://cristalit42.github.io/resume/" },
  { text: "GitHub", href: "https://github.com/Cristalit42/resume" },
];
const LINKS_PIZZA = [{ text: "GitHub", href: "https://github.com/Cristalit42/next-pizza" }];

/* ============================== RU ============================== */

const freelanceRu: ResumeExperience = {
  role: "Frontend / WordPress-разработчик",
  company: "Фриланс",
  period: "2023 — н. в.",
  bullets: [
    "Сайты под ключ для малого бизнеса — от вёрстки до запуска",
    "Кастомные темы, ACF, доработка и оптимизация скорости существующих сайтов",
    "Лендинги и небольшие интернет-магазины на WooCommerce",
  ],
};

const reactRu: ResumeData = {
  slug: "react",
  role: "Frontend-разработчик (React)",
  stackLine: "React · TypeScript · Next.js · Tailwind CSS",
  summary: [
    "Frontend-разработчик с 2+ годами коммерческого опыта: 50+ сданных проектов — от лендингов до интернет-магазинов со сложной клиентской логикой.",
    "Сейчас развиваюсь в React-стеке: TypeScript, Next.js, Tailwind CSS. Пишу компонентный типизированный код, понимаю работу с API и базой данных на уровне fullstack pet-проекта.",
    "Из коммерческой практики: вёрстка по реальным макетам, производительность, интеграции с внешними сервисами, работа в сроки и с заказчиком.",
  ],
  skills: [
    { title: "Основной стек", items: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"] },
    { title: "Вёрстка и UI", items: ["HTML5", "CSS3 / SCSS", "Адаптивная вёрстка", "Кроссбраузерность", "GSAP"] },
    { title: "Инструменты", items: ["Git / GitHub", "Vite", "ESLint", "REST API", "PostgreSQL / Prisma (базово)"] },
  ],
  order: ["projects", "experience", "commercial"],
  projectsTitle: "Проекты на React",
  projects: [
    {
      name: "Сайт-портфолио",
      stack: STACK_PORTFOLIO,
      links: LINKS_PORTFOLIO("Демо"),
      bullets: [
        "Компонентная архитектура, типизированные пропсы, данные вынесены из разметки",
        "Анимация появления текста по словам без ручной работы с DOM: разбиение при рендере + IntersectionObserver, учёт prefers-reduced-motion",
        "Многостраничная сборка Vite: хаб + два резюме с печатью в PDF, i18n RU/EN через контекст и типизированные словари, деплой на GitHub Pages",
      ],
    },
    {
      name: "Next Pizza — интернет-магазин",
      meta: "в разработке",
      stack: STACK_PIZZA,
      links: LINKS_PIZZA,
      bullets: ["Fullstack-приложение: каталог, корзина, работа с базой данных через Prisma ORM"],
    },
  ],
  experience: [
    {
      role: "Frontend-разработчик",
      company: "Usertech",
      period: "2024 — н. в.",
      bullets: [
        "Реализовал редактирование корзины WooCommerce в popup без перезагрузки: пересчёт цены, смена опций и граммовки в реальном времени",
        "Интегрировал оплату через Т-Банк и доставку СДЭК в интернет-магазине",
        "Разработал интерактивные интерфейсы: интерактивная карта, квизы, фильтры каталога, формы с отправкой в Telegram и на почту",
        "Анимации на GSAP ScrollTrigger и чистом JavaScript",
        "50+ проектов сдано в срок",
      ],
    },
    freelanceRu,
  ],
  commercialTitle: "Коммерческие проекты",
  commercial: projectsFor("ru", 3),
  other: { label: "Резюме WordPress-разработчика", slug: "wp" },
};

const wpRu: ResumeData = {
  slug: "wp",
  role: "WordPress-разработчик",
  stackLine: "WordPress · WooCommerce · ACF · JavaScript",
  summary: [
    "2+ года коммерческой разработки на WordPress, 50+ сданных проектов: корпоративные сайты, лендинги, интернет-магазины на WooCommerce.",
    "Веду проект полным циклом: вёрстка по макету → интеграция с WordPress и ACF → логика WooCommerce → оплата и доставка → запуск.",
    "Развиваюсь в React и TypeScript — пригодится для блоков Gutenberg и headless-проектов.",
  ],
  skills: [
    {
      title: "WordPress / WooCommerce",
      items: ["Кастомные темы", "ACF", "Фильтры и каталог", "Карточка товара, корзина", "Оплата Т-Банк, доставка СДЭК"],
    },
    {
      title: "Frontend",
      items: ["HTML5, CSS3 / SCSS", "JavaScript (ES6+), AJAX", "Адаптив, кроссбраузерность", "GSAP ScrollTrigger", "Swiper, Fancybox"],
    },
    {
      title: "Дополнительно",
      items: ["PHP (в рамках тем WordPress)", "REST API", "Формы → Telegram / почта", "Git / GitHub", "React, TypeScript"],
    },
  ],
  order: ["experience", "projects"],
  projectsTitle: "Проекты",
  projects: projectsFor("ru"),
  experience: [
    {
      role: "Frontend / WordPress-разработчик",
      company: "Usertech",
      period: "2024 — н. в.",
      bullets: [
        "Интеграция вёрстки с WordPress: кастомные темы, ACF, шаблоны страниц",
        "Логика WooCommerce: фильтры, вывод товаров, карточка товара; редактирование корзины в popup без перезагрузки с пересчётом цены",
        "Подключение оплаты Т-Банк и доставки СДЭК",
        "Интерактивная карта, квизы, формы с отправкой в Telegram и на почту",
        "Анимации на GSAP ScrollTrigger",
        "50+ проектов сдано в срок",
      ],
    },
    freelanceRu,
  ],
  other: { label: "Резюме React-разработчика", slug: "react" },
};

/* ============================== EN ============================== */

// Укажи свой уровень английского — блок «Languages» появится в EN-резюме:
// const languagesEn = ["Russian — native", "English — B1 (intermediate)"];
const languagesEn: string[] | undefined = undefined;

const freelanceEn: ResumeExperience = {
  role: "Frontend / WordPress Developer",
  company: "Freelance",
  period: "2023 — present",
  bullets: [
    "Turnkey websites for small businesses — from markup to launch",
    "Custom themes, ACF, improvements and speed optimization of existing sites",
    "Landing pages and small WooCommerce online stores",
  ],
};

const reactEn: ResumeData = {
  slug: "react",
  role: "Frontend Developer (React)",
  stackLine: "React · TypeScript · Next.js · Tailwind CSS",
  summary: [
    "Frontend developer with 2+ years of commercial experience and 50+ delivered projects — from landing pages to online stores with complex client-side logic.",
    "Currently focused on the React ecosystem: TypeScript, Next.js, Tailwind CSS. I write typed, component-based code and understand APIs and databases at the level of a fullstack pet project.",
    "From commercial work I bring accurate responsive layouts, attention to performance, third-party integrations and reliable delivery on deadlines.",
    "Open to remote full-time roles and freelance projects. Time zone: GMT+6.",
  ],
  skills: [
    { title: "Core stack", items: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"] },
    { title: "Markup & UI", items: ["HTML5", "CSS3 / SCSS", "Responsive layout", "Cross-browser", "GSAP"] },
    { title: "Tools", items: ["Git / GitHub", "Vite", "ESLint", "REST API", "PostgreSQL / Prisma (basic)"] },
  ],
  order: ["projects", "experience", "commercial"],
  projectsTitle: "React projects",
  projects: [
    {
      name: "Portfolio site",
      stack: STACK_PORTFOLIO,
      links: LINKS_PORTFOLIO("Demo"),
      bullets: [
        "Component architecture, typed props, content separated from markup",
        "Word-by-word text reveal without manual DOM manipulation: splitting at render + IntersectionObserver, respects prefers-reduced-motion",
        "Multi-page Vite build: hub + two print-to-PDF resumes, RU/EN i18n via React context and typed dictionaries, deployed to GitHub Pages",
      ],
    },
    {
      name: "Next Pizza — online store",
      meta: "in progress",
      stack: STACK_PIZZA,
      links: LINKS_PIZZA,
      bullets: ["Fullstack app: catalog, cart, database access via Prisma ORM"],
    },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Usertech",
      period: "2024 — present",
      bullets: [
        "Built WooCommerce cart editing in a popup without page reload: real-time price recalculation, option and weight changes",
        "Integrated the T-Bank payment gateway and CDEK shipping into an online store",
        "Built interactive interfaces: an interactive map, quizzes, catalog filters, forms sending to Telegram and email",
        "Animations with GSAP ScrollTrigger and vanilla JavaScript",
        "50+ projects delivered on time",
      ],
    },
    freelanceEn,
  ],
  commercialTitle: "Commercial projects",
  commercial: projectsFor("en", 3),
  languages: languagesEn,
  other: { label: "WordPress Developer resume", slug: "wp" },
};

const wpEn: ResumeData = {
  slug: "wp",
  role: "WordPress Developer",
  stackLine: "WordPress · WooCommerce · ACF · JavaScript",
  summary: [
    "2+ years of commercial WordPress development and 50+ delivered projects: business websites, landing pages and WooCommerce online stores.",
    "I handle projects end to end: markup from a design → WordPress and ACF integration → WooCommerce logic → payments and shipping → launch.",
    "Also working with React and TypeScript — useful for Gutenberg blocks and headless WordPress projects.",
    "Available for freelance projects and remote roles. Time zone: GMT+6.",
  ],
  skills: [
    {
      title: "WordPress / WooCommerce",
      items: ["Custom themes", "ACF", "Filters & catalog", "Product page, cart", "Payment & shipping integrations"],
    },
    {
      title: "Frontend",
      items: ["HTML5, CSS3 / SCSS", "JavaScript (ES6+), AJAX", "Responsive, cross-browser", "GSAP ScrollTrigger", "Swiper, Fancybox"],
    },
    {
      title: "Also",
      items: ["PHP (WordPress themes)", "REST API", "Forms → Telegram / email", "Git / GitHub", "React, TypeScript"],
    },
  ],
  order: ["experience", "projects"],
  projectsTitle: "Projects",
  projects: projectsFor("en"),
  experience: [
    {
      role: "Frontend / WordPress Developer",
      company: "Usertech",
      period: "2024 — present",
      bullets: [
        "WordPress integration: custom themes, ACF, page templates",
        "WooCommerce logic: filters, product listings, product page; popup cart editing without page reload with live price recalculation",
        "T-Bank payment gateway and CDEK shipping integration",
        "Interactive map, quizzes, forms sending to Telegram and email",
        "GSAP ScrollTrigger animations",
        "50+ projects delivered on time",
      ],
    },
    freelanceEn,
  ],
  languages: languagesEn,
  other: { label: "Frontend Developer (React) resume", slug: "react" },
};

export const resumes: Record<ResumeSlug, Localized<ResumeData>> = {
  react: { ru: reactRu, en: reactEn },
  wp: { ru: wpRu, en: wpEn },
};
