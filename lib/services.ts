export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDoc = {
  slug: string;
  path: string;
  name: string;
  short: string;
  cardDesc: string;
  tag: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  paragraphs: string[];
  bullets: string[];
  faqs: ServiceFaq[];
  img: string;
  width: number;
  height: number;
  alt: string;
};

export const SERVICES: ServiceDoc[] = [
  {
    slug: "pladur-ceuta",
    path: "/pladur-ceuta",
    name: "Pladur en Ceuta",
    short: "Pladur",
    cardDesc:
      "Tabiques, trasdosados, particiones y cajones. Pladur estándar, ignífugo, hidrófugo o acústico — según la obra.",
    tag: "Knauf · Pladur · 13/15 mm",
    title: "Pladur en Ceuta | Tabiques, trasdosados y pladur a medida",
    metaDescription:
      "Pladur en Ceuta: tabiques, trasdosados, estanterías y cajones. Cuadrilla propia en toda Ceuta. Presupuesto cerrado y visita en 24 h. Tel. +34 681 36 95 08.",
    keywords: [
      "pladur ceuta",
      "pladur en ceuta",
      "tabiques pladur ceuta",
      "trasdosados pladur ceuta",
      "instalación pladur ceuta",
      "pladur barato ceuta",
      "empresa pladur ceuta",
    ],
    h1: "Pladur en Ceuta: tabiques y trasdosados de obra",
    lead:
      "Montamos pladur en viviendas, locales y naves de Ceuta. Tabiques, trasdosados, librerías empotradas y cajones — con perfilería bien aplomada y placas atornilladas a regla.",
    paragraphs: [
      "El pladur, bien ejecutado, no es un apaño provisional: es un sistema de tabiquería seca que reparte cargas, deja pasos de instalaciones y se entrega listo para pintar. En Aislamientos Chairi llevamos dos décadas montando pladur en Ceuta, en pisos del Recinto y Hadú, en locales del centro y en naves del polígono. No subcontratamos la cuadrilla: medimos, cortamos y atornillamos nosotros.",
      "Un tabique de pladur empieza por la perfilería. Canal en suelo y techo, montantes a distancia de placa, refuerzos donde irá una puerta o un mueble alto, y holgura para que el aislamiento no quede aplastado. Luego van las placas — estándar, hidrófuga verde en zonas húmedas, ignífuga o acústica según el uso — atornilladas, juntas tratadas y cantos rematados. Si el tabique lleva carpintería, dejamos el hueco a escuadra y la estructura vista en el vano hasta que entre el marco.",
      "También hacemos pladur a medida: estanterías de suelo a techo, librerías con huecos a distinta cota, cajones de pilar y trasdosados que corrigen una pared irregular. En Ceuta eso importa: muchos pisos tienen medianeras antiguas, humedades de fachada y techos que no están a nivel. El pladur permite alinear, aislar y vestir sin picar todo el paramento.",
      "Trabajamos con placas de 13 y 15 mm, perfiles galvanizados y marcas de obra (Knauf, Pladur). El presupuesto de pladur en Ceuta va por partidas: metros de tabique, número de huecos, tipo de placa y tratamiento de juntas. No hay extras inventados a mitad de obra. Si la vivienda está habitada, protegemos suelos, recogemos escombro cada día y dejamos la zona transitable. En naves, el mismo sistema a otra escala: tabiques altos, huecos de puerta industrial y plazas de carga que hay que respetar.",
      "Buscas pladur en Ceuta, tabiques de pladur o un trasdosado en tu piso o local? Escríbenos por WhatsApp o llama al +34 681 36 95 08. Pasamos a medir el mismo día o al siguiente, en horario laboral.",
    ],
    bullets: [
      "Tabiques y particiones con o sin aislamiento interior",
      "Trasdosados para alinear, aislar o esconder instalaciones",
      "Placa estándar, hidrófuga, ignífuga o acústica",
      "Estanterías, librerías y cajones a medida",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el pladur en Ceuta?",
        answer:
          "Depende de metros de tabique o trasdosado, tipo de placa (estándar, hidrófuga, ignífuga o acústica), huecos de puerta y si lleva lana mineral. En Aislamientos Chairi damos presupuesto cerrado por partidas tras medir en tu obra en Ceuta, sin compromiso.",
      },
      {
        question: "¿Hacéis pladur en toda Ceuta?",
        answer:
          "Sí. Montamos pladur en viviendas, locales y naves de toda Ceuta: Recinto, Hadú, centro, Juan Carlos I, polígono y resto de barrios. Visita de medición en 24 h en horario laboral.",
      },
      {
        question: "¿Qué tipos de pladur instaláis?",
        answer:
          "Placa estándar de 13 y 15 mm, hidrófuga (verde) en baños y cocinas, ignífuga donde lo pide la normativa e placas acústicas cuando hay que cortar ruido entre estancias. Marcas de obra: Knauf y Pladur.",
      },
      {
        question: "¿Cuánto tarda un tabique de pladur?",
        answer:
          "Un tabique sencillo en vivienda suele montarse en uno o dos días; trasdosados y muebles a medida dependen de metros y remates. El plazo lo dejamos por escrito en el presupuesto antes de empezar.",
      },
    ],
    img: "/images/tabique-pladur-nave.webp",
    width: 1154,
    height: 1363,
    alt: "Oficial de Aislamientos Chairi atornillando un tabique de pladur en una nave de Ceuta",
  },
  {
    slug: "aislamiento-termico-acustico-ceuta",
    path: "/aislamiento-termico-acustico-ceuta",
    name: "Aislamiento térmico y acústico en Ceuta",
    short: "Aislamientos",
    cardDesc:
      "También rociamos lana de roca. Trasdosados con lana mineral, EPS y cubiertas: térmico y acústico.",
    tag: "Lana de roca · Térmico · Acústico",
    title: "Aislamiento térmico y acústico en Ceuta | Lana de roca",
    metaDescription:
      "Aislamiento térmico y acústico en Ceuta. Lana de roca, lana mineral y trasdosados. Menos ruido y menos calor en viviendas y locales. Visita en 24 h.",
    keywords: [
      "aislamiento ceuta",
      "aislamientos ceuta",
      "aislamiento térmico ceuta",
      "aislamiento acústico ceuta",
      "aislamiento térmico acústico ceuta",
      "lana mineral ceuta",
      "aislar pared ceuta",
    ],
    h1: "Aislamiento térmico y acústico en Ceuta",
    lead:
      "Lana mineral en trasdosados, tabiques y cubiertas. También proyectamos lana de roca sobre forjados, estructuras y techos de garaje o nave — para no oír al vecino, no asarnos en agosto y que el aire no se escape por la medianera.",
    paragraphs: [
      "Ceuta no es un clima suave todo el año. En verano el calor entra por fachadas sin cámara y por cubiertas; en invierno, y con el levante, las medianeras finas transmiten cada conversación del piso de al lado. El aislamiento de verdad no es una manta pegada a la pared: es un sistema — perfilería, lana, placa — con espesor, densidad y sellado de encuentros. En Aislamientos Chairi somos especialistas en aislamiento térmico y acústico en Ceuta.",
      "También proyectamos lana de roca. Se rocía sobre forjados, estructuras metálicas, bajantes y techos de garaje o nave, y queda adherida sin juntas. El espesor lo marcamos en la visita, según el soporte y lo que haya que cubrir. No es la misma partida que la lana en manta: el presupuesto indica superficie, espesor y si después va placa o se deja vista. Si buscas lana de roca en Ceuta, tenemos página dedicada y cuadrilla propia.",
      "En obra montamos trasdosados autoportantes con lana de roca o lana de vidrio entre montantes, y placa de pladur por fuera. En baños y cocinas usamos placa hidrófuga verde. En techos, el mismo criterio: cámara, lana y placa continua o registrable, coordinado con el climatizador. Si hay conductos Isover Climaver u otros pasos, los dejamos vistos por registro; no los tapamos a ciegas.",
      "El aislamiento acústico pide masa, desolidarización y no dejar puentes. Un tabique de una sola placa sin lana no corta el ruido de un televisor. Por eso medimos el hueco, decimos qué espesor cabe y qué se puede esperar: no prometemos estudio de grabación en un piso de Hadú con 8 cm de cámara. Sí podemos bajar de forma clara el ruido de conversación y de impacto ligero cuando el sistema está bien cerrado en suelos, techos y cajas de persiana.",
      "También aislamos cubiertas y huecos puntuales — un dormitorio medianero, un local junto a un bar, una oficina con cassette. El presupuesto de aislamientos en Ceuta indica marca y densidad de la lana, espesor y tipo de placa. Firmamos esa partida y no la cambiamos a mitad. Estamos cerca: si hay duda en obra, el jefe de cuadrilla lo resuelve in situ.",
      "Si oyes al vecino, si el calor no deja dormir o si un local necesita cumplir un aislamiento mínimo en Ceuta, llámanos al +34 681 36 95 08 o escribe a aislamientoschairi@gmail.com. Visitamos en 24 h en horario laboral.",
    ],
    bullets: [
      "Proyección de lana de roca sobre forjados, estructuras y techos",
      "Trasdosados con lana mineral y placa de pladur",
      "Aislamiento acústico de medianeras y techos",
      "Placa hidrófuga en zonas húmedas",
      "Coordinación con climatización y conductos",
    ],
    faqs: [
      {
        question: "¿Qué aislamiento térmico funciona mejor en Ceuta?",
        answer:
          "Depende del soporte: en trasdosados y tabiques usamos lana de roca o lana de vidrio con placa de pladur; en forjados, garajes y estructuras proyectamos lana de roca. En la visita medimos espesor posible y te decimos qué sistema encaja en tu vivienda o local de Ceuta.",
      },
      {
        question: "¿El aislamiento acústico elimina todo el ruido del vecino?",
        answer:
          "No prometemos silencio absoluto. Un sistema bien cerrado (lana + placa + sellado de encuentros) reduce de forma clara la conversación y el ruido ligero. El resultado depende del espesor de cámara y de si el ruido entra también por techo o suelo.",
      },
      {
        question: "¿Aisláis medianeras y cubiertas en Ceuta?",
        answer:
          "Sí. Trasdosados en medianeras, techos con cámara y lana, y cubiertas o huecos puntuales. Presupuesto por partidas con marca, densidad y espesor indicados.",
      },
    ],
    img: "/images/trasdosado-aislamiento.webp",
    width: 1200,
    height: 1600,
    alt: "Trasdosado con lana mineral y placa hidrófuga verde en una obra de Ceuta",
  },
  {
    slug: "lana-de-roca-ceuta",
    path: "/lana-de-roca-ceuta",
    name: "Lana de roca en Ceuta",
    short: "Lana de roca",
    cardDesc:
      "Proyectamos lana de roca sobre forjados, estructuras y techos. Aislamiento térmico, acústico y protección al fuego.",
    tag: "Proyectada · Térmico · Acústico",
    title: "Lana de roca en Ceuta | Proyección y aislamiento",
    metaDescription:
      "Lana de roca en Ceuta: proyección sobre forjados, estructuras y techos. Aislamiento térmico, acústico y contra el fuego. Cuadrilla propia. Visita en 24 h.",
    keywords: [
      "lana de roca ceuta",
      "lana de roca en ceuta",
      "proyección lana de roca ceuta",
      "lana de roca proyectada ceuta",
      "aislar con lana de roca ceuta",
      "roca mineral ceuta",
      "aislamiento lana de roca ceuta",
    ],
    h1: "Lana de roca en Ceuta: proyección y aislamiento de obra",
    lead:
      "Rociamos lana de roca en Ceuta sobre forjados, estructuras metálicas, bajantes y techos de garaje o nave. Queda adherida sin juntas: aislamiento térmico, acústico y protección al fuego en una sola capa.",
    paragraphs: [
      "La lana de roca proyectada no es la misma partida que la manta entre montantes. Se proyecta en húmedo sobre el soporte, se adhiere y forma una capa continua sin puentes térmicos ni juntas abiertas. En Aislamientos Chairi proyectamos lana de roca en Ceuta desde hace años: garajes comunitarios, naves del polígono, forjados de locales y estructuras que hay que revestir sin perder altura útil.",
      "¿Para qué sirve la lana de roca en Ceuta? Tres cosas a la vez: bajar el calor que entra por el forjado en verano, cortar ruido de planta a planta o de máquina, y aportar resistencia al fuego cuando lo pide el proyecto o la comunidad. El espesor lo marcamos en la visita según el soporte (hormigón, chapa, viga) y el objetivo — térmico, acústico o ambos.",
      "También montamos lana de roca en manta dentro de trasdosados y tabiques de pladur: entre montantes, con placa por fuera, en viviendas y oficinas de toda Ceuta. No mezclamos partidas: en el presupuesto queda claro qué es proyección y qué es sistema de tabiquería seca. Si después de proyectar va placa o se deja vista, lo firmamos antes.",
      "Trabajamos limpio: protección de zonas colindantes, retirada de restos y control de espesor. En locales y garajes encajamos el trabajo fuera de horario de uso cuando hace falta. Marca y densidad van en el parte; no cambiamos el material a mitad sin aviso.",
      "Si buscas lana de roca en Ceuta, proyección de lana de roca o aislar un techo de garaje o nave, llama al +34 681 36 95 08 o escribe por WhatsApp. Pasamos, medimos y te damos precio cerrado por metro y espesor.",
    ],
    bullets: [
      "Proyección de lana de roca sobre forjados y estructuras",
      "Techos de garaje, naves y locales en toda Ceuta",
      "Lana de roca en manta para trasdosados y tabiques",
      "Aislamiento térmico, acústico y protección al fuego",
      "Espesor y densidad indicados en presupuesto",
    ],
    faqs: [
      {
        question: "¿Qué es la lana de roca proyectada?",
        answer:
          "Es lana mineral de roca que se rocía sobre el soporte (forjado, estructura, techo) y queda adherida formando una capa continua. En Ceuta la usamos en garajes, naves y forjados cuando hay que aislar sin montar un falsotecho completo.",
      },
      {
        question: "¿Cuánto cuesta proyectar lana de roca en Ceuta?",
        answer:
          "El precio va por metro cuadrado y espesor. También influye el acceso, la altura y si después va placa o se deja vista. Tras medir en tu obra, Aislamientos Chairi te da presupuesto cerrado sin compromiso.",
      },
      {
        question: "¿Lana de roca o lana de vidrio?",
        answer:
          "La lana de roca aguanta mejor altas temperaturas y se usa mucho en proyección y protección al fuego. La de vidrio es habitual en trasdosados ligeros. En la visita te decimos cuál encaja según el uso en tu vivienda o local de Ceuta.",
      },
      {
        question: "¿Hacéis lana de roca en toda Ceuta?",
        answer:
          "Sí. Proyectamos y montamos lana de roca en toda la ciudad: viviendas, locales, garajes comunitarios y naves. Visita en 24 h en horario laboral.",
      },
    ],
    img: "/images/trasdosado-aislamiento.webp",
    width: 1200,
    height: 1600,
    alt: "Aislamiento con lana mineral en obra de Aislamientos Chairi en Ceuta",
  },
  {
    slug: "techos-continuos-ceuta",
    path: "/techos-continuos-ceuta",
    name: "Techos continuos en Ceuta",
    short: "Techos",
    cardDesc:
      "Techos continuos, registrables y desniveles iluminados. Empotrados de tira LED y luminarias incluidas.",
    tag: "Continuos · Registrables · LED",
    title: "Techos de pladur en Ceuta | Continuos y registrables",
    metaDescription:
      "Techos de pladur en Ceuta: continuos, registrables y celosía. LED perimetral y climatización integrada en viviendas y locales. Visita en 24 h.",
    keywords: [
      "techos ceuta",
      "techos pladur ceuta",
      "techos continuos ceuta",
      "techo registrable ceuta",
      "falsos techos ceuta",
      "techo de pladur ceuta",
      "techos led ceuta",
    ],
    h1: "Techos continuos y registrables en Ceuta",
    lead:
      "Techos de pladur en continuo, registrables de placa y celosía. Integramos luminarias, tira LED y cassettes de aire sin dejar el cielo raso hecho un mapa de recortes.",
    paragraphs: [
      "Un techo bien montado es lo primero que se ve al entrar en un local y lo último que se nota en una vivienda si está bien. En Ceuta montamos tres familias de techos: techo continuo de pladur (liso, con desnivel o cajón de luz), techo registrable de placas sobre perfilería vista, y techo de celosía cuando hay que dejar paso a climatización y luminarias de raíl.",
      "El techo continuo de pladur pide estructura bien nivelada, placas sin cejas y juntas tratadas. Ahí van los empotramientos de downlight o la tira LED en un perímetro o en un cajón central. Medimos los puntos de luz con el electricista — o los dejamos preparados si la instalación va por nuestra parte en una reforma — para no abrir el techo dos veces. En oficinas y comercios de Ceuta solemos trabajar fuera de horario de apertura.",
      "El registrable es otra lógica: perfilería vista, placa de 60×60 o similar, y registros reales donde hay máquinas y válvulas. Las rejillas de impulsión y retorno se integran en la trama, no se recortan a ojo. La celosía negra, que hemos montado en locales de Ceuta, deja ver el plenum a propósito: cassette, conductos y luminarias conviven.",
      "En naves y trasteros a veces basta un techo técnico limpio. En viviendas, el continuo de pladur es el que pide la gente: que no se vea el forjado, que baje un poco la altura si hay que pasar tubos, y que el LED no deslumbre. Cada sistema de techos en Ceuta tiene un precio por metro y un plazo en días. Lo dejamos por escrito.",
      "Para un techo en Ceuta — continuo, registrable, celosía o techo de pladur con LED — WhatsApp o +34 681 36 95 08. Pasamos, medimos y te decimos qué sistema cabe en tu altura libre.",
    ],
    bullets: [
      "Techos continuos de pladur, lisos o con desnivel",
      "Registrables con climatización y registros reales",
      "Celosía coordinada con luminarias y cassettes",
      "Tira LED perimetral y empotramientos de luz",
    ],
    faqs: [
      {
        question: "¿Qué tipos de techos de pladur hacéis en Ceuta?",
        answer:
          "Techos continuos lisos o con desnivel, techos registrables de placa y techos de celosía. Integramos LED, downlights y climatización. Te recomendamos el sistema según altura libre y uso (vivienda, local o nave).",
      },
      {
        question: "¿Cuánto cuesta un techo continuo en Ceuta?",
        answer:
          "El precio va por metro cuadrado y según si lleva desnivel, cajón de luz, LED o solo placa lisa. Tras medir, presupuesto cerrado por partidas sin sorpresas.",
      },
      {
        question: "¿Montáis techos registrables en locales?",
        answer:
          "Sí. Perfilería vista, placas 60×60 y registros reales para máquinas y válvulas. En comercios de Ceuta solemos trabajar fuera de horario de apertura.",
      },
    ],
    img: "/images/techo-celosia.webp",
    width: 1086,
    height: 1448,
    alt: "Techo de celosía negra con luminarias instalado en un local de Ceuta",
  },
  {
    slug: "reformas-integrales-ceuta",
    path: "/reformas-integrales-ceuta",
    name: "Reformas integrales en Ceuta",
    short: "Reformas",
    cardDesc:
      "Reforma integral coordinada — albañilería, pladur, electricidad, fontanería y pintura con una sola interlocución.",
    tag: "Llave en mano",
    title: "Reformas en Ceuta | Pladur, techos y obra coordinada",
    metaDescription:
      "Reformas integrales en Ceuta: pladur, techos, aislamiento, electricidad y pintura con una sola interlocución. Presupuesto cerrado y cuadrilla propia.",
    keywords: [
      "reformas ceuta",
      "reformas integrales ceuta",
      "reforma piso ceuta",
      "reforma local ceuta",
      "empresa reformas ceuta",
      "reforma pladur ceuta",
    ],
    h1: "Reformas integrales en Ceuta",
    lead:
      "Una reforma no es cuatro gremios que no se hablan. Coordinamos pladur, techos, aislamiento e instalaciones con un interlocutor y un plazo en días reales.",
    paragraphs: [
      "En Ceuta reformamos pisos, locales y naves. Lo que pedimos no es un proyecto de revista: es que la obra avance sin que el cliente tenga que arbitrar entre el electricista y el de pladur. Aislamientos Chairi toma la tabiquería seca, los techos y el aislamiento, y coordina el resto — electricidad, fontanería, pintura — para que los huecos, las cajas y los desniveles coincidan a la primera.",
      "Una reforma de local en Ceuta suele ser techo + iluminación + alguna partición y un remate de paramentos. Una de vivienda puede ser redistribuir un pasillo con tabiques de pladur, aislar la medianera del dormitorio y dejar los techos listos para pintar. En ambos casos visitamos, medimos y fotografiamos. El presupuesto va cerrado por partidas.",
      "Trabajar en una ciudad pequeña tiene una ventaja: estamos a un salto. Si hay que decidir un encuentro de placa con una jamba antigua, no se espera una semana a un jefe de obra que vive en otra provincia. El parte fotográfico semanal no es marketing: es para que veas el estado real. Cuando la reforma es de local, encajamos el trabajo en fines de semana o de noche.",
      "No prometemos reformas de 90 m² en cuatro días. Sí prometemos no desaparecer a media obra, recoger al final de cada jornada y entregar con 2 años de garantía sobre lo que hemos ejecutado. El teléfono de la cuadrilla es el mismo que el de la visita.",
      "Si tienes un piso, un local o una nave en Ceuta y quieres una sola empresa para el pladur, el techo y el aislamiento — y coordinación del resto — escribe por WhatsApp o llama al +34 681 36 95 08. El correo es aislamientoschairi@gmail.com.",
    ],
    bullets: [
      "Redistribución con tabiques de pladur",
      "Techos, iluminación y climatización coordinados",
      "Aislamiento de medianeras y cubiertas en la misma obra",
      "Una interlocución y presupuesto cerrado por partidas",
    ],
    faqs: [
      {
        question: "¿Hacéis reformas integrales en toda Ceuta?",
        answer:
          "Sí. Reformamos viviendas, locales y naves en toda Ceuta con una sola interlocución: pladur, techos, aislamiento y coordinación de electricidad, fontanería y pintura.",
      },
      {
        question: "¿El presupuesto de reforma es cerrado?",
        answer:
          "Sí. Presupuesto por partidas, materiales por marca y plazo en días. Si algo no entra, se dice antes de firmar, no a mitad de obra.",
      },
      {
        question: "¿Cuánto tarda una reforma de local en Ceuta?",
        answer:
          "Depende de metros y alcance. En locales solemos encajar techos e iluminación fuera de horario para no cerrar más días de los firmados. El plazo concreto va en el presupuesto.",
      },
    ],
    img: "/images/techo-led-local.webp",
    width: 720,
    height: 1600,
    alt: "Techo continuo con tira LED perimetral en un local reformado en Ceuta",
  },
];

import type { Metadata } from "next";

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceMetadata(slug: string): Metadata {
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: service.path },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: service.path,
      type: "article" as const,
      locale: "es_ES",
      siteName: "Aislamientos Chairi",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: service.alt }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: service.title,
      description: service.metaDescription,
      images: ["/og.jpg"],
    },
    robots: { index: true, follow: true },
  };
}
