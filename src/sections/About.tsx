import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, Text, Cards, sectionMargin } from "../components";
import { useHubText } from "../i18n/hub";

import aboutImg from "../assets/about-img.png";

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  const t = useHubText().about;

  return (
    <div className={cn("relative", className, sectionMargin)}>
      <Container className="flex 1000:flex-row flex-col justify-between items-start gap-5 w-full relative z-20">
        <SectionHead number="001" text={t.title} />
        <div className="flex flex-col gap-3 w-full max-w-[900px]">
          {t.paragraphs.map((paragraph) => (
            <Text key={paragraph} className="text-sm sm:text-base">
              {paragraph}
            </Text>
          ))}
          <Cards
            variant="grid"
            className="grid-cols-1 sm:grid-cols-3"
            cardsInfo={t.cards.map((card) => ({ ...card, rows: true }))}
          />
        </div>
      </Container>
      <img className="hidden sm:block absolute 1300:left-0 left-[-150px] 1000:top-[32px] w-[375px] top-[200px] z-10" src={aboutImg} alt="" aria-hidden />
    </div>
  );
};
