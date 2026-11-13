import { useEffect, useRef, useState } from "react";

type Props = {
  domain: string;
  image: string;
  imageSmall: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  /** Ролик сайта. Постер — его первый кадр, поэтому старт без скачка. */
  video?: string;
};

const canAnimate = () =>
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  "IntersectionObserver" in window;

/** Скриншот или ролик проекта в рамке окна браузера. Всё в 16:10. */
export default function BrowserFrame({
  domain,
  image,
  imageSmall,
  alt,
  sizes,
  eager = false,
  video,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [animate] = useState(() => Boolean(video) && canAnimate());

  // Ролик играет, пока рамка на экране, и встаёт на паузу, когда уходит.
  useEffect(() => {
    const el = videoRef.current;
    if (!animate || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

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
      {animate && video ? (
        <video
          ref={videoRef}
          src={video}
          poster={video.replace(/\.mp4$/, ".jpg")}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
          width={800}
          height={500}
        />
      ) : (
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
      )}
    </div>
  );
}
