import React from "react";
import { cn } from "../shared/lib/cn";

interface BrowserProps {
  className?: string;
  domain: string;
  image?: string;
  placeholder?: React.ReactNode;
}

/** Окно браузера. Длинный скриншот (full page) плавно прокручивается при наведении. */
export const BrowserMockup: React.FC<BrowserProps> = ({ className, domain, image, placeholder }) => (
  <div className={cn("bg-white shadow-custom", className)}>
    <div className="flex items-center gap-3 h-7 sm:h-9 px-3 border-b border-[#e4e4e4]">
      <div className="flex gap-1.5" aria-hidden>
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#c2c2c2]" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#c2c2c2]" />
      </div>
      <div className="flex-1 max-w-[340px] mx-auto bg-[#f4f4f4] text-[10px] sm:text-xs text-gray-500 text-center py-0.5 sm:py-1 truncate">
        {domain}
      </div>
    </div>
    <div className="relative aspect-[16/9] overflow-hidden bg-[#f4f4f4]">
      {image ? (
        <img
          src={image}
          alt={`Скриншот сайта ${domain}`}
          loading="lazy"
          className="mockup-scroll absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        placeholder
      )}
    </div>
  </div>
);

interface PhoneProps {
  className?: string;
  image: string;
  alt: string;
}

export const PhoneMockup: React.FC<PhoneProps> = ({ className, image, alt }) => (
  <div className={cn("bg-black p-[4px] sm:p-[6px] rounded-[16px] sm:rounded-[26px] shadow-custom", className)}>
    <div className="relative aspect-[9/19] overflow-hidden rounded-[12px] sm:rounded-[20px] bg-white">
      <img src={image} alt={alt} loading="lazy" className="mockup-scroll absolute inset-0 w-full h-full object-cover object-top" />
    </div>
  </div>
);
