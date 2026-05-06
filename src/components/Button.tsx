import React from "react";
import { cn } from "../shared/lib/cn";

interface Props {
  className?: string;
  link?: string;
  variant: string;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({ className, children, link, variant }) => {

  let variantClass

  if (variant == 'black') {
    variantClass = 'bg-black'
  }
  if (variant == 'white') {
    variantClass = 'bg-white'
  }
  if (variant == 'primary') {
    variantClass = 'bg-primary'
  }

  return (
    <div className={className}>
      <a
        href={link ? `#${link}` : '#'}
        className={cn("font-luna py-5 px-5 text-white text-[10px] flex items-center gap-4 max-w-max sm:px-9 sm:py-8 sm:text-[12px] text-nowrap", variantClass)}
      style={{
        clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)"
      }}
      >
      {children}
    </a>
    </div >
  );
};