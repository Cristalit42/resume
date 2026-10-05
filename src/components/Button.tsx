import React from "react";
import { cn } from "../shared/lib/cn";

type ButtonVariant = "black" | "white" | "primary";

interface Props {
  className?: string;
  link?: string;
  variant: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  black: "bg-black",
  white: "bg-white text-black",
  primary: "bg-primary",
};

const DEFAULT_LINK = "https://t.me/Cristalit42";

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
  variant,
  link = DEFAULT_LINK,
}) => {
  const isExternal = /^https?:\/\//.test(link);

  return (
    <div className={className}>
      <a
        href={link}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        className={cn(
          "font-luna py-5 px-5 text-white text-[10px] flex items-center gap-4 max-w-max sm:px-9 sm:py-8 sm:text-[12px] text-nowrap hover:scale-105 duration-300",
          variantClasses[variant]
        )}
        style={{
          clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)",
        }}
      >
        {children}
      </a>
    </div>
  );
};
