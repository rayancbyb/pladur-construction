import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsCounter from "@/components/StatsCounter";
import ProjectGrid from "@/components/ProjectGrid";
import JsonLd from "@/components/JsonLd";
import SiteImage from "@/components/SiteImage";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import {
  HOME_FAQS,
  businessJsonLd,
  faqJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aislamientos Chairi · Pladur, lana de roca y reformas en Ceuta",
  description:
    "Pladur en Ceuta, aislamiento térmico y acústico, lana de roca proyectada, techos y reformas. Cuadrilla propia, 20 años, +500 obras y visita en 24 h. Tel. +34 681 36 95 08.",
  keywords: [
    "pladur ceuta",
    "aislamiento ceuta",
    "lana de roca ceuta",
    "techos ceuta",
    "reformas ceuta",
    "Aislamientos Chairi",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <Hero />
      <Services />

      <section className="section process-wrap" id="proceso">
        <div className="section-head">
          <div>
            <div className="kicker"><span className="num">02</span> Cómo trabajamos</div>
            <h2 className="section-title">De la visita<br />al último remate.</h2>
          </div>
          <p className="section-lead" style={{ color: "#bbb" }}>
            Sin desapariciones a media obra. En Ceuta estamos cerca: jefe de cuadrilla con nombre
            y teléfono, y parte fotográfico cada viernes.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-dot" />
            <div className="step-n">01</div>
            <h4>Visita y medición</h4>
            <p>Pasamos por la obra el mismo día o al siguiente. Medimos, fotografiamos, escuchamos. Sin compromiso.</p>
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

        <div className="obra-strip">
          <figure className="obra-shot">
            <SiteImage
              src="/images/tabique-pladur-nave.webp"
              alt="Oficial atornillando un tabique de pladur en una nave de Ceuta"
              width={1154}
              height={1363}
              sizes="(max-width: 1100px) 100vw, 40vw"
            />
            <figcaption>01 · Tabique en nave</figcaption>
          </figure>
          <figure className="obra-shot">
            <SiteImage
              src="/images/techo-celosia-obra.webp"
              alt="Techo de celosía coordinado con climatización en un local de Ceuta"
              width={1600}
              height={720}
              sizes="(max-width: 1100px) 100vw, 60vw"
            />
            <figcaption>02 · Celosía + instalaciones</figcaption>
          </figure>
          <figure className="obra-shot">
            <SiteImage
              src="/images/cuadrilla-entrega.webp"
              alt="Cuadrilla de Aislamientos Chairi al entregar un local con techo de celosía en Ceuta"
              width={1600}
              height={721}
              sizes="(max-width: 1100px) 100vw, 60vw"
            />
            <figcaption>03 · Entrega de local</figcaption>
          </figure>
        </div>
      </section>

      <StatsCounter />
      <ProjectGrid />

      <section className="section seo-zone" aria-labelledby="seo-ceuta">
        <div className="section-head">
          <div>
            <div className="kicker"><span className="num">04</span> Ceuta</div>
            <h2 id="seo-ceuta" className="section-title">
              Pladur, aislamientos<br />y lana de roca en Ceuta.
            </h2>
          </div>
          <p className="section-lead">
            Si buscas pladur en Ceuta, aislamiento térmico o acústico, techos de pladur o
            proyección de lana de roca, somos cuadrilla local: medimos, presupuestamos y
            ejecutamos en toda la ciudad.
          </p>
        </div>
        <div className="seo-grid">
          <div className="seo-copy">
            <p>
              <Link href="/pladur-ceuta">Pladur en Ceuta</Link> — tabiques, trasdosados,
              particiones y muebles a medida en viviendas, locales y naves.{" "}
              <Link href="/aislamiento-termico-acustico-ceuta">Aislamiento en Ceuta</Link>{" "}
              con lana mineral y sistemas de pladur.{" "}
              <Link href="/lana-de-roca-ceuta">Lana de roca en Ceuta</Link> proyectada
              sobre forjados, garajes y estructuras.{" "}
              <Link href="/techos-continuos-ceuta">Techos continuos en Ceuta</Link> y{" "}
              <Link href="/reformas-integrales-ceuta">reformas integrales</Link> con una
              sola interlocución.
            </p>
            <p>
              Trabajamos en Recinto, Hadú, Juan Carlos I, centro, polígono y resto de
              barrios. Visita en 24 h, presupuesto cerrado y {SITE.years} años de obra
              real en Ceuta. Teléfono{" "}
              <a href={SITE.phoneHref}>{SITE.phone}</a>.
            </p>
            <ul className="seo-links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <section className="service-faq home-faq" aria-labelledby="faq-home">
            <h3 id="faq-home" className="service-h2">
              Preguntas frecuentes
            </h3>
            <dl className="faq-list">
              {HOME_FAQS.map((f) => (
                <div key={f.question} className="faq-item">
                  <dt>{f.question}</dt>
                  <dd>{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <section className="contact-wrap" id="contacto">
        <div className="contact">
          <div>
            <div className="kicker"><span className="num">05</span> Hablemos</div>
            <h2 className="section-title">Cuéntanos<br />tu obra.</h2>
            <p className="section-lead" style={{ color: "#bbb", marginTop: 18 }}>
              Contestamos por WhatsApp en menos de una hora, en horario laboral. Estamos en Ceuta:
              si la obra ya está en marcha, llámanos y pasamos.
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
                  <p><a href={SITE.phoneHref}>{SITE.phone}</a></p>
                  <small>{SITE.hours}</small>
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
                  <p><a href={SITE.emailHref}>{SITE.email}</a></p>
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
                  <h5>Dónde estamos</h5>
                  <p>Ceuta · Toda la ciudad</p>
                  <small>Visitas a obra con cita · También locales y naves</small>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <a
                className="btn btn-y"
                href={SITE.waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
              <a className="btn btn-ghost contact-call" href={SITE.phoneHref}>
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
