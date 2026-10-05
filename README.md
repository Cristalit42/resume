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
- Многостраничная сборка Vite: хаб + резюме React и WordPress, на русском и английском (`/resume/`, `/resume/en/`, `/resume/en/react/` …)
- i18n без библиотек: язык берётся из `<html lang>`, передаётся через React Context, тексты — в типизированных словарях (`src/i18n`, `src/data`)
- Слайдер проектов на CSS scroll-snap с мокапами браузера и телефона, скриншоты подхватываются через `import.meta.glob`
- Страницы резюме с печатью / сохранением в PDF (print-стили, A4)
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
