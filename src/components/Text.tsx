import React, { type PropsWithChildren } from "react";
import { cn } from "../shared/lib/cn";

interface Props {
  className?: string;
}

export const Text: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <p className={cn('font-chetty leading-[140%] text-gray-700', className)}>
      {children}
    </p>
  );
};