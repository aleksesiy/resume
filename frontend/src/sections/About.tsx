import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import FeatureItem from "../components/FeatureItem";
import Reveal from "../components/Reveal";

import alekseyImage from "../assets/aleksey.jpg";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 2%"],
  });

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.5, 1],
    [0, 0.72, 0.72],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    [1, 1.08, 1.08],
  );

  const textY = useTransform(scrollYProgress, [0.32, 0.55], [160, 0]);
  const imageBrightness = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 0]);

  return (
    <section ref={sectionRef} className="section overflow-clip">
      <div className="container">
        {/* ================= DESKTOP ================= */}

        <div className="hidden items-center gap-20 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className=" overflow-hidden rounded-3xl border border-(--border)">
            <img
              src={alekseyImage}
              alt="aleksey image"

              className="h-fit w-full object-cover"
            />
          </div>

          <div>
            <span className="section-label">Обо мне</span>

            <h2 className="mt-4 max-w-xl">
              Кто будет работать
              <br />
              над вашим проектом
            </h2>

            <div className="mt-8 space-y-6">
              <p>
                Я не передаю проекты между дизайнером, верстальщиком,
                backend-разработчиком и менеджером.
              </p>

              <p>Всем проектом занимаюсь лично — от первой идеи до запуска.</p>

              <p>
                Поэтому знаю каждую деталь проекта и отвечаю за результат
                целиком.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="MessagesSquare"
                  title="Работаем напрямую"
                  description="Без посредников, лишних созвонов и долгих согласований."
                />
              </Reveal>

              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="Layers3"
                  title="Полный цикл"
                  description="Дизайн, frontend, backend, запуск и дальнейшая поддержка."
                />
              </Reveal>

              <Reveal>
                <FeatureItem
                  variant="default"
                  direction="row"
                  iconName="BadgeCheck"
                  title="Ответственность"
                  description="За каждый этап проекта отвечаю лично, а не команда из разных специалистов."
                />
              </Reveal>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="lg:hidden">
          <span className="section-label">Обо мне</span>

          <h2 className="mt-4">
            Кто будет работать
            <br />
            над вашим проектом
          </h2>

          <div className="relative mt-10">
            <div className="sticky top-5 h-[80vh]">
              <motion.div
                style={{
                  scale: imageScale,
                  filter: imageBrightness,
                }}
                className="
                    relative
                    
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-(--border)
                  "
              >
                <img
                  src={alekseyImage}
                  alt="aleksey image"

                  className="h-fit w-full object-cover"
                />

                <motion.div
                  style={{
                    opacity: overlayOpacity,
                  }}
                  className="
                    absolute
                    inset-0
                    bg-[#0F4738]
                  "
                />
              </motion.div>
            </div>

            <motion.div
              style={{
                y: textY,
              }}
              className="
                relative
                z-20
                -mt-[35vh]
                p-2
                lg:pb-24
                text-white

                rounded-3xl
                  backdrop-blur-sm
                  bg-transparent
              "
            >
              <div
                className="
                  
                "
              >
                <div className="space-y-6">
                  <p>
                    Я не передаю проекты между дизайнером, верстальщиком,
                    backend-разработчиком и менеджером.
                  </p>

                  <p>
                    Всем проектом занимаюсь лично — от первой идеи до запуска.
                  </p>

                  <p>
                    Поэтому знаю каждую деталь проекта и отвечаю за результат
                    целиком.
                  </p>
                </div>

                <div className="mt-12 flex flex-col items-start gap-8">
                  <div className="max-w-sm">
                    <FeatureItem
                      variant="default"
                      direction="row"
                      iconName="MessagesSquare"
                      title="Работаем напрямую"
                      description="Без посредников, лишних созвонов и долгих согласований."
                    />
                  </div>

                  <div className="max-w-sm">
                    <FeatureItem
                      variant="default"
                      direction="row"
                      iconName="Layers3"
                      title="Полный цикл"
                      description="Дизайн, frontend, backend, запуск и дальнейшая поддержка."
                    />
                  </div>

                  <div className="max-w-sm">
                    <FeatureItem
                      variant="default"
                      direction="row"
                      iconName="BadgeCheck"
                      title="Ответственность"
                      description="За каждый этап проекта отвечаю лично, а не команда из разных специалистов."
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
