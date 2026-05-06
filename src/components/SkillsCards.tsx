import React from "react";
import { cn } from "../shared/lib/cn";
import { SkillsCard } from "./SkillsCard";

interface Props {
  className?: string;
  cardInfo: {
    title: string,
    number: string,
    variant: 'white' | 'red',
    items: {
      text: string;
    }[]
  }[];
}

export const SkillsCards: React.FC<Props> = ({ className, cardInfo }) => {
  return (
    <div className={cn('', className)}>
      {
        cardInfo.map((item, index) => {
          return (
            <SkillsCard className={index == 1 ? '1000:mt-5' : ''}  title={item.title} number={item.number} variant={item.variant} items={item.items}></SkillsCard>
          )
        })
      }
    </div>
  );
};