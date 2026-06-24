import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhoWeHelpSection } from '@/components/sections/WhoWeHelpSection';
import { WhyArkanSection } from '@/components/sections/WhyArkanSection';
import { SectorGrid } from '@/components/sections/SectorGrid';
import { FirstConversationSection } from '@/components/sections/FirstConversationSection';
import { LeadForm } from '@/components/sections/LeadForm';
import { CTASection } from '@/components/sections/CTASection';
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
      <WhoWeHelpSection />
      <WhyArkanSection />
      <SectorGrid />
      <FirstConversationSection />
      <section
        id="contact"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '120px 0',
        }}
      >
        <LeadForm />
      </section>
      <CTASection />
    </>
  );
}
