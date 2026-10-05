import React, { type PropsWithChildren } from "react";
import { cn } from "../shared/lib/cn";
import { useReveal } from "../shared/lib/useReveal";
import { splitWords } from "./AnimationText";

interface Props {
  className?: string;
}

export const Text: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const { ref, visible } = useReveal<HTMLParagraphElement>();

  return (
    <p
      ref={ref}
      className={cn(
        "font-chetty leading-[140%] text-gray-700 animate-text",
        visible && "animate",
        className
      )}
    >
      {splitWords(children)}
    </p>
  );
};
