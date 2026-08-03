import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,

    title: "Speaking",

    category: "Landing Page",

    shortDescription: "Лендинг для преподавателя ораторского искусства.",

    longDescription:
      "Создал минималистичный лендинг, который передает экспертность и помогает вызвать доверие с первых секунд.",

    services: [
      "UX/UI дизайн",
      "Frontend",
      "Backend",
      "Интеграция форм",
      "Деплой",
    ],

    result:
      "Понятная структура и сильная подача услуг. Сайт одинаково удобен как на компьютере, так и на мобильных устройствах.",

    stack: ["React", "Node.js", "PostgreSQL"],

    buttonLabel: "Открыть проект",

    image: "/projects/speaking.webp",

    url: "/projects/speaking",
  },

  {
    id: 2,

    title: "Tutor",

    category: "Business Website",

    shortDescription: "Сайт репетитора по русскому языку.",

    longDescription:
      "Разработал сайт, который помогает преподавателю рассказывать о себе, привлекать учеников и принимать заявки.",

    services: [
      "UX/UI дизайн",
      "Адаптивная разработка",
      "Админ-панель",
      "Форма записи",
      "Деплой",
    ],

    result:
      "Простой и понятный интерфейс, который легко обновлять без помощи разработчика.",

    stack: ["React", "Node.js", "MongoDB"],

    buttonLabel: "Открыть проект",

    image: "/projects/tutor.webp",

    url: "/projects/tutor",
  },

  {
    id: 3,

    title: "Workouter",

    category: "Web Application",

    shortDescription: "Мобильное приложение для тренировок.",

    longDescription:
      "Приложение для отслеживания тренировок и прогресса с простым интерфейсом и удобной навигацией.",

    services: ["UI разработка", "API", "Публикация"],

    result:
      "Удобный инструмент для ежедневных тренировок и отслеживания прогресса.",

    stack: ["React Native", "Firebase"],

    buttonLabel: "Открыть проект",

    image: "/projects/workouter.webp",

    url: "/projects/workouter",
  },
];
