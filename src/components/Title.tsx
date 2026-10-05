import React, { type ReactNode } from "react";
import { cn } from "../shared/lib/cn";
import { useReveal } from "../shared/lib/useReveal";
import { splitWords } from "./AnimationText";

type TitleSize = "xs" | "sm" | "2sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  size?: TitleSize;
  className?: string;
  text: ReactNode;
}

const tagBySize = {
  xs: "h5",
  sm: "h4",
  "2sm": "h4",
  md: "h3",
  lg: "h2",
  xl: "h2",
  "2xl": "h1",
} as const;

export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
  const { ref, visible } = useReveal<HTMLHeadingElement>();

  return React.createElement(
    tagBySize[size],
    {
      ref,
      className: cn("font-luna animate-text", visible && "animate", className),
    },
    splitWords(text)
  );
};
