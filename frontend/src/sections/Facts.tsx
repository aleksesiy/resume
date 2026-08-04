import FeatureItem from "../components/FeatureItem";

const advantages = [
  {
    title: "Один разработчик",
    description:
      "Весь проект в одних руках — без посредников и потери качества.",
    icon: "User",
  },
  {
    title: "От идеи до запуска",
    description:
      "Полный цикл разработки: дизайн, верстка, backend, база данных и деплой.",
    icon: "Rocket",
  },
  {
    title: "Понятный процесс",
    description:
      "Прозрачная работа, регулярные обновления и согласование каждого этапа.",
    icon: "Workflow",
  },
  {
    title: "Результат, а не обещания",
    description:
      "Создаю сайты, которые решают задачи и помогают получать заявки.",
    icon: "Target",
  },
];

const Facts = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex md:grid gap-5   grid-cols-2 w-[70%] mx-[auto]">
          {advantages.map((elem, i) => (
            <div key={i} className="flex w-full">
              <FeatureItem
                title={elem.title}
                description={elem.description}
                iconName={elem.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
