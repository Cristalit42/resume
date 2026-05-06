import React from "react";
import { cn } from "../shared/lib/cn";
import { ServicesCard } from "./ServiceCard";

interface Props {
  className?: string;
  serviceCardsInfo: {
    number: string,
    title: string,
    text: string,
  }[];
}

export const ServicesCards: React.FC<Props> = ({ className, serviceCardsInfo }) => {

  return (
    <div className={''}>
      <div className={cn('grid lg:grid-cols-2 grid-cols-1 gap-[2px] ', className)}>
        {
          serviceCardsInfo.map((item) => {
            return (
              <ServicesCard number={item.number} title={item.title} text={item.text} ></ServicesCard>
            )
          })
        }
      </div>
    </div >
  );
};