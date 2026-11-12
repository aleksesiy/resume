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
import tochka from "../assets/projects/tochka-1280.webp";
import tochkaSmall from "../assets/projects/tochka-720.webp";
import golf from "../assets/projects/golf-1280.webp";
import golfSmall from "../assets/projects/golf-720.webp";
import cardex from "../assets/projects/cardex-1280.webp";
import cardexSmall from "../assets/projects/cardex-720.webp";
import medovy from "../assets/projects/medovy-1280.webp";
import medovySmall from "../assets/projects/medovy-720.webp";
import workouter from "../assets/projects/workouter-1280.webp";
import workouterSmall from "../assets/projects/workouter-720.webp";

export const projects: Project[] = [
  {
    id: "golf",
    title: "Golf Point",
    kind: "Интернет-магазин гольф-инвентаря",
    description:
      "Новые и б/у клюшки в наличии в Петербурге и под заказ. Каталог с фильтрами под каждую категорию и поиск. Сотрудник пересылает боту пост из Telegram-канала, и бот сам собирает карточку товара.",
    tags: ["Next.js", "Payload CMS", "PostgreSQL", "Telegram-бот"],
    image: golf,
    imageSmall: golfSmall,
    domain: "golf-point.ru",
    url: "https://golf-point.ru",
    linkLabel: "Открыть сайт",
    video: "/works/golf.mp4",
  },
  {
    id: "medovy",
    title: "Медовый",
    kind: "Концепт сайта для глэмпинга",
    description:
      "Предложил глэмпингу в горах Дагестана новый сайт. На первом экране бассейн среди гор, цена за сутки и оценка на Картах, ниже шатры, баня, чем заняться и что посмотреть в часе езды.",
    tags: ["Концепт", "Лендинг"],
    image: medovy,
    imageSmall: medovySmall,
    domain: "medovy.aleksey-dev.ru",
    url: "https://medovy.aleksey-dev.ru",
    linkLabel: "Открыть концепт",
    video: "/works/medovy.mp4",
  },
  {
    id: "tochka",
    title: "Точка красоты",
    kind: "Сайт салона и Яндекс Директ",
    description:
      "Салон в Ивантеевке. На сайте весь прайс из 215 услуг с поиском, работы мастеров и запись в одно касание через YClients. К сайту настроил рекламу в Директе, а Метрика считает клики по записи, звонки и маршруты.",
    tags: ["Сайт", "YClients", "Яндекс Директ", "Метрика"],
    image: tochka,
    imageSmall: tochkaSmall,
    domain: "tochkakrasoty-ivanteevka.ru",
    url: "https://tochkakrasoty-ivanteevka.ru",
    linkLabel: "Открыть сайт",
    video: "/works/tochka.mp4",
  },
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
    video: "/works/impulso.mp4",
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
    video: "/works/kvinka.mp4",
  },
  {
    id: "alicemath",
    title: "Математика с Алисой",
    kind: "Сайт и учебная платформа",
    description:
      "У ученика личный кабинет с домашними заданиями, теорией, вариантами экзамена и прогрессом по темам. Первую часть заданий сайт проверяет сам, вторую преподаватель оценивает в своём кабинете.",
    tags: ["Next.js", "PostgreSQL", "Личный кабинет"],
    image: alicemath,
    imageSmall: alicemathSmall,
    domain: "alicemath.ru",
    url: "https://alicemath.ru",
    linkLabel: "Открыть сайт",
    video: "/works/alicemath.mp4",
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
    video: "/works/coolteachers.mp4",
  },
  {
    id: "cardex",
    title: "cardex",
    kind: "Веб-приложение для изучения слов",
    description:
      "Карточки с интервальными повторениями и паки слов от сообщества. Учить можно без регистрации, на телефоне работает офлайн. Делаем вдвоём: на мне весь интерфейс, на напарнике бэкенд и сервер.",
    tags: ["Next.js", "React", "Tailwind", "PWA"],
    image: cardex,
    imageSmall: cardexSmall,
    domain: "cardex.cool",
    url: "https://cardex.cool",
    linkLabel: "Открыть сервис",
    video: "/works/cardex.mp4",
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
    video: "/works/meridian.mp4",
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
