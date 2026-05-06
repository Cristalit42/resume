import React from "react";
import { cn } from "../shared/lib/cn";

import logo from "../assets/logo.svg"

import { Container } from "../components/Container";
import { Button } from "../components/Button";



interface Props {
  className?: string;
}

const links = [
  {
    text: 'Обо мне',
    link: '#about',
    active: true
  },
  {
    text: 'Мои услуги',
    link: '#services',
    active: false
  },
  {
    text: 'Навыки',
    link: '#skills',
    active: false
  },
  {
    text: 'Опыт',
    link: '#expirience',
    active: false
  },
  {
    text: 'Проекты',
    link: '#projects',
    active: false
  },
  {
    text: 'Контакты',
    link: '#contacts',
    active: false
  },
]



export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn( 'py-4 fixed w-full z-50 bg-[#c2c2c2cc] backdrop-blur-md', className)}>
      <Container className="flex items-center justify-between gap-5">
        <img className="w-[130px] sm:w-[200px] " src={logo} alt="Logo" />

        <nav className="lg:flex hidden items-center gap-5 justify-between max-w-[530px]">
          {
            links.map((item) => {
              return (
                <a className={cn("group flex flex-col gap-1 font-chetty text-[13px] uppercase hover:text-primary transition", item.active ? 'text-primary' : '')} href={item.link}>
                  {item.text}
                  <span className={cn("group block w-full h-[1px] bg-primary max-w-0 group-hover:max-w-full transition-all duration-300", item.active ? 'max-w-full' : '')}></span>
                </a>
              )
            })
          }
        </nav>

        <Button link="213" variant="black">
          Обсудить проект
        </Button>
      </Container>
    </header>
  );
};