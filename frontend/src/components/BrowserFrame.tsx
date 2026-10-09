type Props = {
  domain: string;
  image: string;
  imageSmall: string;
  alt: string;
  sizes: string;
  eager?: boolean;
};

/** Скриншот проекта в рамке окна браузера. Все скриншоты 16:10. */
export default function BrowserFrame({
  domain,
  image,
  imageSmall,
  alt,
  sizes,
  eager = false,
}: Props) {
  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden="true">
        <span className="frame-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame-domain">{domain}</span>
      </div>
      <img
        src={image}
        srcSet={`${imageSmall} 720w, ${image} 1280w`}
        sizes={sizes}
        alt={alt}
        width={1280}
        height={800}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
