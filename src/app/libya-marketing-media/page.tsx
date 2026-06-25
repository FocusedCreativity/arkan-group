import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Media, PR & Market Activation | Arkan Holding Group',
  description:
    'Media, public relations, and market activation in Libya: launch communications, digital and social campaigns, events, website, SEO, and paid media — helping companies be seen and trusted locally.',
};

export default function MediaPage() {
  return <SectorPageTemplate slug="media" />;
}
