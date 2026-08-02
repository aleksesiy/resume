import type { SVGProps } from "react";
import { siTelegram, siWhatsapp, siVk } from "simple-icons";

const iconMap = {
  telegram: siTelegram,
  whatsapp: siWhatsapp,
  vk: siVk,
};
interface SimpleIconProps extends SVGProps<SVGSVGElement> {
  slug: keyof typeof iconMap;
}

export function SimpleIcon({ slug, ...props }: SimpleIconProps) {
  const icon = iconMap[slug];
  return (
    <svg
      viewBox="0 0 24 24"
      width={30}
      height={30}
      fill="currentColor"
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
