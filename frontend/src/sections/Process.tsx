import { motion } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Понимаю задачу",
    description:
      "Разбираюсь, для кого создается продукт, какие задачи он должен решать и что важно именно вашему бизнесу.",
  },
  {
    title: "Проектирую решение",
    description:
      "Продумываю структуру, пользовательский сценарий и визуальное направление будущего проекта.",
  },
  {
    title: "Разрабатываю",
    description:
      "Создаю быстрый интерфейс, серверную часть и необходимые интеграции.",
  },
  {
    title: "Запускаю",
    description:
      "Настраиваю сервер, домен, SSL и публикую проект. После запуска остаюсь на связи.",
  },
];

type ProcessStepProps = Step & {
  index: number;
};

function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <motion.div
      className="relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
    >
      {/* Circle */}

      <motion.div
        className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-(--border) bg-(--bg)"
        initial={{
          borderColor: "rgba(255,255,255,.08)",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
        whileInView={{
          borderColor: "var(--accent)",
          boxShadow: "0 0 30px rgba(74,222,128,.15)",
        }}
        transition={{
          delay: index * 0.15 + 0.2,
        }}
        viewport={{ once: true }}
      >
        <span className="font-semibold text-(--accent)">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      <h3 className="mb-4 text-xl font-semibold">{title}</h3>

      <p className="max-w-xs text-(--text-secondary)">{description}</p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-20">
          <span className="section-label">Процесс</span>

          <h2 className="mt-4">От идеи до запуска</h2>
        </div>

        <div className="relative">
          {/* Background line */}

          <div
            className="
              absolute
              left-0
              right-[20%]
              top-7
              hidden
              h-px
              bg-(--border)
              lg:block
            "
          />

          {/* Animated line */}

          <motion.div
            className="
              absolute
              left-0
              top-7
              hidden
              h-px
              origin-left
              bg-(--accent)
              shadow-glow
              lg:block
            "
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            style={{ width: "80%" }}
          />

          {/* Desktop */}

          <div className="hidden gap-10 lg:grid lg:grid-cols-4">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} index={index} {...step} />
            ))}
          </div>

          {/* Mobile */}

          <div className="relative flex flex-col gap-14 lg:hidden">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-(--border)" />

            <motion.div
              className="absolute left-7 top-0 w-px origin-top bg-(--accent)"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              style={{ height: "85%" }}
            />

            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6">
                <motion.div
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--bg)"
                  initial={{
                    borderColor: "rgba(255,255,255,.08)",
                  }}
                  whileInView={{
                    borderColor: "var(--accent)",
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <span className="font-semibold text-(--accent)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

                  <p className="text-(--text-secondary)">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
