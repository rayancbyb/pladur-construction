"use client";

import { useState, useEffect, useCallback } from "react";
import SiteImage from "@/components/SiteImage";

interface Shot {
  src: string;
  w: number;
  h: number;
  alt: string;
}

interface Project {
  id: number;
  t: string;
  cat: string;
  img: string;
  w: number;
  h: number;
  alt: string;
  gallery: Shot[];
}

const projects: Project[] = [
  {
    id: 1,
    t: "Techo registrable",
    cat: "Techos",
    img: "/images/techo-registrable.webp",
    w: 1086,
    h: 1448,
    alt: "Techo registrable de placas blancas instalado en un local de Ceuta",
    gallery: [
      { src: "/images/techo-registrable.webp", w: 1086, h: 1448, alt: "Techo registrable de placas blancas instalado en un local de Ceuta" },
      { src: "/images/techo-registrable-sala.webp", w: 1086, h: 1448, alt: "Sala con techo registrable y paramentos lisos en una obra de Ceuta" },
      { src: "/images/techo-registrable-montaje.webp", w: 901, h: 1600, alt: "Oficial en andamio colocando placas de techo registrable en Ceuta" },
    ],
  },
  {
    id: 2,
    t: "Techo continuo oficina",
    cat: "Techos",
    img: "/images/techo-continuo-oficina.webp",
    w: 900,
    h: 1600,
    alt: "Techo continuo de pladur en montaje en una oficina de Ceuta",
    gallery: [
      { src: "/images/techo-continuo-oficina.webp", w: 900, h: 1600, alt: "Techo continuo de pladur en montaje en una oficina de Ceuta" },
    ],
  },
  {
    id: 3,
    t: "Librería a medida",
    cat: "Pladur",
    img: "/images/libreria-pladur.webp",
    w: 1086,
    h: 1448,
    alt: "Librería de pladur a medida empotrada en una vivienda de Ceuta",
    gallery: [
      { src: "/images/libreria-pladur.webp", w: 1086, h: 1448, alt: "Librería de pladur a medida empotrada en una vivienda de Ceuta" },
    ],
  },
  {
    id: 4,
    t: "Local con techo LED",
    cat: "Reformas",
    img: "/images/techo-led-local.webp",
    w: 720,
    h: 1600,
    alt: "Techo continuo con tira LED perimetral en un local de Ceuta",
    gallery: [
      { src: "/images/techo-led-local.webp", w: 720, h: 1600, alt: "Techo continuo con tira LED perimetral en un local de Ceuta" },
    ],
  },
  {
    id: 5,
    t: "Estantería empotrada",
    cat: "Pladur",
    img: "/images/estanteria-pladur.webp",
    w: 900,
    h: 1600,
    alt: "Estantería de pladur de suelo a techo en una vivienda de Ceuta",
    gallery: [
      { src: "/images/estanteria-pladur.webp", w: 900, h: 1600, alt: "Estantería de pladur de suelo a techo en una vivienda de Ceuta" },
    ],
  },
  {
    id: 6,
    t: "Techo de celosía",
    cat: "Techos",
    img: "/images/techo-celosia.webp",
    w: 1086,
    h: 1448,
    alt: "Techo de celosía negra con luminarias en un local de Ceuta",
    gallery: [
      { src: "/images/techo-celosia.webp", w: 1086, h: 1448, alt: "Techo de celosía negra con luminarias en un local de Ceuta" },
      { src: "/images/techo-celosia-obra.webp", w: 1600, h: 720, alt: "Montaje de techo de celosía coordinado con climatización en Ceuta" },
      { src: "/images/cuadrilla-entrega.webp", w: 1600, h: 721, alt: "Cuadrilla de Aislamientos Chairi al entregar un local con techo de celosía en Ceuta" },
    ],
  },
  {
    id: 7,
    t: "Tabique de pladur",
    cat: "Pladur",
    img: "/images/tabique-pladur-nave.webp",
    w: 1154,
    h: 1363,
    alt: "Tabique de pladur con huecos de carpintería en una nave de Ceuta",
    gallery: [
      { src: "/images/tabique-pladur-nave.webp", w: 1154, h: 1363, alt: "Tabique de pladur con huecos de carpintería en una nave de Ceuta" },
    ],
  },
  {
    id: 8,
    t: "Trasdosado con aislamiento",
    cat: "Pladur",
    img: "/images/trasdosado-aislamiento.webp",
    w: 1200,
    h: 1600,
    alt: "Trasdosado con lana mineral y placa hidrófuga en una obra de Ceuta",
    gallery: [
      { src: "/images/trasdosado-aislamiento.webp", w: 1200, h: 1600, alt: "Trasdosado con lana mineral y placa hidrófuga en una obra de Ceuta" },
    ],
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
            Toca cualquier ficha para ver las fotos.
          </p>
        </div>

        <div className="grid">
          {list.map((p, i) => (
            <div key={p.id} className="card" onClick={() => openModal(p)}>
              <div className="card-media">
                <SiteImage
                  className="card-img"
                  src={p.img}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className="card-info">
                <div className="card-title">{p.t}</div>
                <div className="card-num">
                  {String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </div>
                <div className="card-meta">
                  <span>{p.cat}</span>
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
          <div className="modal-card modal-card-simple">
            <div className="modal-img">
              <SiteImage
                src={modal.gallery[shot].src}
                alt={modal.gallery[shot].alt}
                width={modal.gallery[shot].w}
                height={modal.gallery[shot].h}
                sizes="(max-width: 1100px) 100vw, 70vw"
              />
              {modal.gallery.length > 1 && (
                <div className="modal-thumbs">
                  {modal.gallery.map((shotItem, i) => (
                    <button
                      key={shotItem.src}
                      className={`modal-thumb${shot === i ? " on" : ""}`}
                      onClick={() => setShot(i)}
                      aria-label={`Foto ${i + 1}`}
                    >
                      <SiteImage fill src={shotItem.src} alt={shotItem.alt} sizes="68px" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-body modal-body-simple">
              <button className="modal-close" onClick={closeModal}>×</button>
              <h3>{modal.t}</h3>
              <button
                className="btn btn-y"
                style={{ alignSelf: "flex-start" }}
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
