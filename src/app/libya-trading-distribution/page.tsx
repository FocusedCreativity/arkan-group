import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { LeadForm } from '@/components/sections/LeadForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Trading & Distribution Partner | Arkan Holding Group',
  description: 'Reliable import/export operations, commodity trading, and logistics compliance for companies entering the Libyan market.',
};

export default function TradingPage() {
  return (
    <>
      <SectorPageHero
        badge="TRADING & DISTRIBUTION"
        title="Your Import, Export & Distribution Partner in Libya"
        subtitle="We facilitate reliable import/export operations, commodity trading, consumer goods distribution, and logistics compliance for companies entering the Libyan market."
        cta="Discuss Distribution or Supply"
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
        capabilities={[
          'Import and export operations',
          'Commodity and minerals trading',
          'Consumer and agricultural goods distribution',
          'Customs compliance and documentation',
          'Last-mile logistics and warehousing'
        ]}
        sectorColor="#10B981"
      />

      <section className="section section--mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-navy)' }}>Trading & Logistics Capabilities</h2>
          </div>
          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Import & Export</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Seamless management of cross-border trade, letters of credit, and central bank regulations.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Commodity Trading</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Sourcing and distribution of raw materials, agricultural products, and industrial commodities.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Distribution & Logistics</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Warehousing, inventory management, and last-mile distribution networks across Libya.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="media-wrapper" style={{ position: 'relative', height: '450px' }}>
              <Image 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Logistics and distribution" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <h2 className="mb-6">The Arkan Trading Advantage</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem', opacity: 0.9 }}>Entering the Libyan consumer or industrial market requires navigating complex customs and distribution networks. Arkan de-risks this process.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Customs Relationships</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Established relationships with Libyan customs and port authorities to prevent delays.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Logistics Infrastructure</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Access to secure warehousing and reliable transport fleets.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Financial Navigation</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Expertise in navigating the Libyan banking system for trade finance and L/Cs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section--mid">
        <div className="container">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
