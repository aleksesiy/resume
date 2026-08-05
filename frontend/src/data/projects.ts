import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,

    title: "Сайт для Ангелины",

    category: "Лэндинг",

    shortDescription:
      "Сайт преподавателя по технике речи с административной панелью и собственной CMS.",

    longDescription:
      "Разработал full-stack приложение для преподавателя по технике речи. Помимо публичного сайта реализовал REST API, административную панель, систему управления контентом и базу данных. Все разделы сайта — главный экран, услуги, отзывы, FAQ и контакты — редактируются через удобный интерфейс без изменения кода.",

    services: [
      "UX/UI дизайн",
      "Frontend разработка",
      "Backend разработка",
      "REST API",
      "Административная панель",
      "JWT-аутентификация",
      "Проектирование базы данных",
      "Docker и деплой",
    ],

    result:
      "Преподаватель может самостоятельно управлять содержимым сайта через административную панель, не обращаясь к разработчику. Проект развернут на VPS и готов к использованию.",

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Nginx",
    ],

    buttonLabel: "Открыть проект",

    image: "/speaking-site.jpg",

    url: "/projects/speaking",
  },

  {
    id: 2,

    title: "Сайт для Рината",

    category: "Лэндинг",

    shortDescription:
      "Современный сайт репетитора по русскому языку с собственной системой управления контентом.",

    longDescription:
      "Разработал full-stack приложение для репетитора по русскому языку. Проект включает публичный сайт, защищенную административную панель, REST API и базу данных. Весь контент сайта — услуги, отзывы, FAQ, контакты и информация главной страницы — редактируется через админку без необходимости изменять код.",

    services: [
      "UX/UI дизайн",
      "Адаптивная верстка",
      "Frontend разработка",
      "Backend разработка",
      "REST API",
      "Административная панель",
      "JWT-аутентификация",
      "Проектирование базы данных",
      "Docker и деплой",
    ],

    result:
      "Получился быстрый и полностью управляемый сайт, который позволяет владельцу самостоятельно обновлять контент через удобную административную панель.",

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Nginx",
    ],

    buttonLabel: "Открыть проект",

    image: "rinat-site.jpg",

    url: "https://coolteachers.ru",
  },
  {
    id: 3,

    title: "Workouter",

    category: "Cross-Platform Mobile Application",

    shortDescription:
      "Кроссплатформенное мобильное приложение для отслеживания тренировок и прогресса.",

    longDescription:
      "Разработал мобильное приложение для iOS и Android, которое помогает пользователям вести историю тренировок, отслеживать прогресс и создавать собственные тренировочные программы. Приложение создано на React Native с использованием TypeScript и опубликовано в магазинах приложений.",

    services: [
      "UX/UI дизайн",
      "Разработка мобильного приложения",
      "Кроссплатформенная разработка",
      "Проектирование архитектуры",
      "Публикация в App Store и Google Play",
    ],

    result:
      "Получилось полноценное мобильное приложение, доступное на iOS и Android, позволяющее удобно планировать тренировки и анализировать спортивный прогресс.",

    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Navigation",
    ],

    buttonLabel: "Страница в Google Play",

    image: "workouter.jpg",

    url: "https://play.google.com/store/apps/details?id=com.aleksesiy.workouter",
  },
];
