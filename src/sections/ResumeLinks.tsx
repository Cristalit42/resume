import React from "react";
import { cn } from "../shared/lib/cn";
import { Button, Container, SectionHead, sectionMargin, Text, Title } from "../components";
import { useLocale } from "../i18n/context";
import { useHubText } from "../i18n/hub";
import { pageUrl } from "../i18n/locale";

interface Props {
  className?: string;
}

export const ResumeLinks: React.FC<Props> = ({ className }) => {
  const locale = useLocale();
  const t = useHubText().resume;

  const cards = [
    { ...t.react, number: "01", href: pageUrl("react", locale), isRed: true },
    { ...t.wp, number: "02", href: pageUrl("wp", locale), isRed: false },
  ];

  return (
    <div className={cn("", className, sectionMargin)}>
      <Container>
        <SectionHead number="006" text={t.title} className="mb-10" />

        <div className="grid 1000:grid-cols-2 grid-cols-1 gap-3">
          {cards.map((card) => (
            <div
              key={card.href}
              className={cn(
                "flex flex-col justify-between gap-8 lg:p-8 p-5 min-h-[320px]",
                card.isRed ? "bg-primary text-white" : "bg-[#f4f4f4] text-black"
              )}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-5">
                  <Text className={cn("sm:text-base text-sm", card.isRed ? "text-white/70" : "text-gray-400")}>{card.role}</Text>
                  <Title text={card.number} size="2sm" className={card.isRed ? "text-white" : "text-primary"} />
                </div>
                <Title text={card.title} size="md" className="1200:text-[34px] sm:text-[26px] text-[20px]" />
                <Text className={cn("sm:text-base text-sm max-w-[480px]", card.isRed && "text-white/90")}>{card.text}</Text>
              </div>
              <Button variant={card.isRed ? "white" : "black"} link={card.href}>
                {t.open}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
