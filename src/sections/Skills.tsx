import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, sectionMargin, Title, Typewriter } from "../components";
import { SkillsCards } from "../components/SkillsCards";
import { useHubText } from "../i18n/hub";
import skillsImg from "../assets/skills-img1.png";
import skillsImgSecond from "../assets/skills-img2.png";

interface Props {
  className?: string;
}

// Средняя карточка — акцентная (красная)
const variants = ["white", "red", "white"] as const;

export const Skills: React.FC<Props> = ({ className }) => {
  const t = useHubText().skills;

  return (
    <div className={cn("relative", className, sectionMargin)}>
      <img className="absolute 1600:left-[-50px] 1000:left-[-150px] sm:top-0 1000:w-[330px] w-[100px] top-[44px] left-[-39px]" src={skillsImg} alt="" aria-hidden />
      <img className="absolute 1600:right-[-50px] 1000:right-[-230px] sm:top-0 1000:w-[330px] w-[100px] top-[98px] right-[-40px]" src={skillsImgSecond} alt="" aria-hidden />
      <Container>
        <div className="flex flex-col lg:mb-20 mb-8">
          <div className="flex sm:items-center sm:flex-row flex-col-reverse gap-5 justify-between">
            <Title text={t.lead} size="xl" className="1200:text-[80px] 1000:text-[60px] text-[31px]" />
            <SectionHead number="003" text={t.title} />
          </div>
          <Typewriter words={t.words} />
        </div>
        <SkillsCards
          className="grid 1000:grid-cols-3 grid-cols-1 gap-3"
          cardInfo={t.cards.map((card, index) => ({
            title: card.title,
            number: String(index + 1).padStart(2, "0"),
            variant: variants[index % variants.length],
            items: card.items.map((text) => ({ text })),
          }))}
        />
      </Container>
    </div>
  );
};
