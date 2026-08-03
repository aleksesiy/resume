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

export type ServicePackage = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  includes: string[];
  buttonLabel: string;
  isPopular: boolean;
};

export type Solution = {
  project: Project;
  service: ServicePackage;
};
