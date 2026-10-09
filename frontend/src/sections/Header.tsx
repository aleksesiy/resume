import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import TelegramButton from "../components/TelegramButton";

const links = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header-name" href="#top">
          Алексей Рябинин
        </a>

        <nav className="header-nav" aria-label="Разделы страницы">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <TelegramButton label="Написать" size="sm" />
          <button
            className="header-burger"
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="header-menu"
          id="mobile-menu"
          aria-label="Разделы страницы"
        >
          <div className="container">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              Контакты
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
