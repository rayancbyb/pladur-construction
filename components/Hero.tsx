"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      <div className="hero-grid">
        <div>
          <div className="h-eyebrow">
            <span className="sq" /> Constructora · Estab. 2008 · Madrid &amp; alrededores
          </div>
          <h1 className="h-title">
            Levantamos
            <br />
            <span className="y">paredes</span>
            <br />
            que <em>aíslan</em>.
          </h1>
          <p className="h-sub">
            Especialistas en <b>pladur</b>, <b>aislamiento térmico y acústico</b> y reformas
            integrales. Trabajamos limpio, rápido y con acabados de obra real — sin sorpresas, sin
            chapuzas.
          </p>
          <div className="h-actions">
            <button className="btn btn-y" onClick={() => scrollTo("presupuesto")}>
              Calcular Presupuesto
              <svg className="arr" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("obras")}>
              Ver Obras
            </button>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="n">17</div><div className="l">Años en activo</div></div>
            <div className="meta-item"><div className="n">+820</div><div className="l">Obras entregadas</div></div>
            <div className="meta-item"><div className="n">4.9★</div><div className="l">Valoración clientes</div></div>
            <div className="meta-item"><div className="n">48 h</div><div className="l">Presupuesto medio</div></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="/images/hero-cuadrilla.jpg"
              alt="Oficial de Aislamientos Chairi montando techo de pladur"
            />
            <div className="img-stamp">REF · 05 / Cuadrilla en obra</div>
            <div className="img-caption">
              <span>Techo de pladur — montaje en altura</span>
              <span>Madrid</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        SCROLL <span className="ln" />
      </div>
    </header>
  );
}
