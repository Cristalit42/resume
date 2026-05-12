import React from "react";
import { cn } from "../shared/lib/cn";
import { Title, Text } from "./";

interface Props {
  className?: string;
  title?: React.ReactNode;
  info?: React.ReactNode;
  text?: React.ReactNode;
}


export const Card: React.FC<Props> = ({ className, title, text, info }) => {
  return (
    <div className={cn('sm:py-5 sm:px-4 p-3 bg-white', className)}>
      <Title text={title} className="mb-2 sm:mb-4 text-sm sm:text-lg" />
      {info &&
        <Text className="text-gray-400">{info}</Text>
      }
      <Text className="sm:text-base text-xs">{text}</Text>
    </div>
  );
};