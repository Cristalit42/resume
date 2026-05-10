import clsx from 'clsx';
import React, { type ReactNode, useEffect, useRef } from 'react';
import { AnimateText } from './AnimationText';

type TitleSize = 'xs' | 'sm' | '2sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
  size?: TitleSize;
  className?: string;
  text: ReactNode;
}

export const Title: React.FC<Props> = ({ text, size = 'sm', className }) => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      AnimateText(ref.current);
    }
  }, []);

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
  xs: '',
  sm: '',
  '2sm': '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
};

  return React.createElement(
    mapTagBySize[size],
    {
      ref,
      className: clsx(
        mapClassNameBySize[size],
        className,
        'font-luna animate-text'
      ),
    },
    text
  );
};