import FeatureItem from "../components/FeatureItem";

const features = [
  {
    iconName: "UserRound",
    title: "Понимаю цели бизнеса",
    description: "и создаю решения, которые работают.",
  },
  {
    iconName: "CodeXml",
    title: "Пишу чистый код",
    description: "и строю надежные цифровые продукты.",
  },
  {
    iconName: "Rocket",
    title: "Запускаю и сопровождаю",
    description: "чтобы сайт стабильно приносил пользу.",
  },
];
const Philosophy = () => {
  return (
    <section className="section flex gap-3 items-center">
      <article className="md:max-w-[30%]">
        <h3>Философия</h3>
        <h2>Красивый дизайн – это только начало</h2>
        <p>Сайт должен решать задачу</p>
      </article>
      <section className="flex gap-4">
        {features.map((elem) => (
          <div className="flex w-full">
            <FeatureItem
              iconName={elem.iconName}
              title={elem.title}
              description={elem.description}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
export default Philosophy;
