import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, sectionMargin, Text, Title } from "../components";
import { contacts } from "../data/profile";

interface Props {
  className?: string;
}


export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className, sectionMargin)}>
      <Container>
        <Title text='Открыт к новым возможностям' size="md" className="text-center 1000:mb-[25px] mb-[15px] 1000:text-[50px] text-[23px]"></Title>
        <Text className="text-center sm:mb-10 mb-5">Ищу позицию Frontend-разработчика — WordPress/JS или React/Next.js. Готов к удалённой работе.</Text>

        <div className="grid 1000:grid-cols-3 grid-cols-1 gap-4">
          {contacts.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className="bg-white py-10 px-6 block transition-all hover:scale-[1.02] duration-300"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)"
                }}>
                <p className="text-base text-gray-400 mb-4">
                  {item.label}:
                </p>
                <p className="font-luna 1300:text-[20px] text-[15px] uppercase text-black">
                  {item.text}
                </p>
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  );
};