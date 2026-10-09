import { email, github, telegram } from "../data/contacts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Рябинин Алексей Вячеславович</p>
          <p>Самозанятый, плательщик НПД · ИНН 702409347928</p>
        </div>

        <nav className="footer-links" aria-label="Контакты">
          <a href={telegram.href} target="_blank" rel="noopener">
            Telegram {telegram.handle}
          </a>
          <a href={email.href}>{email.address}</a>
          <a href={github.href} target="_blank" rel="noopener">
            {github.label}
          </a>
        </nav>

        {/* Страницы оплаты и документов отдаёт отдельное приложение на /oplata */}
        <nav className="footer-links" aria-label="Оплата и документы">
          <a href="/oplata">Оплата</a>
          <a href="/oplata/oferta">Публичная оферта</a>
          <a href="/oplata/politika-pd">Политика обработки ПД</a>
        </nav>
      </div>
    </footer>
  );
}
