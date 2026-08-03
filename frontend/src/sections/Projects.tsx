import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="section">
      <div className="container gap-2">
        <article>
          <div className="mb-0">
            {/* <span className="section-label">Принцип</span> */}
            <h2 className="mt-4">Проекты</h2>
            {/* <p>Сайт должен решать задачу</p> */}
          </div>
        </article>
        <div className="flex flex-col gap-10">
          {projects.map((elem) => (
            <ProjectCard project={elem} key={elem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
