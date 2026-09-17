import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
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
          <div className="foot-tag">{SITE.years} AÑOS · CEUTA · ESPAÑA</div>
        </div>
        <div>
          <h6>Servicios</h6>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.path}>{s.short}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6>Empresa</h6>
          <ul>
            <li><Link href="/#proceso">Cómo trabajamos</Link></li>
            <li><Link href="/#obras">Obras</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h6>Contacto</h6>
          <ul>
            <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li><a href={SITE.emailHref}>{SITE.email}</a></li>
            <li>Ceuta · Toda la ciudad</li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Aislamientos Chairi · Ceuta</span>
        <span>Presupuesto sin compromiso</span>
      </div>
    </footer>
  );
}
