import { services } from "../data/services";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Что я делаю</h2>
          <p>
            От одной страницы до сервиса с личным кабинетом. Цену называю после
            того, как пойму задачу.
          </p>
        </div>

        <ul className="services">
          {services.map((service) => (
            <li className="service" key={service.title} data-reveal>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="service-example" href={`#${service.exampleId}`}>
                Пример: {service.exampleLabel}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
