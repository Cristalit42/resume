import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, Title, Text, Button, Clock, sectionMargin } from "../components/";

import heroImg from "../assets/hero-img.png";


interface Props {
  className?: string;
}


export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sm:pt-[140px] pt-[100px] relative', className, sectionMargin)}>
      <Container className="relative">
        <div className="flex sm:p-5 p-3 items-center justify-between gap-5 bg-primary 1200:absolute top-0 right-4 w-full 1200:max-w-[570px]">
          <Text className="text-white sm:text-2xl text-xs">
            Frontend / WordPress<br />разработчик
          </Text>
          <div className="flex flex-col sm:gap-2 gap-1">
            <Text className="text-white opacity-70 sm:text-base text-xs ">
              Время KGZ
            </Text>
            <Clock />
          </div>
        </div>
        <div className="max-w-[660px]">
          <Title text={<>Даниил <br /> Полыгалов</>} size="2xl" className="1200:mb-5 1200:text-[80px] sm:text-[60px] text-[34px] mb-0"></Title>
          <Text className="1200:mb-8 mb-4 sm:text-base text-sm">
            Создаю кастомные сайты, интерфейсы и сложную frontend-логику для WordPress и WooCommerce без использования тяжелых конструкторов.
          </Text>
          <Button variant="primary" className="mb-5">
            Смотреть кейсы
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.15833 2.68333V1.34167V0L11.8417 0V2.68333H9.15833Z" fill="white" />
              <path d="M0 11.8417L0 10.5L0 9.15833H2.68333V11.8417H0Z" fill="white" />
              <path d="M18.3167 11.8417V10.5V9.15833H21V11.8417H18.3167Z" fill="white" />
              <path d="M9.15833 21V19.6583V18.3167H11.8417V21H9.15833Z" fill="white" />
              <path d="M12.2596 5.67788C12.2462 5.66446 12.2316 5.07062 12.2273 4.35808L12.2191 3.0625H14.875V4.34583C14.875 5.44775 14.8689 5.63529 14.8313 5.67292C14.7936 5.71054 14.6163 5.71579 13.5357 5.70937C12.8473 5.70529 12.273 5.69129 12.2596 5.67788Z" fill="white" />
              <path d="M15.2813 7.45413C15.2793 6.34288 15.2839 6.21221 15.3271 6.17079C15.3691 6.13083 15.5245 6.125 16.5833 6.125C17.3209 6.125 17.82 6.13637 17.9375 6.18333V8.77917H16.6542C15.5522 8.77917 15.3647 8.77304 15.3271 8.73542C15.2898 8.69808 15.283 8.51346 15.2813 7.45413Z" fill="white" />
              <path d="M3.0625 11.8417L3.06163 10.5L3.06104 9.15833H5.71229L5.71667 11.8417H3.0625Z" fill="white" />
              <path d="M6.12471 11.8417L6.12617 10.5L6.12762 9.15833H8.77683L8.77887 11.8417H6.12471Z" fill="white" />
              <path d="M9.15804 11.8417V10.5V9.15833H11.8414V11.8417H9.15804Z" fill="white" />
              <path d="M12.2205 11.8417L12.2203 10.5L12.22 9.15833H14.8767L14.8747 11.8417H12.2205Z" fill="white" />
              <path d="M15.283 11.8417L15.2848 10.5L15.2862 9.15833L17.9352 9.15833L17.9372 11.8417L15.283 11.8417Z" fill="white" />
              <path d="M15.3271 14.8313C15.2895 14.7936 15.2836 14.6075 15.2851 13.5042L15.2868 12.2208L17.9375 12.2208L17.9387 14.8313L17.8433 14.8534C17.7908 14.8657 17.213 14.8756 16.5594 14.8753C15.542 14.875 15.3644 14.8689 15.3271 14.8313Z" fill="white" />
              <path d="M12.2188 16.5979C12.2168 15.5 12.2214 15.3703 12.2646 15.3291C12.3066 15.2892 12.4647 15.2833 13.55 15.2833C14.611 15.2833 14.7936 15.2898 14.8313 15.3271C14.8686 15.3647 14.875 15.5476 14.875 16.6104C14.875 17.6995 14.8695 17.8552 14.8292 17.8937C14.7898 17.9314 14.6043 17.9375 13.5313 17.9375C12.3083 17.9375 12.2783 17.9363 12.25 17.8792C12.2319 17.8433 12.22 17.3507 12.2188 16.5979Z" fill="white" />
            </svg>
          </Button>
          <div className="flex flex-col gap-1 max-w-[250px]">
            <div className="bg-gradient-to-b from-black/50 via-black/50 to-[#ffffff] bg-clip-text text-transparent font-luna sm:text-[80px] text-[40px] leading-[120%]">
              50+
            </div>
            <Text className="text-black sm:text-base text-sm">
              проектов разного<br /> масштаба и сложности
            </Text>
          </div>
        </div>

      </Container>
      <img className="absolute right-0 bottom-[-30px] 1200:z-[1] z-[-1] w-[250px]  sm:w-[350px] 1000:w-[600px]" src={heroImg} alt="Hero Image" />
    </div>
  );
};