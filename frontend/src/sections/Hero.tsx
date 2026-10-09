import { Check } from "lucide-react";
import BrowserFrame from "../components/BrowserFrame";
import TelegramButton from "../components/TelegramButton";
import { projects } from "../data/projects";

const facts = [
  "Лендинг за 3⁠–⁠5 дней",
  "Договор-оферта и чек",
  "После запуска остаюсь на связи",
];

export default function Hero() {
  const [front, back] = projects;

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Сайты, интернет-магазины и приложения под ключ</h1>
          <p className="hero-lead">
            Я Алексей, разработчик. Сам продумываю структуру, рисую дизайн,
            программирую и запускаю, поэтому вы обсуждаете задачу с тем, кто её
            делает.
          </p>

          <div className="hero-actions">
            <TelegramButton />
            <a className="btn btn-ghost" href="#works">
              Смотреть работы
            </a>
          </div>

          <ul className="hero-facts">
            {facts.map((fact) => (
              <li key={fact}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-shot hero-shot-back">
            <BrowserFrame
              domain={back.domain}
              image={back.image}
              imageSmall={back.imageSmall}
              alt=""
              sizes="(min-width: 960px) 420px, 70vw"
              eager
            />
          </div>
          <div className="hero-shot hero-shot-front">
            <BrowserFrame
              domain={front.domain}
              image={front.image}
              imageSmall={front.imageSmall}
              alt=""
              sizes="(min-width: 960px) 460px, 78vw"
              eager
            />
          </div>
        </div>
      </div>
    </section>
  );
}
