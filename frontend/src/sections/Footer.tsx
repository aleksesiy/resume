import { contacts } from "../data/contacts";
import FeatureItem from "../components/FeatureItem";

export default function Footer() {
  return (
    <footer className="section border-t border-(--border)">
      <div className="container">
        {/* CTA */}
        <div className="flex flex-col items-center gap-10 border-b border-(--border) pb-10">
          <div>
            <h3 className="section-label text-center">
              Следующий проект может быть вашим
            </h3>
          </div>
        </div>
        {/* Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-b border-(--border) py-16">
          {contacts.map((contact) => (
            <FeatureItem
              key={contact.id}
              variant="contact"
              iconName={contact.iconName}
              description={contact.profileName}
              href={contact.href}
              direction="row"
            />
          ))}
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-4 py-10 text-sm text-(--text-muted) md:flex-row md:items-center md:justify-between">
          <p>2026, Алексей Рябинин</p>
          <p>Разработка сайтов под ключ — от идеи до запуска.</p>
        </div>
      </div>
    </footer>
  );
}
