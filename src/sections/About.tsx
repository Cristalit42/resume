import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, Text, Cards, sectionMargin } from "../components";

import aboutImg from '../assets/about-img.png'

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('relative', className, sectionMargin)}>
      <Container className="flex 1000:flex-row flex-col justify-between items-start gap-5 w-full relative z-20">
        <SectionHead number="001" text="Обо мне" link="about" />
        <div className="flex flex-col gap-3 w-full max-w-[900px]">
          <Text className="text-sm sm:text-base">
            Frontend-разработчик с 2+ годами коммерческого опыта.
          </Text>
          <Text className="text-sm sm:text-base">
            Начинал с верстки и интеграции — это дало крепкую базу:
            понимание архитектуры UI, адаптивности, производительности
            и работы интерфейсов под нагрузкой реальных проектов.

          </Text>
          <Text className="text-sm sm:text-base">
            Сейчас основной фокус — React. Пишу на TypeScript,
            использую Tailwind, разрабатываю fullstack-проект
            на Next.js с PostgreSQL и Prisma.
          </Text>
          <Text className="text-sm sm:text-base">
            Предпочитаю чистую архитектуру без лишних зависимостей,
            код который легко читать и масштабировать.
          </Text>
          <Cards variant="grid" className="grid-cols-1 sm:grid-cols-3" cardsInfo={
            [
              {
                title: 'Пишу, а не собираю',
                text: 'Кастомный код без конструкторов и шаблонов',
                rows: true
              },
              {
                title: 'Слежу за качеством',
                text: 'Читаемый код, масштабируемая структура',
                rows: true
              },
              {
                title: 'Работаю в команде',
                text: 'Git, понятная коммуникация, соблюдение сроков',
                rows: true
              },
            ]
          }></Cards>
        </div>
      </Container>
      <img className="hidden sm:block absolute 1300:left-0 left-[-150px] 1000:top-[32px] w-[375px] top-[200px] z-10" src={aboutImg} alt="About decor" />
    </div>
  );
};