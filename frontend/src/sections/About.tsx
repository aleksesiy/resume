import photo from "../assets/projects/aleksey-960.webp";
import photoSmall from "../assets/projects/aleksey-560.webp";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about-photo" data-reveal>
          <img
            src={photo}
            srcSet={`${photoSmall} 560w, ${photo} 960w`}
            sizes="(min-width: 960px) 400px, 92vw"
            alt="Алексей Рябинин"
            width={960}
            height={1280}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-text" data-reveal>
          <h2>Кто будет делать ваш проект</h2>
          <p>
            Меня зовут Алексей Рябинин. Я работаю один: тот, с кем вы
            переписываетесь, и делает сайт. Вам не придётся объяснять задачу
            менеджеру, потом дизайнеру, потом программисту.
          </p>
          <p>
            Делаю и на Tilda, и на коде. Клиентов нахожу сам и сам с ними
            общаюсь, поэтому привык объяснять без терминов и спрашивать о деле,
            а не о технологиях.
          </p>
          <p>
            Работаю официально как самозанятый: договор-оферта и чек после
            оплаты.
          </p>
        </div>
      </div>
    </section>
  );
}
