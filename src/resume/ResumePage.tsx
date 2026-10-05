import React from "react";
import { cn } from "../shared/lib/cn";
import { contacts, github, profile, resumeLinks } from "../data/profile";
import type { ResumeData, ResumeExperience, ResumeProject } from "../data/resumes";

interface Props {
  data: ResumeData;
}

const linkClass = "text-primary underline-offset-2 hover:underline print:text-black";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-luna uppercase text-[13px] sm:text-sm flex items-center gap-2 border-b border-gray-200 pb-2 mb-4">
    <span className="block w-2 h-2 bg-primary" aria-hidden />
    {children}
  </h2>
);

const Chips: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <li key={item} className="bg-[#f4f4f4] px-2 py-1 text-xs sm:text-[13px] print:border print:border-gray-200">
        {item}
      </li>
    ))}
  </ul>
);

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-col gap-1.5">
    {items.map((item) => (
      <li key={item} className="flex gap-2 text-sm sm:text-[15px] leading-[140%] text-gray-700">
        <span className="text-primary shrink-0">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ExperienceItem: React.FC<{ item: ResumeExperience }> = ({ item }) => (
  <article className="break-inside-avoid">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
      <h3 className="font-luna uppercase text-[13px] sm:text-sm">
        {item.role} <span className="text-primary">· {item.company}</span>
      </h3>
      <span className="text-sm text-gray-500">{item.period}</span>
    </div>
    <Bullets items={item.bullets} />
  </article>
);

const ProjectItem: React.FC<{ item: ResumeProject }> = ({ item }) => (
  <article className="break-inside-avoid">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
      <h3 className="font-luna uppercase text-[13px] sm:text-sm">
        {item.href ? (
          <a className="hover:text-primary transition" href={item.href} target="_blank" rel="noopener noreferrer">
            {item.name} <span className="text-primary print:hidden">↗</span>
          </a>
        ) : (
          item.name
        )}
        {item.meta && <span className="font-chetty normal-case text-gray-500 text-sm"> — {item.meta}</span>}
      </h3>
      {item.links && (
        <span className="flex gap-3 text-sm">
          {item.links.map((link) => (
            <a key={link.href} className={linkClass} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
              <span className="hidden print:inline"> ({link.href.replace(/^https?:\/\//, "")})</span>
            </a>
          ))}
        </span>
      )}
    </div>
    {item.stack && (
      <div className="mb-2">
        <Chips items={item.stack} />
      </div>
    )}
    <Bullets items={item.bullets} />
  </article>
);

export const ResumePage: React.FC<Props> = ({ data }) => {
  const otherHref = resumeLinks[data.other.slug];

  const blocks = {
    projects: (
      <section key="projects">
        <SectionTitle>{data.projectsTitle}</SectionTitle>
        <div className="flex flex-col gap-5">
          {data.projects.map((p) => (
            <ProjectItem key={p.name} item={p} />
          ))}
        </div>
      </section>
    ),
    experience: (
      <section key="experience">
        <SectionTitle>Опыт работы</SectionTitle>
        <div className="flex flex-col gap-5">
          {data.experience.map((e) => (
            <ExperienceItem key={e.company} item={e} />
          ))}
        </div>
      </section>
    ),
    commercial: data.commercial && (
      <section key="commercial">
        <SectionTitle>{data.commercialTitle}</SectionTitle>
        <div className="flex flex-col gap-4">
          {data.commercial.map((p) => (
            <ProjectItem key={p.name} item={p} />
          ))}
        </div>
      </section>
    ),
  };

  return (
    <div className="min-h-screen py-4 sm:py-10 px-[10px] print:p-0 font-chetty">
      {/* Панель действий — не печатается */}
      <nav className="print:hidden max-w-[900px] mx-auto mb-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <a href={resumeLinks.hub} className="hover:text-primary transition">← Портфолио</a>
        <div className="flex flex-wrap items-center gap-4">
          <a href={otherHref} className="hover:text-primary transition">{data.other.label} →</a>
          <button
            type="button"
            onClick={() => window.print()}
            className="font-luna text-[10px] sm:text-[11px] uppercase text-white bg-primary px-5 py-3 hover:scale-105 duration-300"
            style={{ clipPath: "polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)" }}
          >
            Скачать PDF
          </button>
        </div>
      </nav>

      <main className="max-w-[900px] mx-auto bg-white p-5 sm:p-10 print:p-0 shadow-custom print:shadow-none flex flex-col gap-8 print:gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-luna uppercase text-[26px] sm:text-[38px] leading-[110%]">{profile.name}</h1>
              <p className="font-luna uppercase text-primary text-[13px] sm:text-base mt-2">{data.role}</p>
            </div>
            <p className="text-sm text-gray-500">{profile.location}</p>
          </div>
          <p className="text-sm sm:text-base text-gray-700">{data.stackLine}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {[...contacts, github].map((c) => (
              <li key={c.href}>
                <a
                  className={linkClass}
                  href={c.href}
                  {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section>
          <SectionTitle>О себе</SectionTitle>
          <div className="flex flex-col gap-2">
            {data.summary.map((p) => (
              <p key={p} className="text-sm sm:text-[15px] leading-[150%] text-gray-700">{p}</p>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Навыки</SectionTitle>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 print:grid-cols-3">
            {data.skills.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm text-gray-500 mb-2">{group.title}</h3>
                <Chips items={group.items} />
              </div>
            ))}
          </div>
        </section>

        {data.order.map((key) => blocks[key])}

        <footer className={cn("text-sm text-gray-500 border-t border-gray-200 pt-4")}>
          Портфолио:{" "}
          <a className={linkClass} href={profile.site.href} target="_blank" rel="noopener noreferrer">
            {profile.site.text}
          </a>
        </footer>
      </main>
    </div>
  );
};
