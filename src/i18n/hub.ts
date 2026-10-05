import { useLocale } from "./context";
import type { Localized } from "./locale";

export interface ExperienceBullet {
  text: string;
  link?: { text: string; href: string };
}

export interface HubExperienceItem {
  top?: string;
  accent: string;
  bottom: string;
  info: string;
  bullets?: ExperienceBullet[];
  paragraph?: string;
}

interface Card {
  title: string;
  text: string;
}

export interface HubText {
  header: { nav: { text: string; link: string }[]; contact: string };
  hero: { role: string; timeLabel: string; name: [string, string]; intro: string; cta: string; stat: string };
  about: { title: string; paragraphs: string[]; cards: Card[] };
  services: { title: string; cards: Card[] };
  skills: { title: string; lead: string; words: string[]; cards: { title: string; items: string[] }[] };
  experience: { title: string; items: HubExperienceItem[] };
  projects: {
    title: string;
    carousel: string;
    of: string;
    prev: string;
    next: string;
    visit: string;
    screenshot: string;
    mobile: string;
  };
  resume: { title: string; open: string; react: Card & { role: string }; wp: Card & { role: string } };
  contacts: { title: string; text: string };
  footer: { slogan: string };
}

const GH_RESUME = "https://github.com/Cristalit42/resume";
const GH_PIZZA = "https://github.com/Cristalit42/next-pizza";

const ru: HubText = {
  header: {
    nav: [
      { text: "Обо мне", link: "about" },
      { text: "Навыки", link: "skills" },
      { text: "Опыт", link: "experience" },
      { text: "Проекты", link: "projects" },
      { text: "Резюме", link: "resume" },
      { text: "Контакты", link: "contacts" },
    ],
    contact: "Связаться со мной",
  },
  hero: {
    role: "Frontend Developer",
    timeLabel: "Время KGZ",
    name: ["Даниил", "Полыгалов"],
    intro:
      "2+ года коммерческой разработки: адаптивная вёрстка, кастомные темы WordPress, сложная JS-логика для интернет-магазинов. Сейчас перехожу на React-стек — строю fullstack pet-проекты на Next.js и готов применять это в команде.",
    cta: "Смотреть кейсы",
    stat: "коммерческих проектов",
  },
  about: {
    title: "Обо мне",
    paragraphs: [
      "Frontend-разработчик с 2+ годами коммерческого опыта.",
      "Начинал с вёрстки и интеграции — это дало крепкую базу: понимание архитектуры UI, адаптивности, производительности и работы интерфейсов под нагрузкой реальных проектов.",
      "За это время сдал 50+ коммерческих проектов на WordPress и WooCommerce — от лендингов до интернет-магазинов со сложной кастомной логикой.",
      "Сейчас активно перехожу на React-стек: пишу на TypeScript, использую Tailwind, разрабатываю fullstack pet-проект на Next.js с PostgreSQL и Prisma.",
      "Предпочитаю чистую архитектуру без лишних зависимостей, код который легко читать и масштабировать.",
    ],
    cards: [
      { title: "Пишу, а не собираю", text: "Кастомный код без конструкторов и шаблонов" },
      { title: "Слежу за качеством", text: "Читаемый код, масштабируемая структура" },
      { title: "Работаю в команде", text: "Git, понятная коммуникация, соблюдение сроков" },
    ],
  },
  services: {
    title: "Что я умею",
    cards: [
      {
        title: "WordPress / WooCommerce",
        text: "Кастомные темы, ACF, сложная JS-логика для интернет-магазинов, интеграции с Telegram и почтой. 50+ проектов сдано в срок.",
      },
      {
        title: "JavaScript и интерфейсы",
        text: "Интерактивные формы, popup-системы, фильтры, квизы, динамические сценарии без перезагрузки страницы.",
      },
      {
        title: "Анимации",
        text: "GSAP + ScrollTrigger, кастомные анимации на чистом JS для современных визуальных решений.",
      },
      {
        title: "React / Next.js (растущее направление)",
        text: "TypeScript, компонентный подход, хуки, Tailwind. Строю fullstack-проект на Next.js с PostgreSQL и Prisma — понимаю, как устроен бэк и работа с БД.",
      },
    ],
  },
  skills: {
    title: "Мои навыки",
    lead: "Основа моей",
    words: ["разработки", "работы", "практики", "философии", "жизни"],
    cards: [
      {
        title: "Frontend",
        items: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "Адаптивная верстка", "Кроссбраузерная верстка"],
      },
      {
        title: "Изучаю и применяю в pet-проектах",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL / Prisma"],
      },
      {
        title: "Инструменты",
        items: ["Git / GitHub", "WordPress / ACF / WooCommerce", "REST API", "GSAP + ScrollTrigger", "Swiper, Fancybox"],
      },
    ],
  },
  experience: {
    title: "Опыт разработки",
    items: [
      {
        top: "Frontend Developer",
        accent: "Usertech",
        bottom: "2024 — настоящее время",
        info: "Верстка коммерческих сайтов и интернет-магазинов — адаптивная, кроссбраузерная, с нестандартной JS-логикой.",
        bullets: [
          { text: "Реализовал систему редактирования корзины WooCommerce через popup без перезагрузки: динамический пересчёт цены, смена опций и граммовки в реальном времени" },
          { text: "Интегрировал оплату через Т-Банк и доставку СДЭК в интернет-магазине" },
          { text: "Разработал интерактивные интерфейсы: интерактивная карта, квизы, фильтры каталогов, формы с отправкой в Telegram и на почту" },
          { text: "Анимации на GSAP ScrollTrigger и чистом JavaScript" },
          { text: "Интеграция верстки с WordPress, настройка ACF, кастомные темы и WooCommerce-логика" },
          { text: "50+ проектов сдано в срок" },
        ],
      },
      {
        top: "Frontend Developer",
        accent: "(Freelance)",
        bottom: "2023 — настоящее время",
        info: "Разработка сайтов под ключ для малого бизнеса — от верстки до деплоя.",
        paragraph:
          "WordPress-разработка разного профиля: кастомные темы и шаблоны, настройка ACF, доработки и правки существующих сайтов, оптимизация скорости загрузки, подключение форм и интеграции. Проекты от лендингов до небольших интернет-магазинов на WooCommerce.",
      },
      {
        accent: "Pet-проекты /",
        bottom: "React-стек",
        info: "Личные проекты для прокачки современного стека — React, TypeScript, Next.js: компонентная архитектура, типизация, деплой.",
        bullets: [
          {
            text: "Сайт-портфолио: React, TypeScript, Tailwind CSS. Полностью компонентный, RU/EN, задеплоен на GitHub Pages",
            link: { text: "GitHub", href: GH_RESUME },
          },
          {
            text: "Магазин (в разработке): Next.js, TypeScript, Tailwind, PostgreSQL, Prisma — fullstack-проект с реальной базой данных",
            link: { text: "GitHub", href: GH_PIZZA },
          },
        ],
      },
    ],
  },
  projects: {
    title: "Проекты",
    carousel: "Коммерческие проекты",
    of: "из",
    prev: "Предыдущий проект",
    next: "Следующий проект",
    visit: "Открыть сайт ↗",
    screenshot: "Скриншот сайта",
    mobile: "Мобильная версия",
  },
  resume: {
    title: "Резюме",
    open: "Открыть резюме",
    react: {
      role: "Frontend-разработчик",
      title: "React / Next.js",
      text: "TypeScript, Next.js, Tailwind CSS. Pet-проекты, компонентная архитектура и коммерческий опыт сложной клиентской логики.",
    },
    wp: {
      role: "WordPress-разработчик",
      title: "WordPress / WooCommerce",
      text: "Кастомные темы, ACF, логика WooCommerce, оплата Т-Банк и доставка СДЭК. 50+ сданных проектов.",
    },
  },
  contacts: {
    title: "Открыт к новым возможностям",
    text: "Ищу позицию Frontend-разработчика — WordPress/JS или React/Next.js, беру проекты на фриланс. Готов к удалённой работе.",
  },
  footer: { slogan: "Из верстки — во фронтенд. Из фронтенда — в продукт." },
};

const en: HubText = {
  header: {
    nav: [
      { text: "About", link: "about" },
      { text: "Skills", link: "skills" },
      { text: "Experience", link: "experience" },
      { text: "Projects", link: "projects" },
      { text: "Resume", link: "resume" },
      { text: "Contact", link: "contacts" },
    ],
    contact: "Get in touch",
  },
  hero: {
    role: "Frontend Developer",
    timeLabel: "Local time · GMT+6",
    name: ["Daniil", "Polygalov"],
    intro:
      "2+ years of commercial web development: responsive layouts, custom WordPress themes, complex JavaScript logic for online stores. Now building with React, TypeScript and Next.js — open to remote roles and freelance projects worldwide.",
    cta: "View projects",
    stat: "commercial projects",
  },
  about: {
    title: "About me",
    paragraphs: [
      "Frontend developer with 2+ years of commercial experience.",
      "I started with markup and CMS integration, which gave me a solid foundation: UI architecture, responsive design, performance and how interfaces behave on real production projects.",
      "Since then I've delivered 50+ commercial projects on WordPress and WooCommerce — from landing pages to online stores with complex custom logic, payment and shipping integrations.",
      "Now I'm moving into the React ecosystem: I write TypeScript, use Tailwind and I'm building a fullstack pet project with Next.js, PostgreSQL and Prisma.",
      "I prefer clean architecture without unnecessary dependencies — code that is easy to read and scale.",
    ],
    cards: [
      { title: "Code, not builders", text: "Custom code without page builders or templates" },
      { title: "Quality first", text: "Readable code, scalable structure" },
      { title: "Team player", text: "Git, clear communication, meeting deadlines" },
    ],
  },
  services: {
    title: "What I do",
    cards: [
      {
        title: "WordPress / WooCommerce",
        text: "Custom themes, ACF, complex JS logic for online stores, payment and shipping integrations, Telegram and email notifications. 50+ projects delivered on time.",
      },
      {
        title: "JavaScript & UI",
        text: "Interactive forms, popups, filters, quizzes and dynamic flows without page reloads.",
      },
      {
        title: "Animations",
        text: "GSAP + ScrollTrigger and custom vanilla JS animations for modern, expressive interfaces.",
      },
      {
        title: "React / Next.js (growing focus)",
        text: "TypeScript, component-driven approach, hooks, Tailwind. Building a fullstack Next.js project with PostgreSQL and Prisma — I understand how the backend and database work.",
      },
    ],
  },
  skills: {
    title: "My skills",
    lead: "The core of my",
    words: ["development", "work", "practice", "philosophy", "craft"],
    cards: [
      {
        title: "Frontend",
        items: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "Responsive layout", "Cross-browser layout"],
      },
      {
        title: "Learning & using in pet projects",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL / Prisma"],
      },
      {
        title: "Tools",
        items: ["Git / GitHub", "WordPress / ACF / WooCommerce", "REST API", "GSAP + ScrollTrigger", "Swiper, Fancybox"],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        top: "Frontend Developer",
        accent: "Usertech",
        bottom: "2024 — present",
        info: "Commercial websites and online stores — responsive, cross-browser, with non-trivial JS logic.",
        bullets: [
          { text: "Built WooCommerce cart editing in a popup without page reload: real-time price recalculation, option and weight changes" },
          { text: "Integrated the T-Bank payment gateway and CDEK shipping into an online store" },
          { text: "Built interactive interfaces: an interactive map, quizzes, catalog filters, forms sending to Telegram and email" },
          { text: "Animations with GSAP ScrollTrigger and vanilla JavaScript" },
          { text: "WordPress integration: custom themes, ACF, WooCommerce logic" },
          { text: "50+ projects delivered on time" },
        ],
      },
      {
        top: "Frontend Developer",
        accent: "(Freelance)",
        bottom: "2023 — present",
        info: "Turnkey websites for small businesses — from markup to deployment.",
        paragraph:
          "WordPress development of all kinds: custom themes and templates, ACF setup, improvements to existing sites, page speed optimization, forms and integrations. Projects range from landing pages to small WooCommerce stores.",
      },
      {
        accent: "Pet projects /",
        bottom: "React stack",
        info: "Personal projects to master the modern stack — React, TypeScript, Next.js: component architecture, typing, deployment.",
        bullets: [
          {
            text: "Portfolio site: React, TypeScript, Tailwind CSS. Fully component-based, RU/EN, deployed to GitHub Pages",
            link: { text: "GitHub", href: GH_RESUME },
          },
          {
            text: "Online store (in progress): Next.js, TypeScript, Tailwind, PostgreSQL, Prisma — a fullstack project with a real database",
            link: { text: "GitHub", href: GH_PIZZA },
          },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    carousel: "Commercial projects",
    of: "of",
    prev: "Previous project",
    next: "Next project",
    visit: "Visit site ↗",
    screenshot: "Screenshot of",
    mobile: "Mobile version of",
  },
  resume: {
    title: "Resume",
    open: "Open resume",
    react: {
      role: "Frontend Developer",
      title: "React / Next.js",
      text: "TypeScript, Next.js, Tailwind CSS. Pet projects, component architecture and commercial experience with complex client-side logic.",
    },
    wp: {
      role: "WordPress Developer",
      title: "WordPress / WooCommerce",
      text: "Custom themes, ACF, WooCommerce logic, payment and shipping integrations. 50+ delivered projects.",
    },
  },
  contacts: {
    title: "Open to new opportunities",
    text: "Looking for a Frontend Developer role (React / Next.js or WordPress) and freelance projects. Available for remote work, GMT+6.",
  },
  footer: { slogan: "From markup to frontend. From frontend to product." },
};

export const hubText: Localized<HubText> = { ru, en };

export const useHubText = () => hubText[useLocale()];
