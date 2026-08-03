import type { Solution } from "../types/types";
import { projects } from "./projects";
import { services } from "./services";

export const solutions: Solution[] = [
  {
    project: projects[0],
    service: services[0],
  },

  {
    project: projects[1],
    service: services[1],
  },

  {
    project: projects[2],
    service: services[2],
  },
];
