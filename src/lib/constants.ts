// Site-wide constants — contact info, navigation, sector data
// Update these values as needed

export const CONTACT = {
  phone1: '+218 91 372 1051',
  phone1Raw: '+21891372105',
  phone2: '+218 91 231 1188',
  phone2Raw: '+218912311188',
  whatsapp: '+21891372105',  // primary WhatsApp
  email: 'contact@arkanholdinggroup.com',
  address: 'Dubai Street, Former Location of the Tunisian Embassy',
  city: 'Benghazi, Libya',
  fullAddress: 'Dubai Street, Former Location of the Tunisian Embassy, Benghazi, Libya',
  linkedIn: 'https://www.linkedin.com/company/arkan-holding-group',
  website: 'https://arkanholdinggroup.com',
};

export const COMPANY = {
  name: 'Arkan Holding Group',
  tagline: 'Your Local Operating Partner in Libya',
  yearsExperience: 30,
  sectors: 6,
  city: 'Benghazi',
  country: 'Libya',
};

/** Set to a path when the MP4 exists under public/videos/; null uses poster only. */
export const VIDEO_PATHS = {
  heroMarketEntry: null,
  services: null,
  sectors: null,
  insights: null,
  contact: null,
} as const;

export const FALLBACK_IMAGES = {
  hero:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80',
  whoWeHelp: [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
  ],
  whyArkan: [
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
  ],
} as const;

export const HOMEPAGE_SECTOR_LINKS = [
  '/libya-oil-gas-partner',
  '/libya-construction-partner',
  '/libya-manpower-staffing',
  '/libya-trading-distribution',
  '/contact',
  '/contact',
] as const;

export const SECTORS = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    subtitle: 'Onshore & Offshore Support',
    description:
      'Rigs, maintenance, industrial coatings, safety systems, equipment supply, and operational support for energy companies.',
    color: '#C9A84C',
    href: '/libya-oil-gas-partner',
    cta: 'Discuss Oil and Gas Support',
    capabilities: [
      'Onshore and offshore operational support',
      'Rig and equipment supply',
      'Industrial maintenance and coatings',
      'Safety systems and compliance',
      'Local procurement and logistics',
    ],
  },
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'Development & Management',
    description:
      'Real estate development, project management, investment, design, sustainability, and construction manpower.',
    color: '#3B82F6',
    href: '/libya-construction-partner',
    cta: 'Discuss Construction Partnership',
    capabilities: [
      'Real estate development and investment',
      'Project management and oversight',
      'Architectural design and engineering',
      'Sustainability and compliance',
      'Construction manpower solutions',
    ],
  },
  {
    id: 'trading',
    title: 'Trading & Distribution',
    subtitle: 'Import, Export & Logistics',
    description:
      'Import/export, commodities, consumer goods, minerals, agricultural products, and technology-enabled trading.',
    color: '#10B981',
    href: '/libya-trading-distribution',
    cta: 'Discuss Distribution or Supply',
    capabilities: [
      'Import and export operations',
      'Commodity and minerals trading',
      'Consumer goods distribution',
      'Agricultural and food products',
      'Customs compliance and logistics',
    ],
  },
  {
    id: 'manpower',
    title: 'Manpower & Staffing',
    subtitle: 'Workforce Solutions',
    description:
      'Skilled and unskilled workforce recruitment, project staffing, specialized teams, and deployment coordination.',
    color: '#F59E0B',
    href: '/libya-manpower-staffing',
    cta: 'Discuss Workforce Support',
    capabilities: [
      'Skilled and unskilled workforce recruitment',
      'Project and site staffing',
      'Specialized technical teams',
      'Deployment and mobilization',
      'Compliance and local registration',
    ],
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Training & Development',
    description:
      'Educational institution management, vocational training, professional development programs.',
    color: '#8B5CF6',
    href: '/contact',
    cta: 'Enquire About Education',
    capabilities: [
      'Educational institution management',
      'Vocational and skills training',
      'Professional development',
      'Curriculum and program design',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Medical Services',
    description:
      'Healthcare facility management, medical equipment supply, pharmaceutical distribution, and clinical staffing.',
    color: '#EF4444',
    href: '/contact',
    cta: 'Enquire About Healthcare',
    capabilities: [
      'Healthcare facility management',
      'Medical equipment supply',
      'Pharmaceutical distribution',
      'Clinical and support staffing',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Property & Investment',
    description:
      'Property investment, asset management, commercial real estate, and development partnerships.',
    color: '#06B6D4',
    href: '/contact',
    cta: 'Enquire About Real Estate',
    capabilities: [
      'Property investment and acquisition',
      'Commercial real estate management',
      'Development partnerships',
      'Asset valuation and advisory',
    ],
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Sectors',
    href: '#sectors',
    children: [
      { label: 'Oil & Gas', href: '/libya-oil-gas-partner' },
      { label: 'Construction', href: '/libya-construction-partner' },
      { label: 'Trading & Distribution', href: '/libya-trading-distribution' },
      { label: 'Manpower & Staffing', href: '/libya-manpower-staffing' },
    ],
  },
  { label: 'Market Entry', href: '/libya-market-entry' },
  { label: 'Contact', href: '/contact' },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We assess your market entry objectives, sector requirements, and operational constraints in Libya.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We develop a structured entry plan including local registration, partner mapping, and risk mitigation.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'We provide on-ground execution: procurement, staffing, compliance, and operational support.',
  },
  {
    number: '04',
    title: 'Monitor',
    description:
      'We maintain oversight of operations, reporting, and performance across all active engagements.',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'We facilitate knowledge transfer and build sustainable local capability for your long-term presence.',
  },
];
