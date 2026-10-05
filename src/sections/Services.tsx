import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, sectionMargin, ServicesCards } from "../components";
import { useHubText } from "../i18n/hub";

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  const t = useHubText().services;

  return (
    <div className={cn("", className, sectionMargin)}>
      <Container>
        <SectionHead number="002" text={t.title} className="mb-10" />
        <ServicesCards
          serviceCardsInfo={t.cards.map((card, index) => ({
            ...card,
            number: String(index + 1).padStart(2, "0"),
          }))}
        />
      </Container>
    </div>
  );
};
