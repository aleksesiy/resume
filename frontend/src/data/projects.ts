import type { Project } from "../types/types";

import impulso from "../assets/projects/impulso-1280.webp";
import impulsoSmall from "../assets/projects/impulso-720.webp";
import kvinka from "../assets/projects/kvinka-1280.webp";
import kvinkaSmall from "../assets/projects/kvinka-720.webp";
import coolteachers from "../assets/projects/coolteachers-1280.webp";
import coolteachersSmall from "../assets/projects/coolteachers-720.webp";
import alicemath from "../assets/projects/alicemath-1280.webp";
import alicemathSmall from "../assets/projects/alicemath-720.webp";
import meridian from "../assets/projects/meridian-1280.webp";
import meridianSmall from "../assets/projects/meridian-720.webp";
import workouter from "../assets/projects/workouter-1280.webp";
import workouterSmall from "../assets/projects/workouter-720.webp";

export const projects: Project[] = [
  {
    id: "impulso",
    title: "Импульсо Дэнс",
    kind: "Лендинг студии танцев",
    description:
      "Направления, расписание по залам, цены и запись на пробное занятие. Владелец в это время делал ремонт в студии, поэтому сайт я собрал сам и только уточнял у него детали.",
    tags: ["Tilda", "Расписание", "Запись на занятие"],
    image: impulso,
    imageSmall: impulsoSmall,
    domain: "impulsodance.ru",
    url: "https://impulsodance.ru",
    linkLabel: "Открыть сайт",
  },
  {
    id: "kvinka",
    title: "KVINKA",
    kind: "Магазин мерча",
    description:
      "Сайт на Tilda, которому не хватило стандартных блоков. Каталог и карточки товаров я переписал своим кодом, подключил оплату через Т⁠-⁠Банк и Ozon Pay и Яндекс Доставку.",
    tags: ["Tilda + свой код", "Т⁠-⁠Банк", "Ozon Pay", "Яндекс Доставка"],
    image: kvinka,
    imageSmall: kvinkaSmall,
    domain: "kvinka.ru",
    url: "https://kvinka.ru",
    linkLabel: "Открыть сайт",
  },
  {
    id: "coolteachers",
    title: "Ринат Бакеев",
    kind: "Сайт репетитора по русскому языку",
    description:
      "Сайт оформлен как школьная тетрадь. Услуги, отзывы и ответы на вопросы Ринат меняет сам в админке, без разработчика.",
    tags: ["React", "Node.js", "PostgreSQL", "Админка"],
    image: coolteachers,
    imageSmall: coolteachersSmall,
    domain: "coolteachers.ru",
    url: "https://coolteachers.ru",
    linkLabel: "Открыть сайт",
  },
  {
    id: "alicemath",
    title: "Математика с Алисой",
    kind: "Сайт и учебная платформа",
    description:
      "У ученика личный кабинет с домашними заданиями, теорией и прогрессом по темам. Задания проверяет программа, так что преподаватель не тратит на это вечера.",
    tags: ["Next.js", "PostgreSQL", "Личный кабинет"],
    image: alicemath,
    imageSmall: alicemathSmall,
    domain: "alicemath.ru",
    url: "https://alicemath.ru",
    linkLabel: "Открыть сайт",
  },
  {
    id: "meridian",
    title: "Меридиан",
    kind: "Концепт лендинга архитектурного бюро",
    description:
      "Сделал для себя, чтобы показать анимацию: трёхмерный макет города на первом экране, разрез здания, который вычерчивается при прокрутке, и горизонтальная лента проектов.",
    tags: ["Концепт", "WebGL", "Анимация"],
    image: meridian,
    imageSmall: meridianSmall,
    domain: "meridian-architecture-omega.vercel.app",
    url: "https://meridian-architecture-omega.vercel.app",
    linkLabel: "Открыть концепт",
  },
  {
    id: "workouter",
    title: "Workouter",
    kind: "Мобильное приложение",
    description:
      "Дневник тренировок для Android: упражнения, подходы, вес и календарь занятий. Работает без рекламы, опубликовано в Google Play.",
    tags: ["React Native", "Android", "Google Play"],
    image: workouter,
    imageSmall: workouterSmall,
    domain: "play.google.com",
    url: "https://play.google.com/store/apps/details?id=com.aleksesiy.workouter",
    linkLabel: "Открыть в Google Play",
  },
];
