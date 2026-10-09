const steps = [
  {
    title: "Разговор",
    description:
      "Вы рассказываете, чем занимаетесь и зачем вам сайт. Я задаю вопросы, потом называю срок и цену.",
  },
  {
    title: "Структура и дизайн",
    description:
      "Показываю, какие блоки будут на странице и как она выглядит. Правим, пока вас всё не устроит.",
  },
  {
    title: "Разработка",
    description:
      "Собираю сайт, подключаю формы, оплату и остальное. Ссылку на рабочую версию присылаю по ходу, чтобы вы видели результат до сдачи.",
  },
  {
    title: "Запуск",
    description:
      "Подключаю домен и HTTPS, показываю, как менять содержимое. Дальше остаюсь на связи.",
  },
];

export default function Process() {
  return (
    <section className="section section-band" id="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Как идёт работа</h2>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" key={step.title} data-reveal>
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
