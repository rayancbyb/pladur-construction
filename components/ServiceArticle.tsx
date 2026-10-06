import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES, getService } from "@/lib/services";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import SiteImage from "@/components/SiteImage";

export default function ServiceArticle({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;

  const idx = SERVICES.findIndex((s) => s.slug === slug) + 1;

  return (
    <article className="service-page">
      <JsonLd data={serviceJsonLd(slug)} />
      <JsonLd data={breadcrumbJsonLd(slug)} />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <nav className="service-crumbs" aria-label="Miga de pan">
        <Link href="/">Inicio</Link>
        <span aria-hidden="true"> / </span>
        <span>{service.name}</span>
      </nav>

      <header className="service-hero">
        <p className="kicker">
          <span className="num">{String(idx).padStart(2, "0")}</span> {service.tag}
        </p>
        <h1 className="section-title">{service.h1}</h1>
        <p className="service-lead">{service.lead}</p>
      </header>

      <div className="service-grid">
        <div className="service-copy">
          {service.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          <h2 className="service-h2">Qué incluye este servicio en Ceuta</h2>
          <ul className="service-bullets">
            {service.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="contact-actions">
            <a
              className="btn btn-y"
              href={SITE.waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir presupuesto en Ceuta
            </a>
            <a className="btn btn-ghost" href={SITE.phoneHref}>
              Llamar {SITE.phone}
            </a>
          </div>
        </div>
        <figure className="service-photo">
          <SiteImage
            src={service.img}
            alt={service.alt}
            width={service.width}
            height={service.height}
            sizes="(max-width: 860px) 100vw, 440px"
          />
          <figcaption>{service.alt}</figcaption>
        </figure>
      </div>

      {service.faqs.length > 0 && (
        <section className="service-faq" aria-labelledby={`faq-${slug}`}>
          <h2 id={`faq-${slug}`} className="service-h2">
            Preguntas frecuentes · {service.short} en Ceuta
          </h2>
          <dl className="faq-list">
            {service.faqs.map((f) => (
              <div key={f.question} className="faq-item">
                <dt>{f.question}</dt>
                <dd>{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <nav className="service-more" aria-label="Otros servicios en Ceuta">
        <p className="kicker"><span className="num">+</span> Más servicios en Ceuta</p>
        <ul>
          {SERVICES.filter((s) => s.slug !== slug).map((s) => (
            <li key={s.slug}>
              <Link href={s.path}>{s.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
