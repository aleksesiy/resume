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
    <section className="section flex flex-col gap-3 items-start">
      <div className="container">
        <article>
          <div className="mb-20">
            <span className="section-label">Принцип</span>
            <h2 className="mt-4">Красивого сайта мало</h2>
            <p>Сайт должен решать задачу</p>
          </div>
        </article>
        <section className="flex gap-4 self-center">
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
      </div>
    </section>
  );
};
export default Philosophy;
