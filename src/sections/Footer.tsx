import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, Text } from "../components";

import logo from '../assets/footer-logo.svg'

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('bg-primary pt-7', className)}>
      <Container className="flex flex-col items-center gap-6 mb-10">
        <img src={logo} alt="Logo" />
        <Text className="text-center text-gray-100">Создаю кастомные сайты, интерфейсы и WooCommerce <br />решения для бизнеса.</Text>
      </Container>
      <p className="font-luna text-[6vw] text-center leading-[80%] mb-[-10px]" style={{ background: 'linear-gradient(180deg, #ffffff97 0%, rgba(255, 255, 255, 0) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Даниил Полыгалов</p>
    </footer>
  );
};