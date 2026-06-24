export type InsightCategory =
  | 'Market Entry'
  | 'Oil & Gas'
  | 'Construction'
  | 'Trading'
  | 'Manpower'
  | 'Education'
  | 'Local Execution'
  | 'Company News';

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: InsightCategory;
  image: string;
  featured?: boolean;
  intro: string;
  sections: { heading: string; body: string }[];
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

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'first-libya-market-entry-conversation',
    title: 'How to structure your first Libya market entry conversation',
    excerpt:
      'What to prepare before your first call, which questions matter most, and how to move from interest to a practical operating plan.',
    date: '18 JUN 2026',
    category: 'Market Entry',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    featured: true,
    intro:
      'Foreign companies often arrive with strong sector interest but unclear local requirements. A structured first conversation helps separate market curiosity from executable opportunity.',
    sections: [
      {
        heading: 'Prepare your sector context',
        body: 'Before the call, clarify your service or product scope, target customer type, and whether you need a local partner, staffing support, procurement routes, or full operating coordination.',
      },
      {
        heading: 'Define your timeline honestly',
        body: 'Libya entry timelines vary by sector and compliance path. An honest timeline helps Arkan recommend whether to start with assessment, partner mapping, or immediate operational support.',
      },
      {
        heading: 'Identify your first executable step',
        body: 'The goal of the first conversation is not a full market strategy. It is a credible first step: registration path, partner shortlist, manpower model, or sector-specific operating support.',
      },
    ],
    relatedSlugs: ['oil-gas-operating-requirements', 'construction-partnership-checklist'],
  },
  {
    slug: 'oil-gas-operating-requirements',
    title: 'Oil & gas operating requirements for foreign service companies',
    excerpt:
      'A practical overview of local coordination, safety expectations, and support models for energy sector companies entering Libya.',
    date: '10 JUN 2026',
    category: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
    featured: true,
    intro:
      'Energy sector companies entering Libya need more than commercial interest. Operational credibility depends on local coordination, HSE readiness, and realistic support structures.',
    sections: [
      {
        heading: 'Onshore and offshore support models',
        body: 'Companies should clarify whether they require field services, equipment supply, maintenance support, coatings, scaffolding, or integrated manpower deployment before selecting a local partner structure.',
      },
      {
        heading: 'Safety and compliance expectations',
        body: 'Libya\'s energy environment demands documented safety systems, qualified personnel, and partners who understand local operational constraints and reporting expectations.',
      },
      {
        heading: 'Procurement and logistics reality',
        body: 'Successful entry often depends on local procurement routes, warehousing, and in-country logistics rather than imported assumptions from other markets.',
      },
    ],
    relatedSlugs: ['first-libya-market-entry-conversation', 'local-execution-discipline'],
  },
  {
    slug: 'construction-partnership-checklist',
    title: 'Construction partnerships: what to verify before you sign',
    excerpt:
      'Key due diligence questions for foreign developers and contractors evaluating local construction and real estate partners in Libya.',
    date: '2 JUN 2026',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    featured: true,
    intro:
      'Construction partnerships fail when scope, accountability, and local execution capacity are unclear. Verification should happen before contracts, not after mobilization.',
    sections: [
      {
        heading: 'Verify delivery capability, not just credentials',
        body: 'Ask for evidence of project coordination capacity, subcontractor networks, site management experience, and sector-relevant operating support rather than generic company profiles alone.',
      },
      {
        heading: 'Clarify scope and decision rights',
        body: 'Define who owns procurement, approvals, staffing, reporting, and client communication. Ambiguity here creates delays that look like market risk but are actually operating failures.',
      },
      {
        heading: 'Start with a bounded pilot scope',
        body: 'A credible first engagement often begins with assessment, design coordination, or a limited site support package before broader development commitments.',
      },
    ],
    relatedSlugs: ['trading-distribution-entry-path', 'workforce-deployment-basics'],
  },
  {
    slug: 'trading-distribution-entry-path',
    title: 'Trading and distribution: a practical entry path for suppliers',
    excerpt:
      'How import, distribution, and local market access support can be structured for companies entering Libya\'s trading environment.',
    date: '28 MAY 2026',
    category: 'Trading',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
    intro:
      'Trading entry requires clarity on product category, customs pathways, local distribution partners, and working capital assumptions before market launch.',
    sections: [
      {
        heading: 'Map the product and route',
        body: 'Different categories — commodities, consumer goods, industrial materials — require different import, storage, and distribution models in Libya.',
      },
      {
        heading: 'Choose the right local operating structure',
        body: 'Some suppliers need distributor relationships. Others need Arkan to coordinate procurement, warehousing, and route-to-market support under a defined operating plan.',
      },
    ],
    relatedSlugs: ['construction-partnership-checklist', 'first-libya-market-entry-conversation'],
  },
  {
    slug: 'workforce-deployment-basics',
    title: 'Workforce deployment basics for project-based operations',
    excerpt:
      'What foreign operators should know about skilled and unskilled workforce support, mobilization, and local compliance in Libya.',
    date: '20 MAY 2026',
    category: 'Manpower',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    intro:
      'Manpower is often the first operational bottleneck for companies entering Libya. Planning should cover role definitions, deployment timing, and compliance expectations.',
    sections: [
      {
        heading: 'Define roles before recruitment',
        body: 'Clear job scopes, certification requirements, and deployment durations reduce rework and improve staffing outcomes for project-based operations.',
      },
      {
        heading: 'Plan mobilization realistically',
        body: 'Workforce deployment depends on visa pathways, site readiness, housing, transport, and local registration processes that should be mapped early.',
      },
    ],
    relatedSlugs: ['oil-gas-operating-requirements', 'education-sector-support-models'],
  },
  {
    slug: 'education-sector-support-models',
    title: 'Education sector support models for institutional partners',
    excerpt:
      'How education and training services can support workforce development and institutional partnerships in Libya.',
    date: '12 MAY 2026',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    intro:
      'Education partnerships in Libya require alignment on curriculum goals, institutional standards, local accreditation pathways, and long-term operating sustainability.',
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
        body: 'Assessment, partner selection, registration, mobilization, and reporting should each have owners, timelines, and decision criteria.',
      },
    ],
    relatedSlugs: ['first-libya-market-entry-conversation', 'oil-gas-operating-requirements'],
  },
  {
    slug: 'company-profile-credentials-update',
    title: 'Arkan company profile and credentials now available on request',
    excerpt:
      'International partners can request Arkan\'s company profile, sector credentials, and introductory materials for due diligence and internal review.',
    date: '28 APR 2026',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    intro:
      'Arkan now offers a structured credentials package for companies evaluating Libya market entry support across oil and gas, construction, trading, manpower, and education.',
    sections: [
      {
        heading: 'What the profile includes',
        body: 'The package covers company overview, sector capabilities, operating model summary, and contact pathways for confidential follow-up conversations.',
      },
      {
        heading: 'How to request materials',
        body: 'Use the contact form or book a Libya Market Entry Call to receive the profile and discuss sector-specific support requirements.',
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
