"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div className="logo-mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 21 L12 4 L21 21 Z" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M8 21 L12 13 L16 21" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="logo-word">
          AISLAMIENTOS
          <br />
          CHAIRI
          <small>PLADUR · AISLAM. · REFORMAS</small>
        </div>
      </div>

      <div className="nav-links">
        <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollTo("servicios"); }}>Servicios</a>
        <a href="#proceso" onClick={(e) => { e.preventDefault(); scrollTo("proceso"); }}>Proceso</a>
        <a href="#obras" onClick={(e) => { e.preventDefault(); scrollTo("obras"); }}>Obras</a>
        <a href="#presupuesto" onClick={(e) => { e.preventDefault(); scrollTo("presupuesto"); }}>Presupuesto</a>
        <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}>Contacto</a>
      </div>

      <button className="nav-cta" onClick={() => scrollTo("contacto")}>
        <span className="dot" />
        Pedir Presupuesto
      </button>
    </nav>
  );
}
