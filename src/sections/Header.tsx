import React from "react";
import { cn } from "../shared/lib/cn";

import logo from "../assets/logo.svg"

import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { LangSwitch } from "../components/LangSwitch";
import { useHubText } from "../i18n/hub";



interface Props {
  className?: string;
}



export const Header: React.FC<Props> = ({ className }) => {
  const t = useHubText().header;
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

        <nav className="lg:flex hidden items-center gap-5 justify-between max-w-[600px]">
          {
            t.nav.map((item) => {
              return (
                <a
                  key={item.link}
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

        <div className="flex items-center sm:gap-6 gap-3">
          <LangSwitch page="hub" />
          <Button variant="black">{t.contact}</Button>
        </div>
      </Container>
    </header>
  );
};