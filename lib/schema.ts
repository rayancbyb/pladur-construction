import { SITE } from "./site";
import { SERVICES } from "./services";

const businessId = `${SITE.url}/#business`;

export function businessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/og.jpg`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: "Ceuta",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: SITE.city,
    },
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
      name: "Servicios de pladur, aislamiento y reformas en Ceuta",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE.url}${s.path}`,
        },
      })),
    },
  };

  if (SITE.sameAs.length) data.sameAs = SITE.sameAs;
  return data;
}

export function serviceJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${SITE.url}${service.path}`,
    areaServed: { "@type": "City", name: SITE.city },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": businessId,
      name: SITE.name,
      telephone: SITE.phoneE164,
      email: SITE.email,
      url: SITE.url,
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
