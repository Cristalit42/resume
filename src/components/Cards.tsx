import React from "react";
import { cn } from "../shared/lib/cn";
import { Card } from "./Card";

type CardsVariant = "grid" | "flex";

interface CardInfo {
  title: React.ReactNode;
  text: React.ReactNode;
  info?: React.ReactNode;
  rows?: boolean;
}

interface Props {
  className?: string;
  variant: CardsVariant;
  cardsInfo: CardInfo[];
}

const listClasses: Record<CardsVariant, string> = {
  grid: "grid gap-[10px] grid-cols-3",
  flex: "flex flex-col",
};

const cardClasses: Record<CardsVariant, string> = {
  grid: "min-h-[80px] sm:min-h-[270px] bg-[linear-gradient(180deg,_#f3f3f3_0%,_#e4e4e4_79.82%)]",
  flex: "grid 1000:grid-cols-[400px_270px_1fr] grid-cols-1 items-center justify-between gap-5 1000:py-10 py-6 1000:px-6 px-4 bg-[#f4f4f4] shadow-custom",
};

export const Cards: React.FC<Props> = ({ className, cardsInfo, variant }) => {
  return (
    <div className={cn(listClasses[variant], className)}>
      {cardsInfo.map((item, index) => (
        <div
          key={index}
          style={variant === "flex" ? { zIndex: cardsInfo.length - index } : undefined}
          className={variant === "grid" && index === 1 ? "mt-5" : ""}
        >
          {item.rows && (
            <div className="hidden sm:flex gap-1 items-center mb-4">
              {Array.from({ length: index + 1 }, (_, i) => (
                <span key={i} className="h-[20px] w-[2px] bg-primary"></span>
              ))}
            </div>
          )}

          <Card
            className={cardClasses[variant]}
            title={item.title}
            text={item.text}
            info={item.info}
          />
        </div>
      ))}
    </div>
  );
};
