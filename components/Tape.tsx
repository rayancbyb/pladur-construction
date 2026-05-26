"use client";

const items = [
  "PLADUR DE OBRA REAL",
  "AISLAMIENTO TÉRMICO + ACÚSTICO",
  "TECHOS CONTINUOS",
  "REFORMAS INTEGRALES",
  "CUADRILLA PROPIA",
  "2 AÑOS DE GARANTÍA",
  "PRESUPUESTO EN 48 H",
];

export default function Tape() {
  const track = items.map((t, i) => (
    <span key={i}>
      {t}
      <i />
    </span>
  ));

  return (
    <div className="tape">
      <div className="tape-track">
        {track}
        {track}
      </div>
    </div>
  );
}
