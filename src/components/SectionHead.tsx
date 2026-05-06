import React from "react";
import { cn } from "../shared/lib/cn";
import { Title } from "./Title";

interface Props {
  className?: string;
  number: string;
  text: string;
  link?: string;
}

export const SectionHead: React.FC<Props> = ({ className, number, text, link }) => {
  return (
    <div className={cn('flex items-center gap-5', className)} id={link}>
      <div className="font-luna text-base text-[#c2c2c2] flex items-center gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H16V16H0V0Z" fill="#C2C2C2" />
        </svg>
        {number}
      </div>
      <Title text={text} size="xs" className="text-nowrap" />
    </div>
  );
};