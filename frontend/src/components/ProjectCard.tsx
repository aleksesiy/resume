import type { Project } from "../types/types";
import AccentButton from "./AccentButton";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="
                grid
                gap-16
                items-center

                lg:grid-cols-2

                py-10

                border-b
                border-(--border)
            "
    >
      {/* IMAGE */}

      <div
        className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-(--border)
                    bg-(--surface)
                "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
                        w-full
                        duration-500
                        hover:scale-[1.02]
                    "
        />
      </div>

      {/* CONTENT */}

      <div>
        <span className="section-label">{project.category}</span>

        <h2 className="mt-4">{project.title}</h2>

        <p className="mt-2 text-lg text-(--text-secondary)">
          {project.shortDescription}
        </p>

        <p className="mt-8">{project.longDescription}</p>

        {/* SERVICES */}

        <div className="mt-10">
          <h4 className="mb-5">Что сделано</h4>

          <ul className="space-y-3">
            {project.services.map((service) => (
              <li
                key={service}
                className="
                                    flex
                                    items-center
                                    gap-3
                                "
              >
                <div
                  className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-(--accent)
                                    "
                />

                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RESULT */}

        <div className="mt-10">
          <h4 className="mb-3">Результат</h4>

          <p>{project.result}</p>
        </div>

        {/* STACK */}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((stack) => (
            <span
              key={stack}
              className="
                                rounded-full
                                border
                                border-(--border)
                                px-4
                                py-2
                                text-sm
                            "
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <AccentButton buttonLabel={project.buttonLabel} url={project.url} />
        </div>
      </div>
    </article>
  );
}
