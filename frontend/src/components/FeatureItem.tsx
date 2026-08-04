import React from "react";
import { Icon } from "./IconComponent";

type Variant = "default" | "contact" | "checklist";
type Direction = "row" | "col";
type IconVariant = "accent" | "default";

type Props = {
  iconName: string;
  title?: string;
  description: string;

  direction?: Direction;
  variant?: Variant;
  iconVariant?: IconVariant;

  href?: string;
};

const FeatureItem: React.FC<Props> = ({
  iconName,
  title,
  description,

  direction = "col",
  variant = "default",
  iconVariant = "accent",

  href,
}) => {
  const isCompact = variant !== "default";

  const iconColor = iconVariant === "accent" ? "text-(--accent)" : "text-white";

  const iconSize = isCompact ? 22 : 44;

  const containerClass = `
        flex
        ${direction === "col" ? "flex-col text-left items-start" : "flex-row"}
        ${direction === "row" ? "gap-4" : "gap-5"}
    `;

  const content = (
    <>
      <div className="bg-(--bg-secondary) rounded-3xl p-2 shrink-0">
        <Icon
          name={variant === "checklist" ? "CircleCheckBig" : iconName}
          size={iconSize}
          strokeWidth={1.75}
          className={iconColor}
        />
      </div>

      <div>
        {variant === "default" && title && (
          <h4 className="mb-2 text-lg font-semibold text-white">{title}</h4>
        )}

        <p
          className={`
            text-(--text-secondary)
            ${isCompact ? "text-sm" : "text-base"}
          `}
        >
          {description}
        </p>
      </div>
    </>
  );

  if (variant === "contact" && href) {
    return (
      <a href={href} className={containerClass + " items-center"}>
        {content}
      </a>
    );
  }

  return <div className={containerClass + " items-start"}>{content}</div>;
};

export default FeatureItem;
