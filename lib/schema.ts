import { SITE } from "./site";
import { SERVICES, type ServiceFaq } from "./services";

const businessId = `${SITE.url}/#business`;
const websiteId = `${SITE.url}/#website`;

const KNOWS_ABOUT = [
  "Pladur",
  "Tabiques de pladur",
  "Trasdosados",
  "Aislamiento térmico",
  "Aislamiento acústico",
  "Lana de roca",
  "Lana de roca proyectada",
  "Techos continuos",
  "Techos de pladur",
  "Techos registrables",
  "Reformas integrales",
  "Falsos techos",
];

export function businessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": businessId,
    name: SITE.name,
    alternateName: ["Chairi Aislamientos", "Aislamientos Chairi Ceuta"],
    description:
      "Empresa de pladur, aislamiento térmico y acústico, proyección de lana de roca, techos y reformas en Ceuta. Cuadrilla propia, presupuesto cerrado y 2 años de garantía.",
    url: SITE.url,
    image: [`${SITE.url}/logo.png`, `${SITE.url}/og.jpg`],
    logo: `${SITE.url}/logo.png`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: "Ciudad Autónoma de Ceuta",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ceuta",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Ciudad Autónoma de Ceuta",
        },
      },
      { "@type": "Place", name: "Recinto Sur, Ceuta" },
      { "@type": "Place", name: "Hadú, Ceuta" },
      { "@type": "Place", name: "Juan Carlos I, Ceuta" },
      { "@type": "Place", name: "Centro, Ceuta" },
      { "@type": "Place", name: "Polígono, Ceuta" },
    ],
    knowsAbout: KNOWS_ABOUT,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pladur, lana de roca, techos y reformas en Ceuta",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.metaDescription,
          url: `${SITE.url}${s.path}`,
          areaServed: { "@type": "City", name: SITE.city },
          provider: { "@id": businessId },
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "customer service",
      areaServed: "ES-CE",
      availableLanguage: ["Spanish"],
    },
  };

  if (SITE.sameAs.length) data.sameAs = SITE.sameAs;
  return data;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE.name,
    url: SITE.url,
    description:
      "Pladur, aislamiento, lana de roca y reformas en Ceuta. Aislamientos Chairi.",
    inLanguage: "es-ES",
    publisher: { "@id": businessId },
  };
}

export function faqJsonLd(faqs: ServiceFaq[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    alternateName: service.keywords.slice(0, 4),
    description: service.metaDescription,
    url: `${SITE.url}${service.path}`,
    serviceType: service.short,
    areaServed: {
      "@type": "City",
      name: SITE.city,
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": businessId,
      name: SITE.name,
      telephone: SITE.phoneE164,
      email: SITE.email,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: "Ciudad Autónoma de Ceuta",
        addressCountry: "ES",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "City", name: SITE.city },
      url: `${SITE.url}${service.path}`,
    },
  };
}

export function breadcrumbJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${SITE.url}${service.path}`,
      },
    ],
  };
}

/** FAQ global de la home (consultas típicas + Ceuta) */
export const HOME_FAQS: ServiceFaq[] = [
  {
    question: "¿Quién hace pladur en Ceuta?",
    answer:
      "Aislamientos Chairi monta pladur en Ceuta desde hace más de 20 años: tabiques, trasdosados, estanterías y cajones en viviendas, locales y naves. Cuadrilla propia, sin subcontratas a ciegas. Tel. +34 681 36 95 08.",
  },
  {
    question: "¿Dónde contratar aislamiento o lana de roca en Ceuta?",
    answer:
      "En Aislamientos Chairi proyectamos lana de roca y montamos aislamiento térmico y acústico en toda Ceuta. Visita de medición en 24 h y presupuesto cerrado por partidas.",
  },
  {
    question: "¿Montáis techos de pladur en Ceuta?",
    answer:
      "Sí. Techos continuos, registrables y de celosía, con LED y climatización integrada, en pisos y locales de toda Ceuta.",
  },
  {
    question: "¿Hacéis reformas integrales en Ceuta?",
    answer:
      "Sí. Coordinamos pladur, techos, aislamiento e instalaciones con una sola interlocución y plazo por escrito.",
  },
];
