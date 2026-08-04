import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
};

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const blobs: Blob[] = [
      { x: 0.2, y: 0.35, radius: 260, phase: 0, speed: 0.22 },
      { x: 0.78, y: 0.45, radius: 320, phase: 2, speed: 0.18 },
      { x: 0.45, y: 0.82, radius: 240, phase: 5, speed: 0.26 },
    ];

    const resize = () => {
      width = canvas.parentElement!.clientWidth;
      height = canvas.parentElement!.clientHeight;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);

    const move = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const leave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.parentElement!.addEventListener("mousemove", move);
    canvas.parentElement!.addEventListener("mouseleave", leave);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach((blob) => {
        const t = time * 0.0002 * blob.speed;

        let x = blob.x * width + Math.sin(t + blob.phase) * 60;
        let y = blob.y * height + Math.cos(t + blob.phase) * 45;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.hypot(dx, dy);

        if (dist < 250) {
          x -= dx * 0.05;
          y -= dy * 0.05;
        }

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);

        gradient.addColorStop(0, "rgba(74,222,128,.23)");
        gradient.addColorStop(0.45, "rgba(74,222,128,.08)");
        gradient.addColorStop(1, "rgba(74,222,128,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
      canvas.parentElement?.removeEventListener("mousemove", move);
      canvas.parentElement?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute -inset-24 -z-10 blur-3xl" />
  );
}
