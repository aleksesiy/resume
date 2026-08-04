import CanvasBackground from "../components/CanvasBackground";
import FeatureItem from "../components/FeatureItem";
import { contacts } from "../data/contacts";

export default function NewSolution() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[40px] border border-(--border) px-8 py-20 lg:px-16">
          <CanvasBackground />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                                radial-gradient(circle at top,
                                    rgba(74,222,128,.08) 0%,
                                    transparent 55%
                                ),
                                linear-gradient(
                                    rgba(255,255,255,.03),
                                    transparent
                                )
                            `,
            }}
          />

          <div className="relative z-10">
            <h3 className="text-center">Не нашли подходящий вариант?</h3>

            <h2 className="mx-auto mt-4 text-center">
              Напишите мне — подберем решение под ваш проект
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {contacts.map((contact) => (
                <FeatureItem
                  key={contact.id}
                  iconName={contact.iconName}
                  variant="contact"
                  direction="row"
                  description={contact.profileName}
                  href={contact.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
