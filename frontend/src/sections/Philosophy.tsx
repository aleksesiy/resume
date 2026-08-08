import FeatureItem from "../components/FeatureItem";

const features = [
  {
    title: "Один разработчик",
    description:
      "Весь проект в одних руках — без посредников и потери качества.",
    iconName: "User",
  },
  {
    title: "Понятный процесс",
    description:
      "Прозрачная работа, регулярные обновления и согласование каждого этапа.",
    iconName: "Workflow",
  },
  {
    title: "От идеи до запуска",
    description:
      "Полный цикл разработки: дизайн, верстка, backend, база данных и деплой.",
    iconName: "Rocket",
  },
];
const Philosophy = () => {
  return (
    <section
      className="section flex flex-col gap-3 items-start"
      id="philosophy"
    >
      <div className="container">
        <article>
          <div className="mb-20">
            <span className="section-label">Принцип</span>
            <h2 className="mt-4">Красивого сайта мало</h2>
            <p>Сайт должен решать задачу</p>
          </div>
        </article>
        <section className="flex gap-4 flex-wrap self-center justify-center">
          {features.map((elem) => (
            <div className="flex w-full lg:max-w-[30%]">
              <FeatureItem
                iconName={elem.iconName}
                title={elem.title}
                description={elem.description}
              />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
export default Philosophy;
