import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES, getService } from "@/lib/services";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import SiteImage from "@/components/SiteImage";

export default function ServiceArticle({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;

  return (
    <article className="service-page">
      <JsonLd data={serviceJsonLd(slug)} />
      <JsonLd data={breadcrumbJsonLd(slug)} />

      <header className="service-hero">
        <p className="kicker">
          <span className="num">{String(SERVICES.findIndex((s) => s.slug === slug) + 1).padStart(2, "0")}</span> {service.tag}
        </p>
        <h1 className="section-title">{service.h1}</h1>
        <p className="service-lead">{service.lead}</p>
      </header>

      <div className="service-grid">
        <div className="service-copy">
          {service.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
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
              Escribir por WhatsApp
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

      <nav className="service-more" aria-label="Otros servicios">
        <p className="kicker"><span className="num">+</span> Más servicios</p>
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
