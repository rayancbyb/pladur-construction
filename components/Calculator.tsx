"use client";

import { useState, useMemo } from "react";

const prices: Record<string, { base: number; name: string }> = {
  pladur: { base: 38, name: "Tabique de pladur" },
  aislamiento: { base: 32, name: "Aislamiento (térmico/acústico)" },
  techo: { base: 46, name: "Techo continuo o registrable" },
  reforma: { base: 240, name: "Reforma integral" },
};

const finishMul: Record<string, number> = { basico: 0.85, estandar: 1, premium: 1.28, lujo: 1.65 };
const urgMul: Record<string, number> = { normal: 1, rapido: 1.12, express: 1.28 };

function nf(n: number) {
  return n.toLocaleString("es-ES", { maximumFractionDigits: 0 });
}

function SegmentedControl({
  id,
  options,
  value,
  onChange,
  cols,
}: {
  id: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) {
  return (
    <div className={`seg${cols === 3 ? " seg-3" : ""}`} id={id}>
      {options.map((opt) => (
        <button
          key={opt.value}
          className={value === opt.value ? "on" : ""}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function Calculator() {
  const [type, setType] = useState("pladur");
  const [m2, setM2] = useState(40);
  const [finish, setFinish] = useState("estandar");
  const [urg, setUrg] = useState("normal");

  const calc = useMemo(() => {
    const p = prices[type];
    const baseTotal = p.base * m2;
    const finished = baseTotal * finishMul[finish];
    const final = finished * urgMul[urg];
    const mano = Math.round(final * 0.55);
    const mat = Math.round(final * 0.35);
    const rem = Math.round(final - mano - mat);
    return { name: p.name, base: p.base, mano, mat, rem, total: Math.round(final) };
  }, [type, m2, finish, urg]);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="calc-wrap" id="presupuesto">
      <div className="calc">
        <div>
          <div className="kicker"><span className="num">04</span> Presupuesto al instante</div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>
            Calcula tu obra<br />en 30&nbsp;segundos.
          </h2>
          <p className="section-lead" style={{ marginBottom: 30 }}>
            Estimación orientativa, basada en precios reales de obras 2024-25. Después pasamos a
            confirmarla in situ — gratis.
          </p>

          <div className="calc-form">
            <div className="field">
              <label>Tipo de trabajo</label>
              <SegmentedControl
                id="seg-type"
                value={type}
                onChange={setType}
                options={[
                  { value: "pladur", label: "Pladur" },
                  { value: "aislamiento", label: "Aislamiento" },
                  { value: "techo", label: "Techos" },
                  { value: "reforma", label: "Reforma" },
                ]}
              />
            </div>

            <div className="field">
              <label>Superficie aproximada</label>
              <div className="slider-row">
                <input
                  type="range"
                  min={5}
                  max={200}
                  value={m2}
                  step={1}
                  onChange={(e) => setM2(parseInt(e.target.value))}
                />
                <div className="val">
                  {m2}
                  <small style={{ fontFamily: "JetBrains Mono", fontSize: "13px", letterSpacing: ".1em" }}>
                    {" "}m²
                  </small>
                </div>
              </div>
            </div>

            <div className="field">
              <label>Acabado</label>
              <SegmentedControl
                id="seg-finish"
                value={finish}
                onChange={setFinish}
                options={[
                  { value: "basico", label: "Básico" },
                  { value: "estandar", label: "Estándar" },
                  { value: "premium", label: "Premium" },
                  { value: "lujo", label: "Lujo" },
                ]}
              />
            </div>

            <div className="field">
              <label>¿Urgencia?</label>
              <SegmentedControl
                id="seg-urg"
                value={urg}
                onChange={setUrg}
                cols={3}
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "rapido", label: "Rápido" },
                  { value: "express", label: "Express 7d" },
                ]}
              />
            </div>
          </div>
        </div>

        <aside className="calc-summary">
          <div>
            <div className="qt">Estimación · IVA no incl.</div>
            <h3>{calc.name}</h3>
          </div>
          <div className="calc-lines">
            <div className="calc-line"><span>Superficie</span><b>{m2} m²</b></div>
            <div className="calc-line"><span>Precio base</span><b>{nf(calc.base)} €/m²</b></div>
            <div className="calc-line"><span>Mano de obra</span><b>{nf(calc.mano)} €</b></div>
            <div className="calc-line"><span>Materiales</span><b>{nf(calc.mat)} €</b></div>
            <div className="calc-line"><span>Remates y limpieza</span><b>{nf(calc.rem)} €</b></div>
          </div>
          <div>
            <div className="calc-total">
              <div className="lbl">Total estimado</div>
              <div className="amt">
                {nf(calc.total)}<small>€</small>
              </div>
            </div>
            <button className="calc-cta" onClick={scrollToContact}>
              <span>Bloquear este precio →</span>
              <span>48 h</span>
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
