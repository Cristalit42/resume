import React from "react";
import { cn } from "../shared/lib/cn";
import { Title } from "./Title";

interface Props {
  className?: string;
  title: string;
  number: string;
  variant: 'white' | 'red',
  items: {
    text: string;
  }[]
}


export const SkillsCard: React.FC<Props> = ({ className, title, variant, number, items }) => {

  let variantClass
  let variantNumClass
  if (variant == 'white') {
    variantClass = 'bg-[#f4f4f4] text-black'
    variantNumClass = 'text-primary'
  }
  if (variant == 'red') {
    variantClass = 'bg-primary text-white'
    variantNumClass = 'text-white'
  }

  return (
    <div className={cn('', className)}>
      <div className={cn('lg:py-8 lg:px-6 py-6 px-4 h-full min-h-[400px] max-h-max', variantClass)}>
        <div className="flex items-center gap-5 justify-between mb-7">
          <Title size="2sm" text={title} />
          <Title size="2sm" text={number} className={variantNumClass} />
        </div>
        <div className="flex flex-col gap-5">
          {
            items.map((item) => {
              return (
                <div className="text-base pl-2 border-l-2 border-gray-300">
                  {item.text}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};