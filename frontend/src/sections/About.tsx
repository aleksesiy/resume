import FeatureItem from "../components/FeatureItem";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}

          <div
            className="
              aspect-[4/5]
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-(--border)
              bg-(--surface)
            "
          >
            {/* Image goes here */}
          </div>

          {/* Content */}

          <div>
            <span className="section-label">Обо мне</span>

            <h2 className="mt-4 max-w-xl">
              Кто будет работать
              <br />
              над вашим проектом
            </h2>

            <div className="mt-8 space-y-6">
              <p>
                Я не передаю проекты между дизайнером, верстальщиком,
                backend-разработчиком и менеджером.
              </p>

              <p>Всем проектом занимаюсь лично — от первой идеи до запуска.</p>

              <p>
                Поэтому знаю каждую деталь проекта и отвечаю за результат
                целиком.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="MessagesSquare"
                  title="Работаем напрямую"
                  description="Без посредников, лишних созвонов и долгих согласований."
                />
              </Reveal>

              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="Layers3"
                  title="Полный цикл"
                  description="Дизайн, frontend, backend, запуск и дальнейшая поддержка."
                />
              </Reveal>

              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="BadgeCheck"
                  title="Ответственность"
                  description="За каждый этап проекта отвечаю лично, а не команда из разных специалистов."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
