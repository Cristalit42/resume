import React, { useRef, useState } from "react";
import { cn } from "../shared/lib/cn";
import { Container, SectionHead, sectionMargin, Text, Title } from "../components";
import { BrowserMockup, PhoneMockup } from "../components/Mockups";
import { commercialProjects, getScreenshots } from "../data/projects";

interface Props {
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const ArrowButton: React.FC<{ direction: "prev" | "next"; onClick: () => void }> = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Предыдущий проект" : "Следующий проект"}
    className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center bg-black text-white hover:bg-primary transition-colors duration-300"
    style={{ clipPath: "polygon(0 0, 80% 0, 100% 25%, 100% 100%, 20% 100%, 0 75%)" }}
  >
    <span className="font-luna text-lg sm:text-xl" aria-hidden>{direction === "prev" ? "←" : "→"}</span>
  </button>
);

export const Projects: React.FC<Props> = ({ className }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const total = commercialProjects.length;

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + total) % total; // по кругу
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
  };

  return (
    <div className={cn("", className, sectionMargin)}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <SectionHead number="005" text="Проекты" />
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-luna text-sm sm:text-base">
              <span className="text-primary">{pad(active + 1)}</span>
              <span className="text-[#c2c2c2]"> / {pad(total)}</span>
            </div>
            <div className="flex gap-2">
              <ArrowButton direction="prev" onClick={() => goTo(active - 1)} />
              <ArrowButton direction="next" onClick={() => goTo(active + 1)} />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Коммерческие проекты"
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {commercialProjects.map((project, index) => {
            const shots = getScreenshots(project.slug);
            return (
              <article
                key={project.slug}
                aria-roledescription="slide"
                aria-label={`${index + 1} из ${total}: ${project.domain}`}
                className="w-full shrink-0 snap-start grid 1000:grid-cols-[1.45fr_1fr] grid-cols-1 1000:gap-12 gap-8 items-center bg-[#f4f4f4] 1000:p-10 sm:p-7 p-4 pb-8"
              >
                {/* Мокапы */}
                <div className="relative 1000:mr-0">
                  <BrowserMockup
                    domain={project.domain}
                    image={shots.desktop}
                    placeholder={
                      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,_#ff370c26_0%,_#f4f4f4_60%)]">
                        <span className="font-luna uppercase text-black/15 1200:text-[34px] sm:text-[26px] text-[16px] text-center px-4 break-words">
                          {project.domain}
                        </span>
                      </div>
                    }
                  />
                  {shots.mobile && (
                    <PhoneMockup
                      image={shots.mobile}
                      alt={`Мобильная версия ${project.domain}`}
                      className="absolute 1000:-right-8 sm:-right-[10%] -right-[12%] -bottom-6 w-[22%] min-w-[70px]"
                    />
                  )}
                </div>

                {/* Описание */}
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="font-luna text-[#c2c2c2] text-sm">{pad(index + 1)}</div>
                  <Title text={project.domain} size="md" className="1200:text-[26px] sm:text-[22px] text-[17px] break-words" />
                  <Text className="text-gray-500 sm:text-base text-sm">{project.kind}</Text>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tasks.map((task) => (
                      <li key={task} className="bg-white px-2 py-1 text-xs sm:text-sm text-gray-700">
                        {task}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start font-luna uppercase text-[10px] sm:text-[12px] text-white bg-primary px-6 py-4 sm:px-8 sm:py-5 hover:scale-105 duration-300"
                    style={{ clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)" }}
                  >
                    Открыть сайт ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Прогресс */}
        <div className="flex gap-1 mt-4" aria-hidden>
          {commercialProjects.map((p, index) => (
            <button
              key={p.slug}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(index)}
              className="flex-1 h-[3px] bg-[#c2c2c2] relative overflow-hidden"
            >
              <span className={cn("absolute inset-0 bg-primary origin-left transition-transform duration-500", index === active ? "scale-x-100" : "scale-x-0")} />
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};
