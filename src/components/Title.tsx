import clsx from 'clsx';
import React, { type ReactNode } from 'react';

type TitleSize = 'xs' | 'sm' | '2sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
  size?: TitleSize;
  className?: string;
  text: ReactNode;
}

export const Title: React.FC<Props> = ({ text, size = 'sm', className }) => {
  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    '2sm': 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h2',
    '2xl': 'h1',
  } as const;

  const mapClassNameBySize = {
    xs: 'text-[16px]',
    sm: 'text-[18px]',
    '2sm': 'text-[22px]',
    md: 'text-[50px]',
    lg: 'text-[32px] ',
    xl: 'text-[80px] ',
    '2xl': 'text-[80px] ',
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className, 'font-luna') },
    text,
  );
};
