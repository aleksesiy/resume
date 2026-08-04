import FeatureItem from "../components/FeatureItem";
import SolutionCard from "../components/SolutionCard";
import { contacts } from "../data/contacts";
import { solutions } from "../data/solutions";
export default function Solutions() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <span className="section-label">Примеры +</span>
          <h2 className="mt-4">Решения</h2>
        </div>
        <div>
          {solutions.map((elem, index) => (
            <SolutionCard key={elem.project.id} solution={elem} index={index} />
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-center">Не нашли подходящий вариант?</h3>
          <h2 className="text-center">
            Напишите мне — подберем решение под ваш проект
          </h2>
          <div className="flex gap-3 justify-center mt-5">
            {contacts.map((elem) => (
              <FeatureItem
                iconName={elem.iconName}
                variant="contact"
                description={elem.profileName}
                href={elem.href}
                direction="row"
                key={elem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
