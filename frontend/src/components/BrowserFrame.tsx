import { useEffect, useRef, useState } from "react";

type Props = {
  domain: string;
  image: string;
  imageSmall: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  /** Ролик с первым экраном сайта. Грузится только когда карточка активна. */
  video?: string;
  active?: boolean;
};

/** Скриншот проекта в рамке окна браузера. Все скриншоты и ролики 16:10. */
export default function BrowserFrame({
  domain,
  image,
  imageSmall,
  alt,
  sizes,
  eager = false,
  video,
  active = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (active) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [active]);

  return (
    <div className={`frame${playing ? " is-playing" : ""}`}>
      <div className="frame-bar" aria-hidden="true">
        <span className="frame-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame-domain">{domain}</span>
      </div>
      <div className="frame-media">
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
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        )}
      </div>
    </div>
  );
}
