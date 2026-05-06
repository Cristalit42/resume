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
            title: "WooCommerce: кастомная корзина",
            info: "Реализовал полноценную систему редактирования товаров в корзине через popup-интерфейс без перезагрузки страницы.",
            text: "Что было сделано: Редактирование товаров через модальное окно, динамический пересчет цены и количества, изменение опций товара в реальном времени, логика граммовки и количества, улучшение пользовательского сценария покупки.",
            rows: false
          },
          {
            title: "JavaScript UI / UX решения",
            info: "Разработка сложных пользовательских интерфейсов:",
            text: "продвинутые слайдеры на Swiper, анимации на GSAP + ScrollTrigger, кастомные dropdown-компоненты интерактивные формы, квизы, popup-системы динамические интерфейсы без перезагрузки страницы",
            rows: false
          },
        ]}></Cards>
      </Container>
    </div>
  );
};