"use client";

export default function WhatsAppButton() {
  return (
    <button
      className="wa"
      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
    >
      <span className="ring" />
      Hablar por WhatsApp
    </button>
  );
}
