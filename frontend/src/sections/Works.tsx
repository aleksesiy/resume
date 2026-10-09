import { ArrowUpRight } from "lucide-react";
import BrowserFrame from "../components/BrowserFrame";
import { projects } from "../data/projects";
import type { Project } from "../types/types";

function ProjectText({ project }: { project: Project }) {
  return (
    <div className="work-text">
      <p className="work-kind">{project.kind}</p>
      <h3>{project.title}</h3>
      <p className="work-description">{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a
        className="link-arrow"
        href={project.url}
        target="_blank"
        rel="noopener"
      >
        {project.linkLabel}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Works() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Работы</h2>
          <p>
            Четыре сайта для клиентов, один концепт и приложение. Все ссылки
            ведут на работающие проекты.
          </p>
        </div>

        <div className="works-featured">
          {featured.map((project) => (
            <article
              className="work work-wide"
              id={project.id}
              key={project.id}
              data-reveal
            >
              <BrowserFrame
                domain={project.domain}
                image={project.image}
                imageSmall={project.imageSmall}
                alt={`Первый экран сайта «${project.title}»`}
                sizes="(min-width: 960px) 620px, 92vw"
              />
              <ProjectText project={project} />
            </article>
          ))}
        </div>

        <div className="works-grid">
          {rest.map((project) => (
            <article
              className="work"
              id={project.id}
              key={project.id}
              data-reveal
            >
              <BrowserFrame
                domain={project.domain}
                image={project.image}
                imageSmall={project.imageSmall}
                alt={`Экран проекта «${project.title}»`}
                sizes="(min-width: 960px) 540px, 92vw"
              />
              <ProjectText project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
