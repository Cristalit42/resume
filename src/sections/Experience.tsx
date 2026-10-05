import React from "react";
import { cn } from "../shared/lib/cn";
import { Cards, Container, SectionHead, sectionMargin } from "../components";
import { useHubText, type HubExperienceItem } from "../i18n/hub";

interface Props {
  className?: string;
}

const renderTitle = (item: HubExperienceItem) => (
  <>
    {item.top && (
      <>
        {item.top}
        <br />
      </>
    )}
    <span className="text-primary">{item.accent}</span>
    <br />
    {item.bottom}
  </>
);

const renderText = (item: HubExperienceItem) => {
  if (!item.bullets) return item.paragraph;

  return (
    <>
      {item.bullets.map((bullet, index) => (
        <React.Fragment key={bullet.text}>
          {index > 0 && (
            <>
              <br />
              <br />
            </>
          )}
          <span className="text-primary">—</span> {bullet.text}
          {bullet.link && (
            <>
              {" "}
              <a className="text-primary" href={bullet.link.href} target="_blank" rel="noopener noreferrer">
                {bullet.link.text}
              </a>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export const Experience: React.FC<Props> = ({ className }) => {
  const t = useHubText().experience;

  return (
    <div className={cn("", className, sectionMargin)}>
      <Container>
        <SectionHead number="004" text={t.title} className="mb-10" />
        <Cards
          variant="flex"
          cardsInfo={t.items.map((item) => ({
            title: renderTitle(item),
            info: item.info,
            text: renderText(item),
          }))}
        />
      </Container>
    </div>
  );
};
