"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import SiteImage from "@/components/SiteImage";

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].slug);

  return (
    <section className="section" id="servicios">
      <div className="section-head">
        <div>
          <div className="kicker"><span className="num">01</span> Lo que hacemos</div>
          <h2 className="section-title">Pladur de obra,<br />no de catálogo.</h2>
        </div>
        <p className="section-lead">
          Cuatro especialidades. Una sola cuadrilla. Lo planificamos, lo medimos, lo montamos y lo
          dejamos terminado — sin subcontratas a ciegas.
        </p>
      </div>
      <div className="services">
        {SERVICES.map((s, i) => (
          <Link
            key={s.slug}
            href={s.path}
            className={`svc${active === s.slug ? " active" : ""}`}
            onMouseEnter={() => setActive(s.slug)}
          >
            <div className="svc-photo">
              <SiteImage
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              />
            </div>
            <div className="svc-body">
              <div className="svc-top">
                <span className="svc-num">{String(i + 1).padStart(2, "0")}/04</span>
                <svg className="svc-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>{s.short}</h3>
              <p>{s.cardDesc}</p>
              <div className="svc-tag">{s.tag}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
