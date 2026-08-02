import * as Icons from "lucide-react";
import { type ContactIconSlug } from "../types/types";
import type { LucideIcon, LucideProps } from "lucide-react";
import { SimpleIcon } from "./SimpleIconComponent";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  if (["telegram", "whatsapp", "vk"].includes(name)) {
    return <SimpleIcon slug={name as ContactIconSlug} {...props} />;
  }
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.log("no such icon: " + name);
    return null;
  }

  return <IconComponent {...props} />;
}
