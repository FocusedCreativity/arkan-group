import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { MarketEntrySection } from '@/components/sections/MarketEntrySection';
import { TeamsFeatureSection } from '@/components/sections/TeamsFeatureSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { VideoFeatureSection } from '@/components/sections/VideoFeatureSection';
import { SectorGrid } from '@/components/sections/SectorGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Market Entry Partner | Book a Market Entry Call | Arkan Holding Group',
  description:
    'Enter Libya with a trusted local operating partner. Arkan helps foreign and regional companies assess, enter, and operate in Libya across six sectors.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MarketEntrySection />
      <TeamsFeatureSection />
      <FeaturedProjects />
      <VideoFeatureSection />
      <SectorGrid />
      <ContactSection />
    </>
  );
}
