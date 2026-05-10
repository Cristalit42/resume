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
    link: 'about',
  },
  {
    text: 'Мои услуги',
    link: 'services',
  },
  {
    text: 'Навыки',
    link: 'skills',
  },
  {
    text: 'Опыт',
    link: 'expirience',
  },
  // {
  //   text: 'Проекты',
  //   link: 'projects',
  // },
  {
    text: 'Контакты',
    link: 'contacts',
  },
]


export const Header: React.FC<Props> = ({ className }) => {
  const [activeSection, setActiveSection] = React.useState('');
React.useEffect(() => {
  const sections = document.querySelectorAll('[data-section]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: '0px 0px -70% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <header className={cn('py-4 fixed w-full z-50 bg-[#c2c2c2cc] backdrop-blur-md', className)}>
      <Container className="flex items-center justify-between gap-5">
        <img className="w-[130px] sm:w-[200px] " src={logo} alt="Logo" />

        <nav className="lg:flex hidden items-center gap-5 justify-between max-w-[530px]">
          {
            links.map((item) => {
              return (
                <a
                  className={cn(
                    "group flex flex-col gap-1 font-chetty text-[13px] uppercase hover:text-primary transition",
                    activeSection === item.link && 'text-primary'
                  )}
                  href={`#${item.link}`}
                >
                  {item.text}
                  <span
                    className={cn(
                      "block w-full h-[1px] bg-primary max-w-0 group-hover:max-w-full transition-all duration-300",
                      activeSection === item.link && 'max-w-full'
                    )}
                  ></span>
                </a>
              )
            })
          }
        </nav>

        <Button variant="black">
          Обсудить проект
        </Button>
      </Container>
    </header>
  );
};