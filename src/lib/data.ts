export const CONTACT = {
  name: 'Paco Martinez',
  brand: 'Paco Mtz',
  role: 'Web Developer & Designer',
  city: 'Cicero, Illinois',
  email: 'info@pacomtz.com',
  phone: '773-697-1975',
  phoneHref: 'tel:+17736971975',
  years: 9,
};

export interface Service {
  id: string;
  index: string;
  title: string;
  blurb: string;
  detail: string;
  deliverables: string[];
  /** service page extras */
  headline: string;
  body: string[];
  process: { step: string; text: string }[];
  outcomes: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    index: '01',
    title: 'Web Design & Development',
    blurb: 'Custom websites that look beautiful and convert visitors into customers.',
    detail:
      'From research and blueprint to the final pixel — I take over the full research and development of your website. Every build is responsive, fast and designed around your business goals, not a template.',
    deliverables: ['Custom UI/UX design', 'Responsive front-end build', 'Landing pages', 'Performance optimization'],
    headline: 'A website is your hardest-working employee. I build ones that never clock out.',
    body: [
      'Every project starts with understanding your business — who your customers are, what they need to find, and what action you want them to take. From there I design a blueprint: structure, content and a visual direction tailored to your brand, not pulled from a theme store.',
      'Then I build it by hand: semantic HTML, modern CSS and JavaScript, optimized images and clean code that loads fast on any device. The result is a site that looks beautiful, ranks well and turns visitors into calls, orders and bookings.',
    ],
    process: [
      { step: 'Discovery', text: 'We talk about your business, customers and goals. I audit what exists and map what the site must achieve.' },
      { step: 'Design blueprint', text: 'Wireframes and a visual direction — layout, type, color and imagery — reviewed together before a line of code.' },
      { step: 'Development', text: 'Hand-coded, responsive build with real content, real forms and performance baked in from the start.' },
      { step: 'Launch & beyond', text: 'Deployment, analytics, SEO fundamentals and a handoff so you can update it yourself — or I maintain it for you.' },
    ],
    outcomes: ['Loads in under 2 seconds', 'Works flawlessly on every device', 'Built to rank on Google', 'Easy for you to update'],
  },
  {
    id: 'wordpress',
    index: '02',
    title: 'WordPress & Restaurant Sites',
    blurb: 'WordPress builds, online ordering systems and sites that fill tables.',
    detail:
      'Specialized in WordPress websites for restaurants and local businesses — menus, reservations and online ordering that works on every device, easy for you to update yourself.',
    deliverables: ['WordPress development', 'Online ordering setup', 'Menu & reservation systems', 'Training & handoff'],
    headline: 'Restaurants live on their phones. Your site should take the order before they call.',
    body: [
      'WordPress powers a huge share of the web for a reason — done right, it gives you a fast, secure site you can actually update yourself. Done wrong, it is a slow pile of plugins. I build it right: lean themes, careful plugin choices, hardened security and clean admin screens.',
      'For restaurants I go further: menus that look appetizing on a phone, online ordering that skips the 30% delivery-app fees, reservations, hours, maps and a Google Business profile that shows up when someone searches "birria near me".',
    ],
    process: [
      { step: 'Menu & content', text: 'We organize your menu, photos, hours and story into a structure built for hungry people on phones.' },
      { step: 'Build', text: 'Custom WordPress theme with your branding — no cookie-cutter restaurant template.' },
      { step: 'Ordering & reservations', text: 'Online ordering, reservations and contact flows wired up and tested end to end.' },
      { step: 'Training', text: 'A walkthrough session so your team can update menus, photos and specials without calling anyone.' },
    ],
    outcomes: ['Commission-free online ordering', 'Menu updates in minutes', 'Google Maps & local search ready', 'Your team manages it'],
  },
  {
    id: 'seo',
    index: '03',
    title: 'SEO Services',
    blurb: 'Get found. Technical and content SEO that puts you on the first page.',
    detail:
      'I catapult businesses to the forefront of search engines with technical audits, on-page optimization, local SEO and structured data — precision work that compounds month after month.',
    deliverables: ['Technical SEO audit', 'Local SEO & Google Business', 'Keyword strategy', 'Schema & structured data'],
    headline: 'If Google cannot find you, your customers cannot either.',
    body: [
      'SEO is not tricks — it is engineering. I start with a technical audit: crawlability, speed, mobile rendering, structured data and every silent issue that keeps good businesses off page one. Then I fix them at the code level, because I am the one who built the code.',
      'For local businesses, the map pack is everything. I optimize your Google Business profile, local citations, reviews flow and location pages so you show up exactly when someone nearby is ready to buy.',
    ],
    process: [
      { step: 'Audit', text: 'Full technical crawl: speed, indexation, broken links, mobile issues, schema and content gaps.' },
      { step: 'Fix', text: 'On-page and technical fixes implemented directly — titles, metas, headings, structured data, Core Web Vitals.' },
      { step: 'Local', text: 'Google Business optimization, citations and review strategy for map-pack visibility.' },
      { step: 'Grow', text: 'Keyword tracking and monthly reporting — you see exactly what moved and why.' },
    ],
    outcomes: ['First-page local visibility', 'Rich results with schema markup', 'Core Web Vitals in the green', 'Transparent monthly reports'],
  },
  {
    id: 'social',
    index: '04',
    title: 'Social Media Marketing',
    blurb: 'Engage existing customers and find new ones where they already are.',
    detail:
      'Social media plays a pivotal role in how your brand ranks and resonates. I build campaigns that engage existing and potential customers — and turn followers into promoters of your brand.',
    deliverables: ['Content strategy', 'Campaign management', 'Brand voice & visuals', 'Growth reporting'],
    headline: 'Your customers scroll for hours a day. Your brand should be what stops the thumb.',
    body: [
      'Social media is where local businesses win attention before Google ever enters the picture. I build a content strategy around your brand voice — what to post, when, and why — so every post has a job: attract, engage or convert.',
      'Visuals matter as much as words. As a designer I create the posts, stories and campaign graphics myself, keeping everything consistent with your website and brand.',
    ],
    process: [
      { step: 'Strategy', text: 'Audience, platforms, content pillars and a posting calendar built around your capacity.' },
      { step: 'Create', text: 'Branded graphics, photos and copy produced for you — not stock templates.' },
      { step: 'Publish & engage', text: 'Consistent posting, community replies and promotion of your best content.' },
      { step: 'Report', text: 'Monthly numbers that matter: reach, engagement, clicks and customers — not vanity metrics.' },
    ],
    outcomes: ['Consistent brand presence', 'Content you do not have to make', 'Real engagement, not bots', 'Clear monthly reporting'],
  },
  {
    id: 'ppc',
    index: '05',
    title: 'PPC Campaigns',
    blurb: 'Pay-per-click that pays off — fast, measurable customer acquisition.',
    detail:
      'One of the fastest ways to connect with potential customers. I set up and manage PPC campaigns effectively so every dollar of ad spend is tracked, tested and tightened.',
    deliverables: ['Google Ads setup', 'Landing page alignment', 'Conversion tracking', 'Monthly optimization'],
    headline: 'Ads that pay for themselves — every click tracked, every dollar accounted for.',
    body: [
      'PPC is the fastest way to get in front of customers who are searching right now. But most small-business ad accounts bleed money on broad keywords and clicks that go nowhere. I build tight campaigns: exact intent keywords, negative lists, and ads written to qualify the click before you pay for it.',
      'Because I build the landing pages too, the ad and the page speak the same language — same message, same offer, same call to action. That alignment is what turns a $2 click into a $200 customer.',
    ],
    process: [
      { step: 'Research', text: 'Keyword and competitor research to find the searches worth paying for — and the ones to block.' },
      { step: 'Build', text: 'Campaign structure, ad copy and a landing page designed to convert that specific click.' },
      { step: 'Track', text: 'Conversion tracking on calls, forms and orders so every dollar is attributed.' },
      { step: 'Optimize', text: 'Weekly tightening — bids, negatives, A/B tests — and a monthly report in plain English.' },
    ],
    outcomes: ['Lower cost per lead', 'Ads + landing page aligned', 'Full conversion tracking', 'No wasted spend'],
  },
  {
    id: 'branding',
    index: '06',
    title: 'Logo & Brand Design',
    blurb: 'The logo that attracts customers and identifies your brand.',
    detail:
      'A modern, memorable identity with the latest and trendiest look — logo, palette and type system designed to make your business instantly recognizable.',
    deliverables: ['Logo design', 'Brand palette & typography', 'Business collateral', 'Brand guidelines'],
    headline: 'People judge your business in 50 milliseconds. Your logo is the verdict.',
    body: [
      'A logo is not decoration — it is the flag your business flies on every sign, menu, invoice and profile photo. I design marks that are simple enough to remember, distinctive enough to own, and flexible enough to work from a business card to a billboard.',
      'Every identity comes as a complete system: logo variations, color palette, typography and usage guidelines, so everything you put into the world looks like it came from the same place.',
    ],
    process: [
      { step: 'Brief', text: 'Your story, your customers, your competitors — and what your brand should say before a word is read.' },
      { step: 'Concepts', text: 'Several distinct directions, presented on real applications — signage, cards, screens.' },
      { step: 'Refine', text: 'We iterate together on the chosen direction until it is unmistakably yours.' },
      { step: 'Deliver', text: 'Full file package — print, web, social — plus a brand guide anyone can follow.' },
    ],
    outcomes: ['A mark people remember', 'Complete file package', 'Brand guidelines included', 'Consistent everywhere'],
  },
  {
    id: 'photo',
    index: '07',
    title: 'Food Photography',
    blurb: 'Dish photography that makes people hungry before they walk in.',
    detail:
      'Professional food photography that makes your menu irresistible online — for your website, Google Business profile, social media and delivery apps.',
    deliverables: ['On-site photo session', 'Menu & dish styling', 'Edited delivery set', 'Web-optimized exports'],
    headline: 'Nobody orders the dish that looks like a mugshot.',
    body: [
      'Great food photography is the highest-ROI content a restaurant can buy: the same set of images upgrades your website, Google Business profile, Instagram, menus and delivery apps all at once.',
      'I shoot on location at your restaurant, style each dish for the camera, and deliver an edited, web-optimized set — bright, appetizing and consistent with your brand.',
    ],
    process: [
      { step: 'Shot list', text: 'We pick the signature dishes, drinks and space shots that will carry your brand.' },
      { step: 'Session', text: 'On-site shoot with styling — minimal disruption, usually before opening hours.' },
      { step: 'Edit', text: 'Color-graded, retouched and cropped for every placement.' },
      { step: 'Deliver', text: 'Full-resolution set plus web-optimized exports ready to upload anywhere.' },
    ],
    outcomes: ['Appetite-inducing photos', 'One shoot, every channel', 'Web-optimized files', 'You own the images'],
  },
  {
    id: 'maintenance',
    index: '08',
    title: 'Maintenance & Support',
    blurb: 'Dedicated support with minimal downtime and a seamless experience.',
    detail:
      'Through dedicated support I resolve issues fast and keep your site running — updates, backups, security and small improvements handled for you.',
    deliverables: ['Updates & backups', 'Security monitoring', 'Content edits', 'Priority support'],
    headline: 'Your site, cared for — so you can care about your business.',
    body: [
      'A website is never "done" — software updates, security patches, content changes and the occasional emergency are part of owning one. My maintenance plans take all of that off your plate.',
      'You get a real person who knows your site because he built it: priority support, proactive monitoring and small improvements handled as they come up, with minimal downtime and a seamless experience for your customers.',
    ],
    process: [
      { step: 'Onboard', text: 'Full backup, security baseline and health check of your existing site.' },
      { step: 'Protect', text: 'Updates, backups and security monitoring running on schedule, every month.' },
      { step: 'Support', text: 'Content edits, small improvements and fixes — one message away.' },
      { step: 'Report', text: 'A simple monthly summary of everything done and anything worth your attention.' },
    ],
    outcomes: ['Zero-update anxiety', 'Daily backups', 'Priority response', 'One call fixes everything'],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  palette: { bg: string; fg: string; accent: string };
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'ais',
    title: 'AIS Environmental',
    category: 'Environmental Services · Web Design & SEO',
    year: '2025',
    description:
      'Full website for an asbestos testing & property services company serving IL · IN · WI — 41 service-area pages, 17 services and a lead-generating estimate flow, from assessment to closeout.',
    tags: ['Web Design', 'SEO', 'Local Service Pages'],
    url: 'https://aisenvironmentalinc.com',
    palette: { bg: '#0d1a14', fg: '#eaf4ee', accent: '#3fae6a' },
    featured: true,
  },
  {
    id: 'labirrieria',
    title: 'La Birrieria',
    category: 'Restaurant · Website & Brand',
    year: '2024',
    description:
      'Site for Chicago\'s Jalisco-style birria spot — menu, tequila bar, patio gallery and hours, built to turn "best birria near me" searches into a full house.',
    tags: ['Web Design', 'Restaurant', 'Local SEO'],
    url: 'https://labirrieria.com',
    palette: { bg: '#1c1006', fg: '#f7ecdd', accent: '#ff8e4d' },
    featured: true,
  },
  {
    id: 'soluna',
    title: 'Soluna Restoration',
    category: 'Damage Restoration · Web Design',
    year: '2024',
    description:
      'Chicago fire, water, mold and asbestos restoration — service pages written and structured to rank and convert when disaster strikes and speed matters most.',
    tags: ['Web Design', 'SEO', 'Copywriting'],
    url: 'https://solunarestoration.com',
    palette: { bg: '#0d1622', fg: '#e8f0f8', accent: '#0099ff' },
  },
  {
    id: 'ab',
    title: 'A&B Environmental Construction',
    category: 'Environmental · Web Design',
    year: '2023',
    description:
      'Online presence for a Chicago asbestos removal & lead paint remediation contractor established in 2004 — trust-first design with certification and estimate calls to action.',
    tags: ['Web Design', 'Branding', 'Lead Generation'],
    url: 'https://abenvironmentalcons.com',
    palette: { bg: '#101422', fg: '#eaeef7', accent: '#3f6fe0' },
  },
  {
    id: 'marquez',
    title: 'Marquez Construction',
    category: 'Masonry · Web Design',
    year: '2023',
    description:
      'Family-owned Chicago masonry contractor with 20+ years in the trade — portfolio-driven site showcasing brickwork, stonework and concrete with free-estimate conversion.',
    tags: ['Web Design', 'Portfolio', 'Photography'],
    url: 'https://marquezconstructionco.com',
    palette: { bg: '#171310', fg: '#f3ece2', accent: '#d9a066' },
  },
];

export const SKILLS = [
  { name: 'Web Development', level: 95 },
  { name: 'WordPress', level: 95 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'SEO & SEM', level: 75 },
];

export const EXPERIENCE = [
  {
    role: 'Lead UI/UX Designer',
    period: 'Design Lead',
    text: 'Led a team of 5 designers — helping, supervising and approving their work to make sure every deliverable matched client expectations and the latest design standards.',
  },
  {
    role: 'Web Developer',
    period: 'In-house & Client Work',
    text: 'Responsible for all in-house and client-based web & graphic design assignments, earning maximum client ratings for the company.',
  },
];

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
