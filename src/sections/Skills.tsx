import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, sectionMargin, Title, Typewriter } from "../components";
import skillsImg from '../assets/skills-img1.png'
import skillsImgSecond from '../assets/skills-img2.png'
import { SkillsCards } from "../components/SkillsCards";

interface Props {
  className?: string;
}

export const Skills: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('relative', className, sectionMargin)}>
      <img className="absolute 1600:left-[-50px] 1000:left-[-150px] sm:top-0 1000:w-[330px] w-[100px] top-[44px] left-[-39px]" src={skillsImg} alt="Skill decor" />
      <img className="absolute 1600:right-[-50px] 1000:right-[-230px] sm:top-0 1000:w-[330px] w-[100px] top-[98px] right-[-40px]" src={skillsImgSecond} alt="Skill decor" />
      <Container>
        <div className="flex flex-col lg:mb-20 mb-8">
          <div className="flex sm:items-center sm:flex-row flex-col-reverse gap-5 justify-between">
            <Title text='Основа моей' size="xl" className="1200:text-[80px] 1000:text-[60px] text-[31px]"></Title>
            <SectionHead number="003" text="Мои навыки"></SectionHead>
          </div>
          <Typewriter />
        </div>
        <SkillsCards className="grid 1000:grid-cols-3 grid-cols-1 gap-3" cardInfo={[
          {
            title: "Frontend",
            number: "01",
            variant: "white",
            items: [
              {
                text: "HTML5"
              },
              {
                text: "CSS3 / SCSS"
              },
              {
                text: "JavaScript (ES6+)"
              },
              {
                text: "Адаптивная верстка"
              },
              {
                text: "Кроссбраузерная верстка"
              },
              {
                text: "UX-ориентированная разработка"
              },
            ]
          },
          {
            title: "WordPress",
            number: "02",
            variant: "red",
            items: [
              {
                text: "Создание кастомных тем"
              },
              {
                text: "WooCommerce кастомизация"
              },
              {
                text: "ACF (Advanced Custom Fields)"
              },
              {
                text: "Кастомная логика интернет-магазинов"
              },
            ]
          },
          {
            title: "JavaScript-библиотеки",
            number: "03",
            variant: "white",
            items: [
              {
                text: "Swiper"
              },
              {
                text: "GSAP"
              },
              {
                text: "ScrollTrigger"
              },
              {
                text: "Fancybox"
              },
              {
                text: "MixItUp"
              },
            ]
          },
        ]}></SkillsCards>
      </Container>
    </div>
  );
};