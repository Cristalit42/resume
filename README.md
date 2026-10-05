# Даниил Полыгалов — сайт-резюме

Сайт-портфолио Frontend-разработчика. **Демо:** https://cristalit42.github.io/resume/

## Стек

- React 19 + TypeScript
- Vite
- Tailwind CSS (+ `clsx` / `tailwind-merge` через утилиту `cn`)
- Деплой на GitHub Pages (`gh-pages`)

## Что внутри

- Компонентная структура: `components/` — переиспользуемые UI-компоненты, `sections/` — секции страницы
- Анимация появления текста по словам: слова разбиваются при рендере (`splitWords`), запуск — через `IntersectionObserver` (хук `useReveal`); учитывается `prefers-reduced-motion`
- Подсветка активного пункта меню при скролле (`IntersectionObserver`)
- Эффект печатной машинки, живые часы по часовому поясу
- Адаптив под мобильные, планшеты и десктоп (кастомные брейкпоинты Tailwind)

## Запуск

```bash
npm install
npm run dev      # локально
npm run build    # сборка в dist/
npm run deploy   # публикация на GitHub Pages
```
