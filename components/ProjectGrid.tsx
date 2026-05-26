"use client";

import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  t: string;
  cat: string;
  loc: string;
  days: number;
  m2: number;
  y: boolean;
  span: string;
}

const projects: Project[] = [
  { id: 1, t: "Loft Lavapiés", cat: "Pladur", loc: "Madrid", days: 11, m2: 78, y: true, span: "5 / 2" },
  { id: 2, t: "Oficina Atocha", cat: "Techos", loc: "Madrid", days: 6, m2: 180, y: false, span: "4 / 2" },
  { id: 3, t: "Chalet Las Rozas", cat: "Aislamientos", loc: "Las Rozas", days: 18, m2: 260, y: false, span: "3 / 2" },
  { id: 4, t: "Bar Malasaña", cat: "Reformas", loc: "Madrid", days: 24, m2: 95, y: true, span: "4 / 2" },
  { id: 5, t: "Ático Chamberí", cat: "Pladur", loc: "Madrid", days: 9, m2: 62, y: false, span: "4 / 2" },
  { id: 6, t: "Coworking Getafe", cat: "Aislamientos", loc: "Getafe", days: 14, m2: 340, y: false, span: "4 / 2" },
  { id: 7, t: "Restaurante Sol", cat: "Techos", loc: "Madrid", days: 8, m2: 140, y: true, span: "4 / 2" },
  { id: 8, t: "Vivienda Pozuelo", cat: "Reformas", loc: "Pozuelo", days: 32, m2: 120, y: false, span: "4 / 2" },
];

const cats = ["Todo", "Pladur", "Aislamientos", "Techos", "Reformas"];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("Todo");
  const [modal, setModal] = useState<Project | null>(null);

  const list = filter === "Todo" ? projects : projects.filter((p) => p.cat === filter);

  const closeModal = useCallback(() => setModal(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeModal]);

  const scrollToContact = () => {
    closeModal();
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <section className="section" id="obras">
        <div className="section-head">
          <div>
            <div className="kicker"><span className="num">03</span> Obras recientes</div>
            <h2 className="section-title">820 obras.<br />Esto es lo último.</h2>
            <div className="filters">
              {cats.map((c) => (
                <button
                  key={c}
                  className={`filter${filter === c ? " active" : ""}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <p className="section-lead">
            Filtra por especialidad. Toca cualquier obra para ver ficha técnica completa, materiales
            y plazo real de ejecución.
          </p>
        </div>

        <div className="grid">
          {list.map((p, i) => {
            const [colSpan, rowSpan] = p.span.split(" / ").map(Number);
            return (
              <div
                key={p.id}
                className={`card${p.y ? " y" : ""}`}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
                onClick={() => setModal(p)}
              >
                <div className="ph" />
                <div className="card-num">
                  {String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </div>
                <div className="card-title">{p.t}</div>
                <div className="card-meta">
                  <span>{p.cat}</span>
                  <span>{p.loc} · {p.days}d</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <div
        className={`modal${modal ? " show" : ""}`}
        onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}
      >
        {modal && (
          <div className="modal-card">
            <div
              className="modal-img"
              style={{ background: modal.y ? "var(--yellow)" : "#16161A" }}
            >
              <div className="ph" />
            </div>
            <div className="modal-body">
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="kicker">
                <span className="num">{String(modal.id).padStart(2, "0")}</span> {modal.cat}
              </div>
              <h3>{modal.t}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.55, color: "#3a3a3e" }}>
                Obra de {modal.cat.toLowerCase()} ejecutada en {modal.loc}. {modal.m2} m² entregados
                en {modal.days} días naturales. Cuadrilla propia de 3 oficiales y 1 ayudante.
                Materiales certificados y partes diarios al cliente.
              </p>
              <div className="modal-meta">
                <div><b>Superficie</b>{modal.m2} m²</div>
                <div><b>Duración</b>{modal.days} días</div>
                <div><b>Ubicación</b>{modal.loc}</div>
                <div><b>Categoría</b>{modal.cat}</div>
              </div>
              <button
                className="btn btn-y"
                style={{ alignSelf: "flex-start", marginTop: 10 }}
                onClick={scrollToContact}
              >
                Quiero algo así
                <svg className="arr" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
