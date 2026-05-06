import React from "react";
import { cn } from "../shared/lib/cn";
import { Title, Text } from "./";

interface Props {
  className?: string;
  number: string;
  title: string;
  text: string;
}

export const ServicesCard: React.FC<Props> = ({ className, number, text, title }) => {
  return (
    <div className={cn('relative sm:p-7 p-4 bg-[#f4f4f4] flex flex-col sm:flex-row sm:items-center sm:gap-5 justify-between', className)}>
      <svg className="absolute top-0 sm:left-[60px] left-[15px]" width="68" height="43" viewBox="0 0 68 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddddd_1736_36)">
          <path d="M9 2H59" stroke="#FF370C" stroke-width="2" />
        </g>
        <defs>
          <filter id="filter0_ddddd_1736_36" x="0" y="-1" width="68" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0.74 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1736_36" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0.64 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_1736_36" result="effect2_dropShadow_1736_36" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="11" />
            <feGaussianBlur stdDeviation="3.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0.38 0" />
            <feBlend mode="normal" in2="effect2_dropShadow_1736_36" result="effect3_dropShadow_1736_36" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0.11 0" />
            <feBlend mode="normal" in2="effect3_dropShadow_1736_36" result="effect4_dropShadow_1736_36" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="31" />
            <feGaussianBlur stdDeviation="4.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0.01 0" />
            <feBlend mode="normal" in2="effect4_dropShadow_1736_36" result="effect5_dropShadow_1736_36" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_1736_36" result="shape" />
          </filter>
        </defs>
      </svg>
      <Title text={number} size="md" className="sm:text-[50px] text-[35px]"></Title>

      <div className="flex flex-col sm:gap-4 gap-1 items-start max-w-[420px]">
        <Title text={title} size="sm" className="sm:text-[18px] text-[15px]"></Title>
        <Text className="opacity-60 sm:text-[16px] text-sm">
          {text}
        </Text>
      </div>
    </div>
  );
};