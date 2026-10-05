import React from "react";
import { cn } from "../shared/lib/cn";
import { Container, Text } from "../components";
import { useLocale } from "../i18n/context";
import { useHubText } from "../i18n/hub";
import { profile } from "../data/profile";

import logo from "../assets/footer-logo.svg";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const locale = useLocale();
  const t = useHubText().footer;

  return (
    <footer className={cn("bg-primary pt-7", className)}>
      <Container className="flex flex-col items-center gap-6 mb-10">
        <img src={logo} alt="Logo" />
        <Text className="text-center text-gray-100">{t.slogan}</Text>
      </Container>
      <p
        className="font-luna text-[6vw] text-center leading-[80%] mb-[-10px]"
        style={{
          background: "linear-gradient(180deg, #ffffff97 0%, rgba(255, 255, 255, 0) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {profile.name[locale]}
      </p>
    </footer>
  );
};
