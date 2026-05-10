import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, sectionMargin, Text, Title } from "../components";

interface Props {
  className?: string;
}

const cardsInfo = [
  {
    title: 'Email:',
    text: 'cristalit42@gmail.com',
    link: 'mailto:cristalit42@gmail.com',
  },
  {
    title: 'Telegram::',
    text: '@Cristalit42',
    link: 'https://t.me/Cristalit42',
  },
  {
    title: 'Номер телефона::',
    text: '+996 555 381881',
    link: 'tel:996555381881',
  },
]

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className, sectionMargin)} id="contacts">
      <Container>
        <Title text='Обсудим проект?' size="md" className="text-center 1000:mb-[25px] mb-[15px] 1000:text-[50px] text-[23px]"></Title>
        <Text className="text-center sm:mb-10 mb-5">Готов к новым проектам, удалённому сотрудничеству <br /> и интересным задачам.</Text>

        <div className="grid 1000:grid-cols-3 grid-cols-1 gap-4">
          {cardsInfo.map((item) => {
            return (
              <a
                href={item.link}
                target="_blank"
                className="bg-white py-10 px-6 block transition-all hover:scale-[1.02] duration-300"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)"
                }}>
                <p className="text-base text-gray-400 mb-4">
                  {item.title}
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