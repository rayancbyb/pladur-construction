"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

function AnimatedNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const dur = 1400;
            const start = performance.now();

            function step(now: number) {
              const t = Math.min(1, (now - start) / dur);
              const cur = Math.round(target * (1 - Math.pow(1 - t, 3)));
              setValue(cur);
              if (t < 1) requestAnimationFrame(step);
            }

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="big" ref={ref}>
      {value.toLocaleString("es-ES")}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="stat-banner">
      <div className="stat-row">
        <div>
          <AnimatedNumber target={14200} />
          <div className="lab">m² de pladur instalados</div>
        </div>
        <div>
          <AnimatedNumber target={SITE.works} />
          <div className="lab">Obras entregadas</div>
        </div>
        <div>
          <AnimatedNumber target={SITE.years} />
          <div className="lab">Años cumpliendo plazos</div>
        </div>
        <div>
          <div className="big">
            0<sup>%</sup>
          </div>
          <div className="lab">Trabajos sin terminar</div>
        </div>
      </div>
    </div>
  );
}
