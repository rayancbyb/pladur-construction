"use client";

import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", phone: "", email: "", msg: "", svc: [] as string[] });
  const [sent, setSent] = useState(false);

  const upd = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));
  const toggle = (s: string) =>
    setData((d) => ({
      ...d,
      svc: d.svc.includes(s) ? d.svc.filter((x) => x !== s) : [...d.svc, s],
    }));
  const valid = data.name.length > 1 && data.phone.length >= 6 && data.svc.length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="sent">
        <div className="ok">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <path d="m5 12 5 5 9-10" stroke="#0B0B0C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4>Tu mensaje está en obra.</h4>
        <p>
          Hemos recibido tu solicitud. Te llamamos en menos de{" "}
          <b style={{ color: "#FFD60A" }}>1 hora hábil</b> para concretar la visita. Si es urgente,
          llámanos al <b style={{ color: "#fff" }}>+34 642 18 90 23</b>.
        </p>
        <button
          className="btn"
          style={{ alignSelf: "flex-start", marginTop: 8, color: "#FFD60A", borderColor: "#FFD60A" }}
          onClick={() => {
            setSent(false);
            setData({ name: "", phone: "", email: "", msg: "", svc: [] });
          }}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field">
        <label>Servicio</label>
        <div className="chips">
          {["Pladur", "Aislamiento", "Techos", "Reforma", "Otro"].map((s) => (
            <button
              type="button"
              key={s}
              className={`chip${data.svc.includes(s) ? " on" : ""}`}
              onClick={() => toggle(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>Nombre</label>
        <input className="input" value={data.name} onChange={(e) => upd("name", e.target.value)} placeholder="Tu nombre" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div className="field">
          <label>Teléfono</label>
          <input className="input" value={data.phone} onChange={(e) => upd("phone", e.target.value)} placeholder="+34" />
        </div>
        <div className="field">
          <label>Correo (opcional)</label>
          <input className="input" value={data.email} onChange={(e) => upd("email", e.target.value)} placeholder="tucorreo@..." />
        </div>
      </div>
      <div className="field">
        <label>Cuéntanos la obra</label>
        <textarea
          className="input"
          value={data.msg}
          onChange={(e) => upd("msg", e.target.value)}
          placeholder="Tipo de obra, superficie aproximada, plazos, lo que sea..."
        />
      </div>
      <button className="submit" type="submit" disabled={!valid}>
        Enviar solicitud
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="#0B0B0C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div style={{ fontFamily: "JetBrains Mono", fontSize: 11, letterSpacing: ".12em", color: "#9a9a9f" }}>
        AL ENVIAR ACEPTAS NUESTRA POLÍTICA DE PRIVACIDAD · RESPUESTA EN &lt; 1 H HÁBIL
      </div>
    </form>
  );
}
