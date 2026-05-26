import Tape from "@/components/Tape";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsCounter from "@/components/StatsCounter";
import ProjectGrid from "@/components/ProjectGrid";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Tape />
      <Navbar />
      <Hero />
      <Services />

      {/* Process */}
      <section className="section process-wrap" id="proceso">
        <div className="section-head">
          <div>
            <div className="kicker"><span className="num">02</span> Cómo trabajamos</div>
            <h2 className="section-title">De la visita<br />al último remate.</h2>
          </div>
          <p className="section-lead" style={{ color: "#bbb" }}>
            Sin desapariciones a media obra. Tendrás un jefe de cuadrilla con nombre y teléfono y un
            parte fotográfico cada viernes.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-dot" />
            <div className="step-n">01</div>
            <h4>Visita y medición</h4>
            <p>Pasamos por la obra en 48 h. Medimos, fotografiamos, escuchamos. Sin compromiso.</p>
          </div>
          <div className="step">
            <div className="step-dot" />
            <div className="step-n">02</div>
            <h4>Presupuesto cerrado</h4>
            <p>Precio por partidas, materiales por marca, plazo en días reales. Firmamos y no se mueve.</p>
          </div>
          <div className="step">
            <div className="step-dot" />
            <div className="step-n">03</div>
            <h4>Ejecución limpia</h4>
            <p>Protección de suelos, retirada diaria de escombro y final de jornada con la obra recogida.</p>
          </div>
          <div className="step">
            <div className="step-dot" />
            <div className="step-n">04</div>
            <h4>Entrega y garantía</h4>
            <p>
              Repaso punto por punto, parte de obra entregado y <b>2 años</b> de garantía sobre todo
              lo ejecutado.
            </p>
          </div>
        </div>
      </section>

      <StatsCounter />
      <ProjectGrid />
      <Calculator />

      {/* Testimonials */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="kicker"><span className="num">05</span> Lo que dicen</div>
            <h2 className="section-title">Clientes que han<br />vivido la obra.</h2>
          </div>
          <p className="section-lead">Reseñas reales de Google y boca a boca. Recogidas tras la entrega — no antes.</p>
        </div>
        <div className="quotes">
          <div className="quote">
            <div className="mark">&ldquo;</div>
            <p>
              Esperaba &quot;obra de pladur&quot;: polvo, retrasos y excusas. Lo que hubo fue una cuadrilla
              puntual, limpia y un acabado de revestidor. Volvería a llamarles mañana.
            </p>
            <div className="who">
              <div className="avatar">MR</div>
              <div>
                <div className="nm">Marta R.</div>
                <div className="rl">Reforma piso · Chamberí</div>
              </div>
              <div className="stars" style={{ marginLeft: "auto" }}>★★★★★</div>
            </div>
          </div>
          <div className="quote">
            <div className="mark">&ldquo;</div>
            <p>
              Aislaron el muro medianero y por fin duermo sin oír al vecino. El presupuesto que
              firmamos es exactamente el que pagué. Cero extras inventados.
            </p>
            <div className="who">
              <div className="avatar">JL</div>
              <div>
                <div className="nm">Javier L.</div>
                <div className="rl">Aislam. acústico · Getafe</div>
              </div>
              <div className="stars" style={{ marginLeft: "auto" }}>★★★★★</div>
            </div>
          </div>
          <div className="quote">
            <div className="mark">&ldquo;</div>
            <p>
              Montaron techos continuos en toda la oficina (180 m²) en seis días, fuera de horario. El
              lunes abrimos como si nada hubiera pasado. Profesionales de verdad.
            </p>
            <div className="who">
              <div className="avatar">CP</div>
              <div>
                <div className="nm">Carla P.</div>
                <div className="rl">Reforma local · Alcorcón</div>
              </div>
              <div className="stars" style={{ marginLeft: "auto" }}>★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-wrap" id="contacto">
        <div className="contact">
          <div>
            <div className="kicker"><span className="num">06</span> Hablemos</div>
            <h2 className="section-title">Cuéntanos<br />tu obra.</h2>
            <p className="section-lead" style={{ color: "#bbb", marginTop: 18 }}>
              Contestamos por WhatsApp en menos de una hora, en horario laboral. Para obra ya
              iniciada, llámanos directamente — vamos a tope.
            </p>
            <div className="contact-info" style={{ marginTop: 34 }}>
              <div className="info-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="#0B0B0C" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h5>Teléfono · WhatsApp</h5>
                  <p>+34 642 18 90 23</p>
                  <small>Lun–Vie 8:00–18:00 · Sáb 9:00–13:00</small>
                </div>
              </div>
              <div className="info-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" stroke="#0B0B0C" strokeWidth="2" />
                    <path d="m3 6 9 7 9-7" stroke="#0B0B0C" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h5>Correo</h5>
                  <p>info@aislamientoschairi.es</p>
                  <small>Respondemos en menos de 24 horas</small>
                </div>
              </div>
              <div className="info-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13Z" stroke="#0B0B0C" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" stroke="#0B0B0C" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h5>Nave taller</h5>
                  <p>C/ del Olivar, 14 · Móstoles</p>
                  <small>Visitas con cita previa</small>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="foot">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <div className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 21 L12 4 L21 21 Z" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
                  <path d="M8 21 L12 13 L16 21" stroke="#0B0B0C" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="logo-word" style={{ color: "var(--bone)" }}>
                AISLAMIENTOS<br />CHAIRI
              </div>
            </div>
            <div className="foot-big" style={{ color: "var(--yellow)" }}>
              Obra que<br />no se cae.
            </div>
            <div className="foot-tag">EST. 2008 · MADRID · ESPAÑA</div>
          </div>
          <div>
            <h6>Servicios</h6>
            <ul>
              <li><a>Pladur</a></li>
              <li><a>Aislamiento térmico</a></li>
              <li><a>Aislamiento acústico</a></li>
              <li><a>Techos continuos</a></li>
              <li><a>Reformas integrales</a></li>
            </ul>
          </div>
          <div>
            <h6>Empresa</h6>
            <ul>
              <li><a>Sobre nosotros</a></li>
              <li><a>Obras</a></li>
              <li><a>Cuadrilla</a></li>
              <li><a>Trabaja con nosotros</a></li>
            </ul>
          </div>
          <div>
            <h6>Contacto</h6>
            <ul>
              <li>+34 642 18 90 23</li>
              <li>info@aislamientoschairi.es</li>
              <li>C/ del Olivar 14, Móstoles</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Aislamientos Chairi S.L. · CIF B-87654321</span>
          <span>Aviso legal · Privacidad · Cookies</span>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
