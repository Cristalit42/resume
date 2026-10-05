import React from "react";
import { cn } from "../shared/lib/cn";
import { Button, Container, SectionHead, sectionMargin, Text, Title } from "../components";
import { resumeLinks } from "../data/profile";

interface Props {
  className?: string;
}

const cards = [
  {
    number: "01",
    title: "React / Next.js",
    role: "Frontend-разработчик",
    text: "TypeScript, Next.js, Tailwind CSS. Pet-проекты, компонентная архитектура и коммерческий опыт сложной клиентской логики.",
    href: resumeLinks.react,
    variant: "red",
  },
  {
    number: "02",
    title: "WordPress / WooCommerce",
    role: "WordPress-разработчик",
    text: "Кастомные темы, ACF, логика WooCommerce, оплата Т-Банк и доставка СДЭК. 50+ сданных проектов.",
    href: resumeLinks.wp,
    variant: "white",
  },
] as const;

export const ResumeLinks: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className, sectionMargin)}>
      <Container>
        <SectionHead number="006" text="Резюме" className="mb-10" />

        <div className="grid 1000:grid-cols-2 grid-cols-1 gap-3">
          {cards.map((card) => {
            const isRed = card.variant === "red";
            return (
              <div
                key={card.href}
                className={cn(
                  "flex flex-col justify-between gap-8 lg:p-8 p-5 min-h-[320px]",
                  isRed ? "bg-primary text-white" : "bg-[#f4f4f4] text-black"
                )}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-5">
                    <Text className={cn("sm:text-base text-sm", isRed ? "text-white/70" : "text-gray-400")}>{card.role}</Text>
                    <Title text={card.number} size="2sm" className={isRed ? "text-white" : "text-primary"} />
                  </div>
                  <Title text={card.title} size="md" className="1200:text-[34px] sm:text-[26px] text-[20px]" />
                  <Text className={cn("sm:text-base text-sm max-w-[480px]", isRed ? "text-white/90" : "")}>{card.text}</Text>
                </div>
                <Button variant={isRed ? "white" : "black"} link={card.href}>
                  Открыть резюме
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
