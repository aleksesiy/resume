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
        {/* Legal: страницы оплаты и документов отдаёт отдельное приложение на /oplata */}
        <div className="flex flex-col gap-4 border-t border-(--border) pt-10 text-sm md:flex-row md:items-start md:justify-between">
          <p className="text-(--text-muted)">
            Рябинин Алексей Вячеславович
            <br />
            Самозанятый, плательщик НПД · ИНН 702409347928
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="text-(--text-muted) duration-200 hover:text-(--accent)" href="/oplata">
              Оплата
            </a>
            <a className="text-(--text-muted) duration-200 hover:text-(--accent)" href="/oplata/oferta">
              Публичная оферта
            </a>
            <a className="text-(--text-muted) duration-200 hover:text-(--accent)" href="/oplata/politika-pd">
              Политика обработки ПД
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
