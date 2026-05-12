import React from "react";
import { cn } from "../shared/lib/cn";
import { Cards, Container, SectionHead, sectionMargin } from "../components";

interface Props {
  className?: string;
}

export const Expirience: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className, sectionMargin)}>
      <Container>
        <SectionHead number="004" text="Опыт разработки" link="expirience" className="mb-10"></SectionHead>

        <Cards variant={"flex"} cardsInfo={[
          {
            title: (
              <>
                Frontend Developer  <br /><span className="text-primary">Usertech</span><br />
                2024 — настоящее время
              </>
            ),
            info: "Верстка коммерческих сайтов и интернет-магазинов — адаптивная, кроссбраузерная, с нестандартной JS-логикой.",
            text: (
              <>
                <span className="text-primary">—</span> Реализовал систему редактирования корзины WooCommerce
                через popup без перезагрузки: динамический пересчёт цены,
                смена опций и граммовки в реальном времени<br /><br />
                <span className="text-primary">—</span> Разработал интерактивные интерфейсы: квизы, фильтры
                каталогов, формы с отправкой в Telegram и на почту<br /><br />
                <span className="text-primary">—</span> Анимации на GSAP ScrollTrigger и чистом JavaScript<br /><br />
                <span className="text-primary">—</span> Интеграция верстки с WordPress, настройка ACF,
                кастомные темы и WooCommerce-логика<br /><br />
                <span className="text-primary">—</span> 50+ проектов сдано в срок
              </>
            ),
            rows: false
          },
          {
            title: (
              <>
                Frontend Developer   <br /><span className="text-primary">(Freelance)</span><br />
                2023 — настоящее время
              </>
            ),
            info: "Разработка сайтов под ключ для малого бизнеса — от верстки до деплоя.:",
            text: "WordPress-разработка разного профиля: кастомные темы и шаблоны, настройка ACF, доработки и правки существующих сайтов, оптимизация скорости загрузки, подключение форм и интеграции. Проекты от лендингов до небольших интернет-магазинов на WooCommerce.",
            rows: false
          },
          {
            title: (
              <>
                <br /><span className="text-primary">Pet-проекты</span>/<br />
                React-стек
              </>
            ),
            info: "Личные проекты для прокачки современного стека — React, TypeScript, Next.js. Не учебные задания, а реальные работающие продукты с продуманной архитектурой и деплоем.",
            text: (
              <>
                <span className="text-primary">—</span> <a className="text-primary" href="/">Резюме-сайт:</a> React, TypeScript, Tailwind CSS
                Полностью компонентный, задеплоен на <a className="text-primary" href="https://github.com/Cristalit42/resume">GitHub</a> Pages<br /> <br />
                <span className="text-primary">—</span> Магазин (в разработке): Next.js, TypeScript, Tailwind, PostgreSQL, Prisma Fullstack-проект с компонентной архитектурой и реальной базой данных.<a className="text-primary" href="https://github.com/Cristalit42/next-pizza"> GitHub </a>
              </>
      ),
      rows: false
          },
        ]}></Cards>
      </Container >
    </div >
  );
};