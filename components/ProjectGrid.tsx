"use client";

import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  t: string;
  cat: string;
  loc: string;
  days: number;
  m2: number;
  img: string;
  gallery: string[];
  blurb: string;
}

const projects: Project[] = [
  {
    id: 1,
    t: "Techo registrable",
    cat: "Techos",
    loc: "Hadú",
    days: 8,
    m2: 140,
    img: "/images/techo-registrable.jpg",
    gallery: [
      "/images/techo-registrable.jpg",
      "/images/techo-registrable-sala.jpg",
      "/images/techo-registrable-montaje.jpg",
    ],
    blurb:
      "Techo registrable de placas blancas sobre perfilería vista. Rejillas de climatización integradas, paramentos lisos y suelo ya protegido en la entrega.",
  },
  {
    id: 2,
    t: "Techo continuo oficina",
    cat: "Techos",
    loc: "Recinto",
    days: 12,
    m2: 320,
    img: "/images/techo-continuo-oficina.jpg",
    gallery: ["/images/techo-continuo-oficina.jpg"],
    blurb:
      "Placas de pladur en continuo sobre estructura, con pasos de instalaciones y huecos de luminaria. Montaje en local comercial en obra.",
  },
  {
    id: 3,
    t: "Librería a medida",
    cat: "Pladur",
    loc: "Juan Carlos I",
    days: 6,
    m2: 12,
    img: "/images/libreria-pladur.jpg",
    gallery: ["/images/libreria-pladur.jpg"],
    blurb:
      "Mueble de pladur empotrado: huecos a distinta altura, zócalo, cornisa y hueco superior para iluminación. Listo para pintar y vestir.",
  },
  {
    id: 4,
    t: "Local con techo LED",
    cat: "Reformas",
    loc: "Centro",
    days: 10,
    m2: 85,
    img: "/images/techo-led-local.jpg",
    gallery: ["/images/techo-led-local.jpg"],
    blurb:
      "Techo continuo con cajón central, tira LED perimetral y lámpara vista. Acabado de local de hostelería, listo para abrir.",
  },
  {
    id: 5,
    t: "Estantería empotrada",
    cat: "Pladur",
    loc: "Sarchal",
    days: 5,
    m2: 10,
    img: "/images/estanteria-pladur.jpg",
    gallery: ["/images/estanteria-pladur.jpg"],
    blurb:
      "Estantería de pladur de suelo a techo, doble calle y baldas a distinta cota. Encaje con molduras existentes de la vivienda.",
  },
  {
    id: 6,
    t: "Techo de celosía",
    cat: "Techos",
    loc: "El Tarajal",
    days: 14,
    m2: 180,
    img: "/images/techo-celosia.jpg",
    gallery: [
      "/images/techo-celosia.jpg",
      "/images/techo-celosia-obra.jpg",
      "/images/cuadrilla-entrega.jpg",
    ],
    blurb:
      "Techo de celosía negra con luminarias y cassette de climatización. Coordinado con conductos y pasos de instalaciones vistos por registro.",
  },
  {
    id: 7,
    t: "Tabique de pladur",
    cat: "Pladur",
    loc: "Polígono",
    days: 9,
    m2: 95,
    img: "/images/tabique-pladur-nave.jpg",
    gallery: ["/images/tabique-pladur-nave.jpg"],
    blurb:
      "Tabique de pladur sobre perfilería metálica, con huecos de carpintería. Placas atornilladas en nave, estructura vista en los vanos y suelo de hormigón.",
  },
  {
    id: 8,
    t: "Trasdosado con aislamiento",
    cat: "Pladur",
    loc: "Príncipe Alfonso",
    days: 7,
    m2: 48,
    img: "/images/trasdosado-aislamiento.jpg",
    gallery: ["/images/trasdosado-aislamiento.jpg"],
    blurb:
      "Trasdosado de perfilería con lana mineral y placa hidrófuga verde. Conducto Isover Climaver a techo y pasos de instalaciones vistos: aislamiento térmico y acústico de obra.",
  },
];

const cats = ["Todo", "Pladur", "Techos", "Reformas"];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("Todo");
  const [modal, setModal] = useState<Project | null>(null);
  const [shot, setShot] = useState(0);

  const list = filter === "Todo" ? projects : projects.filter((p) => p.cat === filter);

  const closeModal = useCallback(() => {
    setModal(null);
    setShot(0);
  }, []);

  const openModal = (p: Project) => {
    setShot(0);
    setModal(p);
  };

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
            <h2 className="section-title">Obra real.<br />Esto es lo último.</h2>
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
            Fotos de obra propia: tabiques, trasdosados con lana, techos y pladur a medida.
            Toca cualquier ficha para ver el detalle.
          </p>
        </div>

        <div className="grid">
          {list.map((p, i) => (
            <div key={p.id} className="card" onClick={() => openModal(p)}>
              <div className="card-media">
                <img className="card-img" src={p.img} alt={p.t} loading="lazy" />
              </div>
              <div className="card-info">
                <div className="card-title">{p.t}</div>
                <div className="card-num">
                  {String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </div>
                <div className="card-meta">
                  <span>{p.cat}</span>
                  <span>{p.loc} · {p.days}d</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        className={`modal${modal ? " show" : ""}`}
        onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}
      >
        {modal && (
          <div className="modal-card">
            <div className="modal-img">
              <img
                src={modal.gallery[shot]}
                alt={modal.t}
              />
              {modal.gallery.length > 1 && (
                <div className="modal-thumbs">
                  {modal.gallery.map((src, i) => (
                    <button
                      key={src}
                      className={`modal-thumb${shot === i ? " on" : ""}`}
                      onClick={() => setShot(i)}
                      aria-label={`Foto ${i + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-body">
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="kicker">
                <span className="num">{String(modal.id).padStart(2, "0")}</span> {modal.cat}
              </div>
              <h3>{modal.t}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.55, color: "#3a3a3e" }}>
                {modal.blurb}
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
