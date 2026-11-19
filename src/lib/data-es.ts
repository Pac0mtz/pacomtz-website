import type { Project, Service } from './data';

/** Spanish translations of the site content (same ids/structure as data.ts). */

export const SERVICES_ES: Service[] = [
  {
    id: 'web-design',
    index: '01',
    title: 'Diseño y Desarrollo Web',
    blurb: 'Sitios web a la medida que se ven increíbles y convierten visitas en clientes.',
    detail:
      'De la investigación y el plan al último píxel — me encargo de todo el desarrollo de tu sitio web. Cada sitio es responsivo, rápido y diseñado alrededor de tus metas de negocio, no de una plantilla.',
    deliverables: ['Diseño UI/UX a la medida', 'Front-end responsivo', 'Landing pages', 'Optimización de rendimiento'],
    headline: 'Un sitio web es tu empleado más trabajador. Yo construyo de los que nunca descansan.',
    body: [
      'Cada proyecto empieza por entender tu negocio — quiénes son tus clientes, qué necesitan encontrar y qué acción quieres que tomen. A partir de ahí diseño un plan: estructura, contenido y una dirección visual hecha para tu marca, no sacada de una tienda de temas.',
      'Después lo construyo a mano: HTML semántico, CSS y JavaScript modernos, imágenes optimizadas y código limpio que carga rápido en cualquier dispositivo. El resultado es un sitio que se ve increíble, posiciona bien y convierte visitas en llamadas, pedidos y reservaciones.',
    ],
    process: [
      { step: 'Descubrimiento', text: 'Hablamos de tu negocio, clientes y metas. Audito lo que existe y defino lo que el sitio debe lograr.' },
      { step: 'Plan de diseño', text: 'Wireframes y dirección visual — layout, tipografía, color e imágenes — revisados juntos antes de escribir código.' },
      { step: 'Desarrollo', text: 'Construcción responsiva hecha a mano, con contenido real, formularios reales y rendimiento desde el inicio.' },
      { step: 'Lanzamiento', text: 'Despliegue, analítica, fundamentos de SEO y una entrega para que lo actualices tú mismo — o yo lo mantengo por ti.' },
    ],
    outcomes: ['Carga en menos de 2 segundos', 'Funciona perfecto en todo dispositivo', 'Hecho para posicionar en Google', 'Fácil de actualizar por ti'],
  },
  {
    id: 'wordpress',
    index: '02',
    title: 'WordPress y Sitios para Restaurantes',
    blurb: 'WordPress, sistemas de pedidos en línea y sitios que llenan mesas.',
    detail:
      'Especializado en sitios WordPress para restaurantes y negocios locales — menús, reservaciones y pedidos en línea que funcionan en cualquier dispositivo y que tú mismo puedes actualizar.',
    deliverables: ['Desarrollo WordPress', 'Pedidos en línea', 'Menús y reservaciones', 'Capacitación y entrega'],
    headline: 'Los restaurantes viven en los teléfonos. Tu sitio debe tomar el pedido antes de que llamen.',
    body: [
      'WordPress impulsa gran parte de la web por una razón — bien hecho, te da un sitio rápido y seguro que puedes actualizar tú mismo. Mal hecho, es una pila lenta de plugins. Yo lo hago bien: temas ligeros, plugins cuidadosamente elegidos, seguridad reforzada y un panel limpio.',
      'Para restaurantes voy más allá: menús que se ven apetitosos en el teléfono, pedidos en línea que evitan las comisiones del 30% de las apps, reservaciones, horarios, mapas y un perfil de Google Business que aparece cuando alguien busca "birria cerca de mí".',
    ],
    process: [
      { step: 'Menú y contenido', text: 'Organizamos tu menú, fotos, horarios e historia en una estructura hecha para gente con hambre en el teléfono.' },
      { step: 'Construcción', text: 'Tema WordPress a la medida con tu marca — nada de plantillas genéricas de restaurante.' },
      { step: 'Pedidos y reservaciones', text: 'Pedidos en línea, reservaciones y contacto conectados y probados de punta a punta.' },
      { step: 'Capacitación', text: 'Una sesión para que tu equipo actualice menús, fotos y especiales sin llamar a nadie.' },
    ],
    outcomes: ['Pedidos sin comisiones', 'Menú actualizado en minutos', 'Listo para Google Maps y búsqueda local', 'Tu equipo lo administra'],
  },
  {
    id: 'seo',
    index: '03',
    title: 'Servicios de SEO',
    blurb: 'Que te encuentren. SEO técnico y de contenido que te pone en la primera página.',
    detail:
      'Catapulto negocios a los primeros lugares de los buscadores con auditorías técnicas, optimización on-page, SEO local y datos estructurados — trabajo de precisión que se acumula mes a mes.',
    deliverables: ['Auditoría técnica SEO', 'SEO local y Google Business', 'Estrategia de palabras clave', 'Schema y datos estructurados'],
    headline: 'Si Google no te encuentra, tus clientes tampoco.',
    body: [
      'El SEO no son trucos — es ingeniería. Empiezo con una auditoría técnica: rastreabilidad, velocidad, renderizado móvil, datos estructurados y cada problema silencioso que mantiene a buenos negocios fuera de la primera página. Luego los corrijo a nivel de código, porque yo escribí ese código.',
      'Para negocios locales, el mapa lo es todo. Optimizo tu perfil de Google Business, citas locales, flujo de reseñas y páginas de ubicación para que aparezcas justo cuando alguien cercano está listo para comprar.',
    ],
    process: [
      { step: 'Auditoría', text: 'Rastreo técnico completo: velocidad, indexación, enlaces rotos, problemas móviles, schema y vacíos de contenido.' },
      { step: 'Corrección', text: 'Arreglos técnicos y on-page implementados directamente — títulos, metas, encabezados, datos estructurados, Core Web Vitals.' },
      { step: 'Local', text: 'Optimización de Google Business, citas y estrategia de reseñas para visibilidad en el mapa.' },
      { step: 'Crecer', text: 'Seguimiento de palabras clave y reportes mensuales — ves exactamente qué se movió y por qué.' },
    ],
    outcomes: ['Visibilidad local en primera página', 'Resultados enriquecidos con schema', 'Core Web Vitals en verde', 'Reportes mensuales transparentes'],
  },
  {
    id: 'social',
    index: '04',
    title: 'Marketing en Redes Sociales',
    blurb: 'Conecta con tus clientes actuales y encuentra nuevos donde ya están.',
    detail:
      'Las redes sociales son clave en cómo tu marca posiciona y conecta. Construyo campañas que involucran a clientes actuales y potenciales — y convierten seguidores en promotores de tu marca.',
    deliverables: ['Estrategia de contenido', 'Gestión de campañas', 'Voz e imagen de marca', 'Reportes de crecimiento'],
    headline: 'Tus clientes pasan horas haciendo scroll. Tu marca debe ser lo que detiene el dedo.',
    body: [
      'Las redes sociales son donde los negocios locales ganan atención antes de que Google entre en escena. Construyo una estrategia de contenido alrededor de la voz de tu marca — qué publicar, cuándo y por qué — para que cada publicación tenga un trabajo: atraer, conectar o convertir.',
      'Lo visual importa tanto como las palabras. Como diseñador, yo mismo creo las publicaciones, historias y gráficos de campaña, manteniendo todo consistente con tu sitio web y tu marca.',
    ],
    process: [
      { step: 'Estrategia', text: 'Audiencia, plataformas, pilares de contenido y un calendario de publicación a tu medida.' },
      { step: 'Crear', text: 'Gráficos, fotos y textos con tu marca, producidos para ti — no plantillas genéricas.' },
      { step: 'Publicar', text: 'Publicación constante, respuestas a la comunidad y promoción de tu mejor contenido.' },
      { step: 'Reportar', text: 'Números mensuales que importan: alcance, interacción, clics y clientes — no métricas de vanidad.' },
    ],
    outcomes: ['Presencia de marca constante', 'Contenido que tú no tienes que hacer', 'Interacción real, no bots', 'Reportes mensuales claros'],
  },
  {
    id: 'ppc',
    index: '05',
    title: 'Campañas PPC',
    blurb: 'Pago por clic que sí paga — adquisición de clientes rápida y medible.',
    detail:
      'Una de las formas más rápidas de conectar con clientes potenciales. Configuro y administro campañas PPC para que cada dólar invertido sea medido, probado y optimizado.',
    deliverables: ['Configuración de Google Ads', 'Landing pages alineadas', 'Seguimiento de conversiones', 'Optimización mensual'],
    headline: 'Anuncios que se pagan solos — cada clic medido, cada dólar justificado.',
    body: [
      'PPC es la forma más rápida de llegar a clientes que están buscando ahora mismo. Pero la mayoría de las cuentas de anuncios de pequeños negocios pierden dinero en palabras clave amplias y clics que no llevan a ningún lado. Yo construyo campañas precisas: palabras clave de intención exacta, listas negativas y anuncios escritos para calificar el clic antes de que lo pagues.',
      'Como yo también construyo las landing pages, el anuncio y la página hablan el mismo idioma — mismo mensaje, misma oferta, mismo llamado a la acción. Esa alineación es lo que convierte un clic de $2 en un cliente de $200.',
    ],
    process: [
      { step: 'Investigación', text: 'Palabras clave y competencia para encontrar las búsquedas que valen la pena — y las que hay que bloquear.' },
      { step: 'Construcción', text: 'Estructura de campaña, textos de anuncios y una landing page diseñada para convertir ese clic.' },
      { step: 'Medición', text: 'Seguimiento de conversiones en llamadas, formularios y pedidos para que cada dólar tenga dueño.' },
      { step: 'Optimización', text: 'Ajustes semanales — pujas, negativos, pruebas A/B — y un reporte mensual en español claro.' },
    ],
    outcomes: ['Menor costo por cliente', 'Anuncio + landing alineados', 'Seguimiento completo de conversiones', 'Cero gasto desperdiciado'],
  },
  {
    id: 'branding',
    index: '06',
    title: 'Diseño de Logo y Marca',
    blurb: 'El logo que atrae clientes e identifica tu marca.',
    detail:
      'Una identidad moderna y memorable con el look más actual — logo, paleta y sistema tipográfico diseñados para que tu negocio sea reconocible al instante.',
    deliverables: ['Diseño de logo', 'Paleta y tipografía de marca', 'Papelería comercial', 'Manual de marca'],
    headline: 'La gente juzga tu negocio en 50 milisegundos. Tu logo es el veredicto.',
    body: [
      'Un logo no es decoración — es la bandera que tu negocio ondea en cada letrero, menú, factura y foto de perfil. Diseño marcas lo suficientemente simples para recordar, distintivas para ser tuyas y flexibles para funcionar de una tarjeta de presentación a un espectacular.',
      'Cada identidad se entrega como un sistema completo: variaciones del logo, paleta de color, tipografía y guías de uso, para que todo lo que publiques se vea que viene del mismo lugar.',
    ],
    process: [
      { step: 'Brief', text: 'Tu historia, tus clientes, tu competencia — y lo que tu marca debe decir antes de leer una palabra.' },
      { step: 'Conceptos', text: 'Varias direcciones distintas, presentadas en aplicaciones reales — letreros, tarjetas, pantallas.' },
      { step: 'Refinar', text: 'Iteramos juntos sobre la dirección elegida hasta que sea inconfundiblemente tuya.' },
      { step: 'Entrega', text: 'Paquete completo de archivos — impresión, web, redes — más un manual de marca que cualquiera puede seguir.' },
    ],
    outcomes: ['Una marca que la gente recuerda', 'Paquete completo de archivos', 'Manual de marca incluido', 'Consistencia en todos lados'],
  },
  {
    id: 'photo',
    index: '07',
    title: 'Fotografía de Alimentos',
    blurb: 'Fotos de platillos que dan hambre antes de entrar a tu negocio.',
    detail:
      'Fotografía profesional de alimentos que hace tu menú irresistible en línea — para tu sitio web, perfil de Google Business, redes sociales y apps de entrega.',
    deliverables: ['Sesión fotográfica en tu local', 'Estilismo de platillos', 'Set editado de entrega', 'Archivos optimizados para web'],
    headline: 'Nadie pide el platillo que se ve mal en la foto.',
    body: [
      'Una buena fotografía de alimentos es el contenido con mayor retorno que un restaurante puede comprar: el mismo set de imágenes mejora tu sitio web, perfil de Google Business, Instagram, menús y apps de entrega, todo a la vez.',
      'Fotografío en tu restaurante, estilizo cada platillo para la cámara y entrego un set editado y optimizado para web — brillante, apetitoso y consistente con tu marca.',
    ],
    process: [
      { step: 'Lista de fotos', text: 'Elegimos los platillos insignia, bebidas y tomas del espacio que cargarán tu marca.' },
      { step: 'Sesión', text: 'Sesión en tu local con estilismo — mínima interrupción, usualmente antes de abrir.' },
      { step: 'Edición', text: 'Color corregido, retoque y recortes para cada ubicación.' },
      { step: 'Entrega', text: 'Set en resolución completa más versiones optimizadas listas para subir a cualquier lado.' },
    ],
    outcomes: ['Fotos que abren el apetito', 'Una sesión, todos los canales', 'Archivos optimizados para web', 'Tú eres dueño de las imágenes'],
  },
  {
    id: 'maintenance',
    index: '08',
    title: 'Mantenimiento y Soporte',
    blurb: 'Soporte dedicado con mínimo tiempo caído y una experiencia sin fricciones.',
    detail:
      'Con soporte dedicado resuelvo problemas rápido y mantengo tu sitio funcionando — actualizaciones, respaldos, seguridad y pequeñas mejoras, todo atendido por mí.',
    deliverables: ['Actualizaciones y respaldos', 'Monitoreo de seguridad', 'Ediciones de contenido', 'Soporte prioritario'],
    headline: 'Tu sitio, bien cuidado — para que tú te ocupes de tu negocio.',
    body: [
      'Un sitio web nunca está "terminado" — actualizaciones de software, parches de seguridad, cambios de contenido y alguna que otra emergencia son parte de tener uno. Mis planes de mantenimiento quitan todo eso de tu plato.',
      'Tienes a una persona real que conoce tu sitio porque lo construyó: soporte prioritario, monitoreo proactivo y pequeñas mejoras atendidas conforme surgen, con mínimo tiempo caído y una experiencia impecable para tus clientes.',
    ],
    process: [
      { step: 'Inicio', text: 'Respaldo completo, línea base de seguridad y revisión de salud de tu sitio actual.' },
      { step: 'Proteger', text: 'Actualizaciones, respaldos y monitoreo de seguridad corriendo en calendario, cada mes.' },
      { step: 'Soporte', text: 'Ediciones de contenido, pequeñas mejoras y arreglos — a un mensaje de distancia.' },
      { step: 'Reporte', text: 'Un resumen mensual simple de todo lo hecho y de lo que merece tu atención.' },
    ],
    outcomes: ['Cero ansiedad por actualizaciones', 'Respaldos diarios', 'Respuesta prioritaria', 'Una llamada lo arregla todo'],
  },
];

export const PROJECTS_ES: Project[] = [
  {
    id: 'ais',
    title: 'AIS Environmental',
    category: 'Servicios Ambientales · Diseño Web y SEO',
    year: '2025',
    description:
      'Sitio completo para una empresa de pruebas de asbesto y servicios de propiedad en IL · IN · WI — 41 páginas de zonas de servicio, 17 servicios y un flujo de cotizaciones que genera clientes.',
    tags: ['Diseño Web', 'SEO', 'Páginas Locales'],
    url: 'https://aisenvironmentalinc.com',
    palette: { bg: '#0d1a14', fg: '#eaf4ee', accent: '#3fae6a' },
    featured: true,
  },
  {
    id: 'labirrieria',
    title: 'La Birrieria',
    category: 'Restaurante · Sitio Web y Marca',
    year: '2024',
    description:
      'Sitio para el lugar de birria estilo Jalisco en Chicago — menú, barra de tequila, galería del patio y horarios, hecho para convertir búsquedas de "la mejor birria cerca" en casa llena.',
    tags: ['Diseño Web', 'Restaurante', 'SEO Local'],
    url: 'https://labirrieria.com',
    palette: { bg: '#1c1006', fg: '#f7ecdd', accent: '#ff8e4d' },
    featured: true,
  },
  {
    id: 'soluna',
    title: 'Soluna Restoration',
    category: 'Restauración de Daños · Diseño Web',
    year: '2024',
    description:
      'Restauración por fuego, agua, moho y asbesto en Chicago — páginas de servicio escritas y estructuradas para posicionar y convertir cuando el desastre llega y la velocidad importa.',
    tags: ['Diseño Web', 'SEO', 'Redacción'],
    url: 'https://solunarestoration.com',
    palette: { bg: '#0d1622', fg: '#e8f0f8', accent: '#0099ff' },
  },
  {
    id: 'ab',
    title: 'A&B Environmental Construction',
    category: 'Ambiental · Diseño Web',
    year: '2023',
    description:
      'Presencia en línea para un contratista de remoción de asbesto y pintura con plomo en Chicago desde 2004 — diseño que genera confianza con certificaciones y llamados a cotización.',
    tags: ['Diseño Web', 'Branding', 'Generación de Clientes'],
    url: 'https://abenvironmentalcons.com',
    palette: { bg: '#101422', fg: '#eaeef7', accent: '#3f6fe0' },
  },
  {
    id: 'marquez',
    title: 'Marquez Construction',
    category: 'Albañilería · Diseño Web',
    year: '2023',
    description:
      'Contratista familiar de albañilería en Chicago con más de 20 años en el oficio — sitio basado en portafolio que muestra trabajo en ladrillo, piedra y concreto con cotizaciones gratis.',
    tags: ['Diseño Web', 'Portafolio', 'Fotografía'],
    url: 'https://marquezconstructionco.com',
    palette: { bg: '#171310', fg: '#f3ece2', accent: '#d9a066' },
  },
];

export const SKILLS_ES = [
  { name: 'Desarrollo Web', level: 95 },
  { name: 'WordPress', level: 95 },
  { name: 'Diseño UI/UX', level: 85 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'SEO y SEM', level: 75 },
];

export const EXPERIENCE_ES = [
  {
    role: 'Diseñador UI/UX Líder',
    period: 'Líder de Diseño',
    text: 'Lideré un equipo de 5 diseñadores — ayudando, supervisando y aprobando su trabajo para asegurar que cada entrega cumpliera las expectativas del cliente y los últimos estándares de diseño.',
  },
  {
    role: 'Desarrollador Web',
    period: 'Interno y para Clientes',
    text: 'Responsable de todos los proyectos web y de diseño gráfico, tanto internos como de clientes, ganando las calificaciones máximas para la empresa.',
  },
];
