import React from "react";
import { cn } from "../shared/lib/cn";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1300px] px-[10px]', className)}>{children}</div>;
};