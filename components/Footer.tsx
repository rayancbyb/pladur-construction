import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div>
          <div className="logo" style={{ marginBottom: 16 }}>
            <Logo />
          </div>
          <div className="foot-big" style={{ color: "var(--yellow)" }}>
            Obra que<br />no se cae.
          </div>
          <div className="foot-tag">{SITE.years} AÑOS · CEUTA · ESPAÑA</div>
        </div>
        <div>
          <h6>Servicios en Ceuta</h6>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={s.path}>{s.name}</Link>
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
