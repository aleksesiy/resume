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

/** Карточка работы. Ролик сайта играет сразу, когда карточка на экране. */
function WorkCard({
  project,
  wide,
}: {
  project: Project;
  wide: boolean;
}) {
  return (
    <article
      className={`work${wide ? " work-wide" : ""}`}
      id={project.id}
      data-reveal
    >
      <BrowserFrame
        domain={project.domain}
        image={project.image}
        imageSmall={project.imageSmall}
        alt={`Первый экран сайта «${project.title}»`}
        sizes={wide ? "(min-width: 960px) 620px, 92vw" : "(min-width: 960px) 540px, 92vw"}
        video={project.video}
      />
      <ProjectText project={project} />
    </article>
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
            Шесть сайтов для клиентов, свой сервис, два концепта и приложение.
            Все ссылки ведут на работающие проекты.
          </p>
        </div>

        <div className="works-featured">
          {featured.map((project) => (
            <WorkCard project={project} wide key={project.id} />
          ))}
        </div>

        <div className="works-grid">
          {rest.map((project) => (
            <WorkCard project={project} wide={false} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
