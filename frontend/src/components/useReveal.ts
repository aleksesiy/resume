import { useEffect } from "react";

/**
 * Плавное появление блоков с атрибутом data-reveal при прокрутке.
 * Без JS и при prefers-reduced-motion блоки просто видны.
 */
export function useReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      // То, что уже на экране, не прячем — иначе контент мигнёт.
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
