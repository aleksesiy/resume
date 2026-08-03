export type ContactIconSlug = "telegram" | "whatsapp" | "vk";
export type Project = {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  services: string[];
  result: string;
  stack: string[];
  buttonLabel: string;
  image: string;
  url: string;
};
