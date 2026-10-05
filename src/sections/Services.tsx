import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, sectionMargin, ServicesCards } from "../components";


interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className, sectionMargin)}>
      <Container>
        <SectionHead number="002" text="Что я умею" className="mb-10"></SectionHead>
        <ServicesCards
          serviceCardsInfo={[
            {
              number: "01",
              title: "WordPress / WooCommerce",
              text: "Кастомные темы, ACF, сложная JS-логика для интернет-магазинов, интеграции с Telegram и почтой. 50+ проектов сдано в срок."
            },
            {
              number: "02",
              title: "JavaScript и интерфейсы",
              text: "Интерактивные формы, popup-системы, фильтры, квизы, динамические сценарии без перезагрузки страницы."
            },
            {
              number: "03",
              title: "Анимации",
              text: "GSAP + ScrollTrigger, кастомные анимации на чистом JS для современных визуальных решений."
            },
            {
              number: "04",
              title: "React / Next.js (растущее направление)",
              text: "TypeScript, компонентный подход, хуки, Tailwind. Строю fullstack-проект на Next.js с PostgreSQL и Prisma — понимаю, как устроен бэк и работа с БД."
            },
          ]} />
      </Container>
    </div>
  );
};