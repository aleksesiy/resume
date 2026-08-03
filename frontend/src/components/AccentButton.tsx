import { ArrowUpRight } from "lucide-react";

const AccentButton = ({
  buttonLabel,
  url,
  variant = "dark",
}: {
  buttonLabel: string;
  url: string;
  variant?: "dark" | "light";
}) => {
  const textColor =
    variant === "dark" ? "text-(--accent-spoiled)" : "text-(--text-accent)";
  return (
    <div
      className={`
            duration-200
        ${variant === "light" && "rounded-lg bg-(--accent-spoiled) hover:bg-(--accent-hover) p-3 w-fit"}
            `}
    >
      <a
        className={`
                            button
                            button-primary
                            mt-10
                        `}
        href={url}
      >
        <div className="flex flex-row items-center gap-2">
          <span className={textColor}>{buttonLabel}</span>
          <ArrowUpRight className={textColor} size={24} />
        </div>
      </a>
    </div>
  );
};

export default AccentButton;
