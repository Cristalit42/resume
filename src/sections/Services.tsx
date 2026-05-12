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
        <SectionHead number="002" text="Что я умею" link="services" className="mb-10"></SectionHead>
        <ServicesCards
          serviceCardsInfo={[
            {
              number: "01",
              title: "React-разработка",
              text: "Компонентный подход, хуки (useState, useEffect), работа с props и state, TypeScript, Tailwind CSS."
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
              title: "Fullstack (в развитии)",
              text: "Next.js, PostgreSQL, Prisma — строю реальный проект, понимаю как устроен бэк и работа с БД."
            },
          ]} />
      </Container>
    </div>
  );
};