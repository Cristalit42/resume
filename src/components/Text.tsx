import React, { useEffect, useRef, type PropsWithChildren } from "react";
import { cn } from "../shared/lib/cn";
import { AnimateText } from "./AnimationText";

interface Props {
  className?: string;
}

export const Text: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      AnimateText(ref.current);
    }
  }, []);

  return (
    <p
      ref={ref}
      className={cn(
        "font-chetty leading-[140%] text-gray-700 animate-text",
        className
      )}
    >
      {children}
    </p>
  );
};