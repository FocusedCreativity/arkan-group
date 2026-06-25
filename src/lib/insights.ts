export type InsightCategory =
  | 'Market Entry'
  | 'Oil & Gas'
  | 'Construction'
  | 'Trading'
  | 'Manpower'
  | 'Education'
  | 'Local Execution'
  | 'Company News';

export interface InsightSource {
  label: string;
  url: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  category: InsightCategory;
  image: string;
  featured?: boolean;
  intro: string;
  sections: { heading: string; body: string }[];
  keyStats?: { value: string; label: string }[];
  sources?: InsightSource[];
  relatedSlugs: string[];
}

export const INSIGHT_CATEGORIES: (InsightCategory | 'All')[] = [
  'All',
  'Market Entry',
  'Oil & Gas',
  'Construction',
  'Trading',
  'Manpower',
  'Education',
  'Local Execution',
  'Company News',
];

/** "Libya by the numbers" — a story told in figures, each sourced. */
export interface InsightStat {
  value: string;
  label: string;
  context: string;
  source: string;
  sourceUrl: string;
}

export const INSIGHT_STATS: InsightStat[] = [
  {
    value: '48.36B',
    label: 'Barrels of proven oil reserves',
    context: 'The largest in Africa — and the ninth-largest on earth.',
    source: 'OPEC / LibyaReview',
    sourceUrl: 'https://libyareview.com/57392/libya-tops-africa-in-oil-reserves-with-48-36-billion-barrels/',
  },
  {
    value: '1.4M',
    label: 'Barrels per day in 2025',
    context: 'A ten-year production high, with a national target of 2M b/d by 2030.',
    source: 'The Voice of Africa',
    sourceUrl: 'https://thevoiceofafrica.com/2026/01/03/libya-oil-revenues-hit-22-billion-as-production-reaches-10-year-high-in-2025/',
  },
  {
    value: '13.4%',
    label: 'Real GDP growth in 2025',
    context: 'One of the strongest economic rebounds in the region.',
    source: 'World Bank',
    sourceUrl: 'https://www.worldbank.org/en/news/press-release/2025/12/17/libya-sustained-strong-growth-requires-structural-change-to-improve-transparency-and-public-financial-management',
  },
  {
    value: '7.46M',
    label: 'People',
    context: 'About 77% live in cities along the coast, led by Tripoli and Benghazi.',
    source: 'Worldometer / UNFPA',
    sourceUrl: 'https://www.worldometers.info/world-population/libya-population/',
  },
  {
    value: '$5B',
    label: 'Annual food imports',
    context: 'Domestic production meets only about a quarter of demand.',
    source: 'Libya Observer / USDA',
    sourceUrl: 'https://libyaobserver.ly/inbrief/libyas-food-imports-estimated-5-billion',
  },
  {
    value: '14%',
    label: 'Of the workforce is private-sector',
    context: 'A market still defined by the public sector — and open to private operators.',
    source: 'World Bank',
    sourceUrl: 'https://www.worldbank.org/en/news/press-release/2025/06/30/libya-leveling-the-playing-field-towards-private-sector-growth',
  },
];

/** Downloadable resources offered on the insights page. */
export interface InsightResource {
  title: string;
  desc: string;
  format: string;
  size: string;
  href: string;
}

export const RESOURCES: InsightResource[] = [
  {
    title: 'Libya Market Entry Checklist',
    desc: 'A practical, step-by-step checklist to prepare before you commit resources — bring it to your first call.',
    format: 'PDF',
    size: '5-step guide',
    href: '/resources/arkan-libya-market-entry-checklist.pdf',
  },
  {
    title: 'Libya Sector Snapshot 2025',
    desc: 'Libya by the numbers: energy, construction, trading, and workforce data with sources, on one sheet.',
    format: 'PDF',
    size: 'Data sheet',
    href: '/resources/arkan-libya-sector-snapshot-2025.pdf',
  },
  {
    title: 'Arkan Company Profile',
    desc: 'Company overview, sector capabilities, and operating model for due diligence and internal review.',
    format: 'PDF',
    size: 'Full profile',
    href: '/Arkan_Company_Profile.pdf',
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'first-libya-market-entry-conversation',
    title: 'How to structure your first Libya market entry conversation',
    excerpt:
      'What to prepare before your first call, which questions matter most, and how to move from interest to a practical operating plan.',
    date: '18 JUN 2026',
    readMins: 5,
    category: 'Market Entry',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    featured: true,
    intro:
      'Libya’s economy grew 13.4% in 2025 and is reopening to foreign investment — but interest is not the same as readiness. Foreign companies often arrive with strong sector appetite and unclear local requirements. A structured first conversation separates market curiosity from executable opportunity.',
    sections: [
      {
        heading: 'Prepare your sector context',
        body: 'Before the call, clarify your service or product scope, target customer type, and whether you need a local partner, staffing support, procurement routes, or full operating coordination. The more specific you are, the faster a credible first step emerges.',
      },
      {
        heading: 'Define your timeline honestly',
        body: 'Libya entry timelines vary by sector and compliance path. An honest timeline helps Arkan recommend whether to start with assessment, partner mapping, or immediate operational support — rather than defaulting to a generic plan.',
      },
      {
        heading: 'Identify your first executable step',
        body: 'The goal of the first conversation is not a full market strategy. It is a credible first step: a registration path, a partner shortlist, a manpower model, or sector-specific operating support you can actually begin.',
      },
    ],
    keyStats: [
      { value: '13.4%', label: '2025 GDP growth' },
      { value: '7.46M', label: 'Population' },
      { value: '30 min', label: 'First call' },
    ],
    sources: [
      { label: 'World Bank — Libya Economic Monitor 2025', url: 'https://www.worldbank.org/en/news/press-release/2025/12/17/libya-sustained-strong-growth-requires-structural-change-to-improve-transparency-and-public-financial-management' },
    ],
    relatedSlugs: ['oil-gas-operating-requirements', 'construction-partnership-checklist'],
  },
  {
    slug: 'oil-gas-operating-requirements',
    title: 'Oil & gas operating requirements for foreign service companies',
    excerpt:
      'With reserves of 48 billion barrels and production at a ten-year high, Libya is reopening — but operational credibility depends on local coordination.',
    date: '10 JUN 2026',
    readMins: 6,
    category: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
    featured: true,
    intro:
      'Libya holds Africa’s largest proven oil reserves — 48.36 billion barrels — and lifted production to roughly 1.4 million barrels per day in 2025, a ten-year high, with a stated target of 2 million by 2030. The opportunity is real. So is the execution risk, which is overwhelmingly local.',
    sections: [
      {
        heading: 'Onshore and offshore support models',
        body: 'The Sirte Basin alone holds around 35 billion barrels. Companies should clarify whether they require field services, equipment supply, maintenance, coatings, or integrated manpower deployment before selecting a local partner structure.',
      },
      {
        heading: 'Safety and compliance expectations',
        body: 'Libya’s energy environment demands documented safety systems, qualified personnel, and partners who understand local operational constraints and reporting expectations. HSE is not a formality here — it is how credibility is earned.',
      },
      {
        heading: 'Procurement and logistics reality',
        body: 'Successful entry often depends on local procurement routes, customs navigation, warehousing, and in-country logistics rather than imported assumptions from other markets. A part stuck at a port can stop a field.',
      },
    ],
    keyStats: [
      { value: '48.36B', label: 'Barrels of reserves' },
      { value: '1.4M', label: 'Barrels/day (2025)' },
      { value: '2M', label: 'Target b/d by 2030' },
    ],
    sources: [
      { label: 'LibyaReview — reserves', url: 'https://libyareview.com/57392/libya-tops-africa-in-oil-reserves-with-48-36-billion-barrels/' },
      { label: 'The Voice of Africa — 2025 production', url: 'https://thevoiceofafrica.com/2026/01/03/libya-oil-revenues-hit-22-billion-as-production-reaches-10-year-high-in-2025/' },
    ],
    relatedSlugs: ['first-libya-market-entry-conversation', 'local-execution-discipline'],
  },
  {
    slug: 'construction-partnership-checklist',
    title: 'Construction partnerships: what to verify before you sign',
    excerpt:
      'A $2bn reconstruction push and a 77% urban population make construction one of Libya’s clearest opportunities — if your local partner can actually deliver.',
    date: '2 JUN 2026',
    readMins: 6,
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    featured: true,
    intro:
      'Eastern Libya’s reconstruction fund — roughly $2 billion — is rebuilding Derna and beyond: thousands of homes, new roads, bridges, schools, a university and a hospital. With about 77% of Libyans living in cities, demand for housing and infrastructure is durable. The risk is not the opportunity; it is partner delivery.',
    sections: [
      {
        heading: 'Verify delivery capability, not just credentials',
        body: 'Ask for evidence of project coordination capacity, subcontractor networks, site management experience, and sector-relevant operating support — not generic company profiles alone.',
      },
      {
        heading: 'Clarify scope and decision rights',
        body: 'Define who owns procurement, approvals, staffing, reporting, and client communication. Ambiguity here creates delays that look like market risk but are actually operating failures.',
      },
      {
        heading: 'Start with a bounded pilot scope',
        body: 'A credible first engagement often begins with assessment, design coordination, or a limited site-support package before broader development commitments.',
      },
    ],
    keyStats: [
      { value: '$2B', label: 'Reconstruction fund' },
      { value: '77%', label: 'Urban population' },
      { value: '3,500', label: 'Homes in Derna plan' },
    ],
    sources: [
      { label: 'Gulf Times — Derna reconstruction', url: 'https://www.gulf-times.com/article/727093/region/libya-presses-on-rebuilding-flood-ravaged-derna-but-the-trauma-lingers' },
    ],
    relatedSlugs: ['trading-distribution-entry-path', 'workforce-deployment-basics'],
  },
  {
    slug: 'trading-distribution-entry-path',
    title: 'Trading and distribution: a practical entry path for suppliers',
    excerpt:
      'Libya imports most of what it consumes — including about $5bn of food a year. The opportunity is real; the supply chain is where deals break.',
    date: '28 MAY 2026',
    readMins: 5,
    category: 'Trading',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
    intro:
      'Libya depends on imports: food imports alone run around $5 billion a year, with domestic production meeting only about 25% of demand, and EU goods exports to Libya reached roughly €7.4 billion in 2025. For suppliers, the question is not demand — it is the route to market.',
    sections: [
      {
        heading: 'Map the product and route',
        body: 'Commodities, consumer goods, and industrial materials each require different import, storage, and distribution models. Main trade partners include Tunisia, Turkey, China, Italy and Germany — your route should reflect where your supply originates.',
      },
      {
        heading: 'Plan for customs and finance',
        body: 'Letters of credit, customs documentation, and central-bank requirements are where shipments stall. Building these into the plan up front is the difference between a sale and a stranded container.',
      },
      {
        heading: 'Choose the right local operating structure',
        body: 'Some suppliers need distributor relationships. Others need Arkan to coordinate procurement, warehousing, and route-to-market under a defined operating plan with local buyer access.',
      },
    ],
    keyStats: [
      { value: '$5B', label: 'Annual food imports' },
      { value: '~25%', label: 'Food demand met locally' },
      { value: '€7.4B', label: 'EU exports to Libya (2025)' },
    ],
    sources: [
      { label: 'Libya Observer — food imports', url: 'https://libyaobserver.ly/inbrief/libyas-food-imports-estimated-5-billion' },
      { label: 'European Commission — EU–Libya trade', url: 'https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/libya_en' },
    ],
    relatedSlugs: ['construction-partnership-checklist', 'first-libya-market-entry-conversation'],
  },
  {
    slug: 'workforce-deployment-basics',
    title: 'Workforce deployment basics for project-based operations',
    excerpt:
      'With only ~14% of the workforce in the private sector, sourcing and managing reliable crews is often the first bottleneck foreign operators hit.',
    date: '20 MAY 2026',
    readMins: 5,
    category: 'Manpower',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    intro:
      'Libya’s private sector employs only about 14% of the workforce — a market still shaped by public-sector employment. For foreign operators, the constraint is rarely the availability of labor; it is sourcing the right people quickly, vetting them, and keeping crews productive and compliant.',
    sections: [
      {
        heading: 'Define roles before recruitment',
        body: 'Clear job scopes, certification requirements, and deployment durations reduce rework and improve staffing outcomes for project-based operations.',
      },
      {
        heading: 'Plan mobilization realistically',
        body: 'Workforce deployment depends on visa pathways, site readiness, housing, transport, and local registration processes that should be mapped early — not discovered on day one.',
      },
    ],
    keyStats: [
      { value: '14%', label: 'Private-sector workforce' },
      { value: '7.46M', label: 'Population' },
    ],
    sources: [
      { label: 'World Bank — private sector', url: 'https://www.worldbank.org/en/news/press-release/2025/06/30/libya-leveling-the-playing-field-towards-private-sector-growth' },
    ],
    relatedSlugs: ['oil-gas-operating-requirements', 'education-sector-support-models'],
  },
  {
    slug: 'education-sector-support-models',
    title: 'Education sector support models for institutional partners',
    excerpt:
      'Building local capability is what makes operations durable. How education and training partnerships are structured in Libya.',
    date: '12 MAY 2026',
    readMins: 4,
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    intro:
      'Every sector entering Libya hits the same constraint: the demand for skilled, work-ready people outpaces supply. Education and training partnerships require alignment on curriculum goals, institutional standards, local accreditation, and long-term sustainability.',
    sections: [
      {
        heading: 'Institutional versus vocational models',
        body: 'Partners should decide whether the priority is school operations, vocational training, workforce upskilling, or a hybrid institutional development model.',
      },
      {
        heading: 'Local delivery requirements',
        body: 'Faculty sourcing, facility readiness, community engagement, and regulatory coordination all affect the feasibility of education sector entry.',
      },
    ],
    relatedSlugs: ['workforce-deployment-basics', 'local-execution-discipline'],
  },
  {
    slug: 'local-execution-discipline',
    title: 'Why local execution discipline matters more than market narrative',
    excerpt:
      'Libya opportunities attract attention quickly. Sustainable entry depends on accountable process, not enthusiasm alone.',
    date: '5 MAY 2026',
    readMins: 4,
    category: 'Local Execution',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    intro:
      'Companies that succeed in Libya usually share one trait: they treat local execution as a managed process with documented steps, not as a reactive series of introductions.',
    sections: [
      {
        heading: 'Separate interest from readiness',
        body: 'Market interest is common. Readiness requires sector clarity, stakeholder mapping, compliance awareness, and a partner structure that can actually deliver.',
      },
      {
        heading: 'Use accountable milestones',
        body: 'Assessment, partner selection, registration, mobilization, and reporting should each have owners, timelines, and decision criteria you can hold a partner to.',
      },
    ],
    relatedSlugs: ['first-libya-market-entry-conversation', 'oil-gas-operating-requirements'],
  },
  {
    slug: 'company-profile-credentials-update',
    title: 'Arkan company profile and credentials now available on request',
    excerpt:
      'International partners can request Arkan’s company profile, sector credentials, and introductory materials for due diligence and internal review.',
    date: '28 APR 2026',
    readMins: 2,
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    intro:
      'Arkan now offers a structured credentials package for companies evaluating Libya market entry support across oil and gas, construction, trading, manpower, education, and market activation.',
    sections: [
      {
        heading: 'What the profile includes',
        body: 'The package covers company overview, sector capabilities, operating model summary, and contact pathways for confidential follow-up conversations.',
      },
      {
        heading: 'How to request materials',
        body: 'Download the company profile and sector snapshot from the resources section, or book a Libya Market Entry Call to discuss sector-specific requirements.',
      },
    ],
    relatedSlugs: ['first-libya-market-entry-conversation', 'local-execution-discipline'],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS.find((article) => article.slug === slug);
}

export function getFeaturedInsights(): InsightArticle[] {
  return INSIGHTS.filter((article) => article.featured);
}

export function getLatestInsights(limit = 6): InsightArticle[] {
  return INSIGHTS.filter((article) => !article.featured).slice(0, limit);
}

export function getRelatedInsights(slugs: string[]): InsightArticle[] {
  return slugs
    .map((slug) => getInsightBySlug(slug))
    .filter((article): article is InsightArticle => Boolean(article));
}
