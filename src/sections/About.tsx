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
            Frontend-разработчик с практическим опытом создания коммерческих сайтов, интернет-магазинов и кастомных WordPress-решений. Основной фокус — разработка удобных пользовательских интерфейсов и реализация нестандартной frontend-логики: popup-редактирование товаров, динамические формы, AJAX-запросы, фильтрация каталогов, кастомные dropdown-компоненты, слайдеры и анимации.
          </Text>
          <Text className="text-sm sm:text-base">
            Работаю без перегруженных page builder-решений, предпочитаю чистую архитектуру, производительность и контроль над проектом. Также имею опыт создания анимаций на чистом JavaScript и с использованием GSAP.
          </Text>
          <Text className="text-sm sm:text-base">
            Сейчас активно изучаю Next.js, TypeScript и Tailwind CSS для перехода на более современный frontend-стек.
          </Text>
          <Cards variant="grid" className="grid-cols-1 sm:grid-cols-3" cardsInfo={
            [
              {
                title: 'Чистый и понятный код',
                text: 'Удобная архитектура для дальнейшего масштабирования',
                rows: true
              },
              {
                title: 'Быстрая работа',
                text: 'Соблюдение сроков и понятная коммуникация',
                rows: true
              },
              {
                title: 'Кастомная разработка',
                text: 'Без перегруженных конструкторов и шаблонных решений',
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