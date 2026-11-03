import { useEffect, useState } from "react";

export type Slide = { img: string; alt: string; caption: string };

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);
  const go = (d: number) => setI((n) => (n + d + slides.length) % slides.length);

  return (
    <div className="relative h-[270px] overflow-hidden border border-border shadow">
      {slides.map((s, n) => (
        <img
          key={s.img}
          src={s.img}
          alt={s.alt}
          width={1920}
          height={800}
          loading={n === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
      <h1 className="absolute left-6 top-6 max-w-xs text-2xl font-bold text-primary-foreground drop-shadow">
        {slides[i]?.caption}
      </h1>
      <button aria-label="Previous slide" onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-foreground/40 px-2 py-1 text-xl text-primary-foreground hover:bg-foreground/60">‹</button>
      <button aria-label="Next slide" onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-foreground/40 px-2 py-1 text-xl text-primary-foreground hover:bg-foreground/60">›</button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, n) => (
          <button key={s.img} aria-label={`Go to slide ${n + 1}`} onClick={() => setI(n)} className={`h-2.5 w-2.5 rounded-full border border-primary-foreground ${n === i ? "bg-primary-foreground" : "bg-transparent"}`} />
        ))}
      </div>
    </div>
  );
}
