export type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  tags: string[];
  image: string;
  imageSmall: string;
  /** Адрес в «браузерной» рамке над скриншотом */
  domain: string;
  url: string;
  linkLabel: string;
};

export type Review = {
  author: string;
  date: string;
  service: string;
  projectId: string;
  projectTitle: string;
  paragraphs: string[];
};

export type Service = {
  title: string;
  description: string;
  exampleLabel: string;
  exampleId: string;
};

export type Faq = {
  question: string;
  answer: string;
};
