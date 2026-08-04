import AccentButton from "./AccentButton";
import type { Solution } from "../types/types";
import { Spoiler } from "spoiled";

type Props = {
  solution: Solution;
  index: number;
};
const ctaLabel = [
  "Хотите такой же?",
  "Нужно что-то похожее?",
  "Сколько будет стоить такой проект?",
];

export default function SolutionCard({ solution, index }: Props) {
  const { project, service } = solution;
  return (
    <article className="py-10">
      <div
        className="
                    mt-1
                    grid
                    gap-6

                    lg:grid-cols-2
                "
      >
        {/* PROJECT */}

        <div className="self-end">
          <span className="section-label">{project.category}</span>
          <h2 className="mt-4">{project.title}</h2>
          <p className="mt-3 max-w-2xl text-lg text-(--text-secondary)">
            {project.shortDescription}
          </p>
        </div>

        {/* IMAGE */}

        <div
          className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-(--border)
                    bg-(--surface)
                    max-w-[90vw]
                    max-h-[30dvh]
                    min-h-[100px]
                "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
                        w-full
                        h-full
                        duration-500
                        hover:scale-[1.02]
                    "
          />
        </div>

        {/* INFO */}

        {/* <InfoBlock
                    title="Для кого"
                    text={project.forWho}
                />

                <InfoBlock
                    title="Задача"
                    text={project.goal}
                /> */}

        <InfoList title="Что сделано" items={project.services} />

        <InfoBlock title="Результат" text={project.result} />
      </div>

      {/* STACK */}

      <div className="flex justify-between lg:flex-wrap-none flex-wrap">
        <div className="mt-8 flex flex-wrap items-baseline gap-3">
          <span>Использованы: </span>
          {project.stack.map((item) => (
            <span
              key={item}
              className="
                                rounded-full
                                border
                                border-(--border)
                                px-4
                                py-2
                                text-sm
                            "
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <AccentButton buttonLabel={project.buttonLabel} url={project.url} />
        </div>
      </div>

      {/* SERVICE */}

      <h2 className="pt-10   text-(--text-secondary)">
        {ctaLabel[index % ctaLabel.length]}
      </h2>

      <div
        className="
                    mt-5

                    rounded-3xl
                    border
                    border-(--border)

                    bg-(--surface)
                    p-5
                    lg:p-10
                "
      >
        <Spoiler density={0.2} tagName="div" revealOn="click" fps={20}>
          <span className="section-label text-(--accent-spoiled)">Решение</span>

          <div
            className="
                        mt-4

                        flex
                        flex-wrap
                        items-end
                        justify-between
                        gap-8
                    "
          >
            <div>
              <h3>{service.title}</h3>

              <p className="mt-2 text-(--text-secondary)">{service.subtitle}</p>
            </div>

            <div>
              <div className="text-4xl font-bold">{service.price}</div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl">{service.description}</p>

          <div className="my-4 h-px bg-(--border)" />

          <ul
            className="
                        grid
                        gap-4

                        md:grid-cols-2
                    "
          >
            {service.includes.map((item) => (
              <li
                key={item}
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
                                    bg-(--accent-spoiled)
                                "
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="m-3">
            <AccentButton
              buttonLabel={service.buttonLabel}
              url=""
              variant="light"
            />
          </div>
        </Spoiler>
      </div>
    </article>
  );
}

type InfoBlockProps = {
  title: string;
  text: string;
};

function InfoBlock({ title, text }: InfoBlockProps) {
  return (
    <div
      className="
                rounded-2xl
                border
                border-(--border)

                p-6
            "
    >
      <h4>{title}</h4>

      <p className="mt-3 text-(--text-secondary)">{text}</p>
    </div>
  );
}

type InfoListProps = {
  title: string;
  items: string[];
};

function InfoList({ title, items }: InfoListProps) {
  return (
    <div
      className="
                rounded-2xl
                border
                border-(--border)

                p-6
            "
    >
      <h4>{title}</h4>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
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
                                bg-(--accent-spoiled)
                            "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
