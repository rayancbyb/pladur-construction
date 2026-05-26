"use client";

import { useState } from "react";

const services = [
  { n: "01", t: "Pladur", desc: "Tabiques, trasdosados, particiones y cajones. Pladur estándar, ignífugo, hidrófugo o acústico — según la obra.", tag: "Knauf · Pladur · 13/15 mm" },
  { n: "02", t: "Aislamientos", desc: "Lana de roca, lana de vidrio, EPS y proyectado. Térmico, acústico y para fachadas ventiladas.", tag: "Térmico · Acústico · Cubiertas" },
  { n: "03", t: "Techos", desc: "Techos continuos, registrables y desniveles iluminados. Empotrados de tira LED y luminarias incluidas.", tag: "Continuos · Registrables · LED" },
  { n: "04", t: "Reformas", desc: "Reforma integral coordinada — albañilería, pladur, electricidad, fontanería y pintura con una sola interlocución.", tag: "Llave en mano" },
];

export default function Services() {
  const [active, setActive] = useState("01");

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
        {services.map((s) => (
          <div
            key={s.n}
            className={`svc${active === s.n ? " active" : ""}`}
            onClick={() => setActive(s.n)}
          >
            <div className="svc-top">
              <span className="svc-num">{s.n}/04</span>
              <svg className="svc-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>{s.t}</h3>
            <p>{s.desc}</p>
            <div className="svc-tag">{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
