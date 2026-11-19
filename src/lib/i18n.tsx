import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'en' | 'es';

const STORAGE_KEY = 'pmtz-lang';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** has the visitor already chosen a language (gate dismissed)? */
  chosen: boolean;
  t: (key: string) => string;
}

const Ctx = createContext<LangCtx | null>(null);

/* ——— UI strings (site chrome — page data lives in data.ts / data-es.ts) ——— */
const UI: Record<string, { en: string; es: string }> = {
  // nav
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.work': { en: 'Work', es: 'Proyectos' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.about': { en: 'About', es: 'Sobre mí' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'nav.call': { en: 'Call', es: 'Llamar' },
  'nav.menu.open': { en: 'Open menu', es: 'Abrir menú' },
  'nav.menu.close': { en: 'Close menu', es: 'Cerrar menú' },

  // language gate
  'gate.kicker': { en: 'Welcome · Bienvenido', es: 'Welcome · Bienvenido' },
  'gate.title': { en: 'Choose your language', es: 'Elige tu idioma' },
  'gate.text': {
    en: "You're one click away from a faster website. Pick your language — you can switch anytime.",
    es: 'Estás a un clic de un sitio web más rápido. Elige tu idioma — puedes cambiarlo cuando quieras.',
  },
  'gate.en': { en: 'English', es: 'English' },
  'gate.es': { en: 'Español', es: 'Español' },

  // footer
  'footer.cta': { en: "Let's work together", es: 'Trabajemos juntos' },
  'footer.blurb': {
    en: 'based in Cicero, Illinois — serving Chicago and the suburbs. 9+ years crafting websites, brands and campaigns, one-on-one with every client.',
    es: 'en Cicero, Illinois — sirviendo a Chicago y los suburbios. Más de 9 años creando sitios web, marcas y campañas, uno a uno con cada cliente.',
  },
  'footer.sitemap': { en: 'Sitemap', es: 'Mapa del sitio' },
  'footer.contact': { en: 'Contact', es: 'Contacto' },
  'footer.tagline': { en: 'Design beyond imagination', es: 'Diseño más allá de la imaginación' },

  // home
  'home.hero.copy': {
    en: 'I build fast, hand-crafted websites — 9+ years working one-on-one with businesses across Cicero, Chicago and the Illinois suburbs.',
    es: 'Construyo sitios web rápidos y hechos a mano — más de 9 años trabajando uno a uno con negocios en Cicero, Chicago y los suburbios de Illinois.',
  },
  'home.hero.start': { en: 'Start a project', es: 'Inicia tu proyecto' },
  'home.hero.work': { en: 'View work', es: 'Ver proyectos' },
  'home.hero.stack': { en: 'Technologies I build with', es: 'Tecnologías con las que trabajo' },
  'home.ticker': { en: 'Services ticker', es: 'Cinta de servicios' },
  'home.why.kicker': { en: 'Why me', es: 'Por qué yo' },
  'home.why.title': { en: 'Websites that work as good as they look', es: 'Sitios web que funcionan tan bien como se ven' },
  'home.why.p1': {
    en: "I'm a web developer & designer based in Cicero, Illinois, working with businesses all around Chicago and the suburbs. For 9 years I've been hand-crafting websites end to end — front-end and back-end development, WordPress builds for restaurants, e-commerce and online ordering, landing pages and custom React apps.",
    es: 'Soy desarrollador web y diseñador en Cicero, Illinois, trabajando con negocios en todo Chicago y los suburbios. Llevo 9 años creando sitios web de principio a fin — front-end y back-end, WordPress para restaurantes, e-commerce y pedidos en línea, landing pages y apps en React a la medida.',
  },
  'home.why.p2': {
    en: 'You always work directly with me — one-on-one, no agencies, no hand-offs. No bloated templates either: every build is responsive, fast, accessible and SEO-ready from the first line of code, with options we shape together from the first blueprint to the final deploy.',
    es: 'Siempre trabajas directamente conmigo — uno a uno, sin agencias ni intermediarios. Tampoco hay plantillas infladas: cada sitio es responsivo, rápido, accesible y listo para SEO desde la primera línea de código, con opciones que definimos juntos del primer boceto al lanzamiento.',
  },
  'home.why.more': { en: 'More about me →', es: 'Más sobre mí →' },
  'home.work.title': { en: 'Selected work', es: 'Proyectos destacados' },
  'home.work.all': { en: 'All projects →', es: 'Todos los proyectos →' },
  'home.work.more': { en: 'More projects', es: 'Más proyectos' },
  'home.work.visit': { en: 'visit live site (opens in new tab)', es: 'visitar sitio en vivo (abre en pestaña nueva)' },
  'home.cta.title1': { en: "Let's build", es: 'Construyamos' },
  'home.cta.title2': { en: 'something great', es: 'algo grande' },
  'home.cta.text': {
    en: "One call. One email. That's all it takes to get a website that actually grows your business.",
    es: 'Una llamada. Un correo. Eso es todo lo que se necesita para tener un sitio web que realmente haga crecer tu negocio.',
  },
  'home.services.kicker': { en: 'What I do', es: 'Lo que hago' },
  'home.services.title': { en: 'Services', es: 'Servicios' },
  'home.services.see': { en: 'see service details', es: 'ver detalles del servicio' },
  'home.services.all': { en: 'All {n} services →', es: 'Los {n} servicios →' },

  // work page
  'work.kicker': { en: 'Portfolio', es: 'Portafolio' },
  'work.title': { en: 'Work', es: 'Proyectos' },
  'work.intro': {
    en: 'Real client websites, live right now — restaurants, restoration, environmental services and construction across Cicero, Chicago and the surrounding Illinois suburbs. Click any project to visit the live site.',
    es: 'Sitios web reales de clientes, en línea ahora mismo — restaurantes, restauración, servicios ambientales y construcción en Cicero, Chicago y los suburbios de Illinois. Haz clic en cualquier proyecto para visitarlo.',
  },

  // services page
  'services.kicker': { en: 'What I do', es: 'Lo que hago' },
  'services.title': { en: 'Services', es: 'Servicios' },
  'services.intro': {
    en: 'From understanding your requirements, designing a blueprint and delivering the final product — everything that falls in between.',
    es: 'Desde entender lo que necesitas, diseñar el plan y entregar el producto final — y todo lo que hay en medio.',
  },
  'services.full': { en: 'Full service page →', es: 'Página completa del servicio →' },
  'services.list': { en: 'Service list', es: 'Lista de servicios' },

  // service detail
  'sd.back': { en: '← All services', es: '← Todos los servicios' },
  'sd.service': { en: 'Service', es: 'Servicio' },
  'sd.start': { en: 'Start a project', es: 'Inicia tu proyecto' },
  'sd.call': { en: 'Call', es: 'Llamar' },
  'sd.get': { en: 'What you get', es: 'Lo que recibes' },
  'sd.outcomes': { en: 'Outcomes', es: 'Resultados' },
  'sd.process': { en: 'How it works', es: 'Cómo funciona' },
  'sd.more': { en: 'More services', es: 'Más servicios' },
  'sd.prev': { en: '← Previous', es: '← Anterior' },
  'sd.next': { en: 'Next →', es: 'Siguiente →' },

  // about
  'about.kicker': { en: 'About me', es: 'Sobre mí' },
  'about.hi': { en: "Hi, I'm", es: 'Hola, soy' },
  'about.role': { en: 'A web developer & designer from Cicero, Illinois — serving Chicago & the suburbs', es: 'Desarrollador web y diseñador de Cicero, Illinois — sirviendo a Chicago y los suburbios' },
  'about.p1': {
    en: 'With 9 years of experience, I build websites the way they should be built — by hand, end to end. Front-end and back-end development, WordPress sites for restaurants & online ordering, e-commerce, landing pages and custom web apps, all live and performing.',
    es: 'Con 9 años de experiencia, construyo sitios web como deben hacerse — a mano, de principio a fin. Front-end y back-end, sitios WordPress para restaurantes y pedidos en línea, e-commerce, landing pages y apps web a la medida, todos en línea y rindiendo.',
  },
  'about.p2': {
    en: "I've spent most of these years working across different areas of design like front-end & back-end development, building WordPress websites for restaurants & online ordering sites, landing pages and more. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas to proceed with.",
    es: 'He pasado la mayor parte de estos años trabajando en distintas áreas del diseño como desarrollo front-end y back-end, sitios WordPress para restaurantes y pedidos en línea, landing pages y más. Habiendo trabajado en varios proyectos ya en línea, puedo ayudarte con las mejores sugerencias e ideas para avanzar.',
  },
  'about.p3': {
    en: "You work directly with me, one-on-one — no account managers, no hand-offs. And you aren't forced to accept anything: I give you a variety of options we shape together.",
    es: 'Trabajas directamente conmigo, uno a uno — sin gerentes de cuenta ni intermediarios. Y no estás obligado a aceptar nada: te doy una variedad de opciones que definimos juntos.',
  },
  'about.skills': { en: 'Skills', es: 'Habilidades' },
  'about.exp': { en: 'Experience', es: 'Experiencia' },
  'about.toolbox': { en: 'My toolbox', es: 'Mi caja de herramientas' },
  'about.stack': { en: 'Tools & stack', es: 'Herramientas y stack' },
  'about.facts': { en: 'Quick facts', es: 'Datos rápidos' },
  'about.f1': { en: 'Years of experience', es: 'Años de experiencia' },
  'about.f2': { en: 'Projects delivered live', es: 'Proyectos entregados en línea' },
  'about.f3': { en: 'Maximum client ratings', es: 'Calificaciones máximas de clientes' },

  // contact
  'contact.kicker': { en: 'Contact', es: 'Contacto' },
  'contact.title': { en: "Let's talk", es: 'Hablemos' },
  'contact.intro': {
    en: 'Tell me about your project — a new website, a redesign, SEO, branding or anything in between. Every project is one-on-one with me, and I usually reply within one business day.',
    es: 'Cuéntame sobre tu proyecto — un sitio nuevo, un rediseño, SEO, branding o lo que sea. Cada proyecto es uno a uno conmigo, y normalmente respondo en un día hábil.',
  },
  'contact.email': { en: 'Email', es: 'Correo' },
  'contact.phone': { en: 'Phone', es: 'Teléfono' },
  'contact.location': { en: 'Location', es: 'Ubicación' },
  'contact.name': { en: 'Name', es: 'Nombre' },
  'contact.name.ph': { en: 'Your name', es: 'Tu nombre' },
  'contact.email.ph': { en: 'you@business.com', es: 'tu@negocio.com' },
  'contact.project': { en: 'Project', es: 'Proyecto' },
  'contact.project.ph': { en: 'I need a website for my restaurant…', es: 'Necesito un sitio web para mi restaurante…' },
  'contact.send': { en: 'Send message', es: 'Enviar mensaje' },
  'contact.err.name': { en: 'Please tell me your name.', es: 'Por favor dime tu nombre.' },
  'contact.err.email': { en: 'Please enter a valid email address.', es: 'Por favor ingresa un correo válido.' },
  'contact.err.msg': { en: 'A few words about your project (10+ characters).', es: 'Unas palabras sobre tu proyecto (10+ caracteres).' },
  'contact.thanks': { en: 'Thanks', es: 'Gracias' },
  'contact.sent.text': {
    en: 'Your email app should have opened with the message ready to send. If not, write me directly at',
    es: 'Tu app de correo debería haberse abierto con el mensaje listo. Si no, escríbeme directo a',
  },
  'contact.sent.or': { en: 'or call', es: 'o llama al' },
  'contact.again': { en: 'Write another message', es: 'Escribir otro mensaje' },
  'contact.subject': { en: 'Project inquiry from', es: 'Consulta de proyecto de' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch { /* ignore */ }
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  });
  const [chosen, setChosen] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    setChosen(true);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const entry = UI[key];
      return entry ? entry[lang] : key;
    },
    [lang],
  );

  return <Ctx.Provider value={{ lang, setLang, chosen, t }}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
