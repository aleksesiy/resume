import { Plus } from "lucide-react";
import { faq } from "../data/faq";

export default function FaqSection() {
  return (
    <section className="section section-band" id="faq">
      <div className="container faq">
        <div className="section-head" data-reveal>
          <h2>Вопросы до начала работы</h2>
        </div>

        <div className="faq-list" data-reveal>
          {faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <p className="faq-note">
            Документы:{" "}
            <a href="/oplata/oferta">публичная оферта</a>,{" "}
            <a href="/oplata/politika-pd">политика обработки данных</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
