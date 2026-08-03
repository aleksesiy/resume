import { ArrowUpRight } from "lucide-react";
import type { ServicePackage } from "../types/types";

type Props = {
  service: ServicePackage;
};

export default function ServiceCard({ service }: Props) {
  return (
    <article
      className={`
        relative

        flex
        flex-col

        rounded-3xl
        border

        p-10

        duration-300

        ${
          service.isPopular
            ? "border-(--accent) bg-(--surface)"
            : "border-(--border) bg-(--surface)"
        }
      `}
    >
      {/* Popular */}

      {service.isPopular && (
        <div
          className="
            absolute
            right-6
            top-6

            rounded-full

            bg-(--accent)

            px-4
            py-2

            text-xs
            font-semibold

            text-black
          "
        >
          Популярно
        </div>
      )}

      <h3>{service.title}</h3>

      <p className="mt-2 text-(--text-secondary)">{service.subtitle}</p>

      <div className="mt-8">
        <div className="text-4xl font-bold">{service.price}</div>

        <p className="mt-3">{service.description}</p>
      </div>

      <div className="my-10 h-px bg-(--border)" />

      <ul className="flex flex-col gap-4">
        {service.includes.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-(--accent)
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        className={`
            button
            mt-10

            ${service.isPopular ? "button-primary" : "button-secondary"}
        `}
      >
        {service.buttonLabel}

        <ArrowUpRight size={18} />
      </button>
    </article>
  );
}
