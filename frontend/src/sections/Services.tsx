import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-20">
          <span className="section-label">Пакеты</span>
          <h2 className="mt-4">Услуги</h2>
        </div>
        <div
          className="
                grid
                gap-8
                lg:grid-cols-3
              "
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
