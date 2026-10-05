import { commercialProjects } from "./projects";

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

export interface ResumeData {
  slug: "react" | "wp";
  pageTitle: string;
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
  other: { label: string; slug: "react" | "wp" };
}

const freelance: ResumeExperience = {
  role: "Frontend / WordPress-разработчик",
  company: "Фриланс",
  period: "2023 — н. в.",
  bullets: [
    "Сайты под ключ для малого бизнеса — от вёрстки до запуска",
    "Кастомные темы, ACF, доработка и оптимизация скорости существующих сайтов",
    "Лендинги и небольшие интернет-магазины на WooCommerce",
  ],
};

const toResumeProject = (p: (typeof commercialProjects)[number]): ResumeProject => ({
  name: p.domain,
  href: p.url,
  meta: p.kind,
  bullets: [p.tasks.join(" · ")],
});

const portfolioProject: ResumeProject = {
  name: "Сайт-портфолио",
  stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  links: [
    { text: "Демо", href: "https://cristalit42.github.io/resume/" },
    { text: "GitHub", href: "https://github.com/Cristalit42/resume" },
  ],
  bullets: [
    "Компонентная архитектура, типизированные пропсы, данные вынесены из разметки",
    "Анимация появления текста по словам без ручной работы с DOM: разбиение при рендере + IntersectionObserver, учёт prefers-reduced-motion",
    "Многостраничная сборка Vite (хаб + две страницы резюме с печатью в PDF), деплой на GitHub Pages",
  ],
};

const pizzaProject: ResumeProject = {
  name: "Next Pizza — интернет-магазин",
  meta: "в разработке",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  links: [{ text: "GitHub", href: "https://github.com/Cristalit42/next-pizza" }],
  bullets: ["Fullstack-приложение: каталог, корзина, работа с базой данных через Prisma ORM"],
};

export const reactResume: ResumeData = {
  slug: "react",
  pageTitle: "Даниил Полыгалов — Frontend-разработчик (React)",
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
  projects: [portfolioProject, pizzaProject],
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
    freelance,
  ],
  commercialTitle: "Коммерческие проекты",
  commercial: commercialProjects.slice(0, 3).map(toResumeProject),
  other: { label: "Резюме WordPress-разработчика", slug: "wp" },
};

export const wpResume: ResumeData = {
  slug: "wp",
  pageTitle: "Даниил Полыгалов — WordPress-разработчик",
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
  projects: commercialProjects.map(toResumeProject),
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
    freelance,
  ],
  other: { label: "Резюме React-разработчика", slug: "react" },
};
