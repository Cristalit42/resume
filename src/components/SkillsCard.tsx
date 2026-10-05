import React from "react";
import { cn } from "../shared/lib/cn";
import { Title } from "./Title";

type SkillsCardVariant = "white" | "red";

interface Props {
  className?: string;
  title: string;
  number: string;
  variant: SkillsCardVariant;
  items: {
    text: string;
  }[];
}

const variantClasses: Record<SkillsCardVariant, { card: string; number: string }> = {
  white: { card: "bg-[#f4f4f4] text-black", number: "text-primary" },
  red: { card: "bg-primary text-white", number: "text-white" },
};

export const SkillsCard: React.FC<Props> = ({ className, title, variant, number, items }) => {
  const classes = variantClasses[variant];

  return (
    <div className={className}>
      <div className={cn("lg:py-8 lg:px-6 py-6 px-4 h-full min-h-[400px] max-h-max", classes.card)}>
        <div className="flex items-center gap-5 justify-between mb-7">
          <Title size="2sm" text={title} />
          <Title size="2sm" text={number} className={classes.number} />
        </div>
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <div key={item.text} className="text-base pl-2 border-l-2 border-gray-300">
              {item.text.trim()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
