import TelegramButton from "../components/TelegramButton";
import { channel, email } from "../data/contacts";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact" data-reveal>
          <h2>Расскажите, что нужно сделать</h2>
          <p className="contact-lead">
            Хватит пары строк: чем вы занимаетесь и какой сайт хотите. Отвечу со
            сроком и ценой.
          </p>

          <div className="contact-actions">
            <TelegramButton />
            <a className="btn btn-ghost" href={email.href}>
              {email.address}
            </a>
          </div>

          <p className="contact-channel">
            Пока не готовы писать? В канале{" "}
            <a href={channel.href} target="_blank" rel="noopener">
              {channel.handle}
            </a>{" "}
            я показываю новые работы и отзывы клиентов.
          </p>
        </div>
      </div>
    </section>
  );
}
