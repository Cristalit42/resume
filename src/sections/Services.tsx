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
        <SectionHead number="002" text="Мои услуги" link="services" className="mb-10"></SectionHead>
        <ServicesCards 
        serviceCardsInfo={[
          {
            number: "01",
            title: "Разработка frontend-интерфейсов",
            text: "Создаю адаптивные, кроссбраузерные и UX-ориентированные интерфейсы с акцентом на производительность и удобство пользователя."
          },
          {
            number: "02",
            title: "WordPress / WooCommerce разработка",
            text: "Разрабатываю кастомные темы, настраиваю WooCommerce, реализую нестандартную логику интернет-магазинов и работаю с ACF."
          },
          {
            number: "03",
            title: "JavaScript-функционал",
            text: "Интерактивные формы, popup-системы, AJAX-логика, динамические корзины, фильтрация, слайдеры, квизы и сложные пользовательские сценарии."
          },
          {
            number: "04",
            title: "Анимации и взаимодействие",
            text: "Разработка анимаций на чистом JavaScript и GSAP + ScrollTrigger для современных визуальных решений."
          },
        ]} />
      </Container>
    </div>
  );
};