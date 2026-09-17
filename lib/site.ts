export const SITE = {
  name: "Aislamientos Chairi",
  city: "Ceuta",
  url: "https://aislamientoschairi.com",
  phone: "+34 681 36 95 08",
  phoneE164: "+34681369508",
  phoneHref: "tel:+34681369508",
  waHref: "https://wa.me/34681369508?text=Hola%2C%20quiero%20pedir%20presupuesto",
  email: "aislamientoschairi@gmail.com",
  emailHref: "mailto:aislamientoschairi@gmail.com",
  hours: "Lun–Vie 8:00–18:00 · Sáb 9:00–13:00",
  years: 20,
  works: 500,
  geo: { lat: 35.8894, lng: -5.3198 },
  sameAs: [] as string[],
};

export const NAV = [
  { label: "Servicios", hash: "servicios" },
  { label: "Proceso", hash: "proceso" },
  { label: "Obras", hash: "obras" },
  { label: "Contacto", hash: "contacto" },
] as const;
