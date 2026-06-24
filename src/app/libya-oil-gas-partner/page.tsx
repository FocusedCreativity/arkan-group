import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { LeadForm } from '@/components/sections/LeadForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Oil & Gas Support Services | Arkan Holding Group',
  description: 'From rig operations to safety systems, Arkan provides comprehensive support for international energy companies operating in Libya.',
};

export default function OilGasPage() {
  return (
    <>
      <SectorPageHero
        badge="OIL & GAS SERVICES"
        title="Your Onshore & Offshore Oil and Gas Support Partner in Libya"
        subtitle="From rig operations and maintenance to safety systems, industrial coatings, and equipment supply, Arkan provides comprehensive support for international energy companies operating in Libya."
        cta="Discuss Oil and Gas Support"
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
        capabilities={[
          'Onshore and offshore operational support',
          'Rig mobilization and equipment supply',
          'Industrial maintenance and coatings',
          'Safety systems and HSE compliance',
          'Local procurement and in-country logistics'
        ]}
        sectorColor="#C9A84C"
      />

      <section className="section section--mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-navy)' }}>Comprehensive Oil & Gas Support Services</h2>
          </div>
          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Operational Support</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Ground-level operational support for both onshore and offshore energy projects, ensuring smooth day-to-day execution.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Equipment Supply</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Sourcing and supply of specialized oilfield equipment through our verified local and international networks.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Safety & Compliance</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>HSE compliance support, safety system installation, and navigation of Libya's strict energy sector regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="media-wrapper" style={{ position: 'relative', height: '450px' }}>
              <Image 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Oil refinery operations" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <h2 className="mb-6">Why Choose Arkan?</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem', opacity: 0.9 }}>With over 30 years operating in Libya's energy sector, Arkan is a trusted name among national operators and international partners alike.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Established Relationships</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Long-standing relationships with NOC, AGOCO, and regional energy authorities.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Local Infrastructure</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Established local logistics, warehousing, and procurement network based in Benghazi.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Fully Licensed</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Fully licensed and registered operator meeting all local requirements.</p>
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
