import SolutionCard from "../components/SolutionCard";
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
          {solutions.map((elem) => (
            <SolutionCard key={elem.project.id} solution={elem} />
          ))}
        </div>
      </div>
    </section>
  );
}
