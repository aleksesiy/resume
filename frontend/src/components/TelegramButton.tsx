import { telegram } from "../data/contacts";
import TelegramIcon from "./TelegramIcon";

type Props = {
  label?: string;
  size?: "md" | "sm";
};

export default function TelegramButton({
  label = "Написать в Telegram",
  size = "md",
}: Props) {
  return (
    <a
      className={`btn btn-primary${size === "sm" ? " btn-sm" : ""}`}
      href={telegram.href}
      target="_blank"
      rel="noopener"
    >
      <TelegramIcon width={size === "sm" ? 16 : 18} height={size === "sm" ? 16 : 18} />
      {label}
    </a>
  );
}
