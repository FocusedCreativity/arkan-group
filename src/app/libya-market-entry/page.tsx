import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { LeadForm } from '@/components/sections/LeadForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Market Entry Partner | Book a Market Entry Call | Arkan Holding Group',
  description: 'Enter the Libyan market with confidence. Arkan Holding Group is a trusted local operating partner with 30+ years of experience across 7 sectors.',
};

export default function MarketEntryPage() {
  return (
    <>
      <SectorPageHero
        badge="LIBYA MARKET ENTRY"
        title="Enter Libya With Confidence. We Handle the Ground Operations."
        subtitle="International companies exploring Libya need more than interest. They need local knowledge, operational support, trusted relationships, and the right partner on the ground. Arkan has been that partner for 30+ years."
        cta="Book a Market Entry Call"
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
        capabilities={[
          'Local business registration and licensing',
          'Sector-specific operational support',
          'Procurement and supply chain setup',
          'Workforce solutions and staffing',
          'Regulatory navigation and compliance'
        ]}
        sectorColor="#C9A84C"
      />

      <section className="section section--mid">
        <div className="container">
          <div className="grid-3 mb-12">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1.75rem' }}>30+ Years</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Continuous Libya market experience since 1994. Local knowledge that cannot be replicated overnight.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1.75rem' }}>7 Sectors</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Oil & gas, construction, trading, manpower, education, healthcare, and real estate under one operating roof.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--color-navy)', marginBottom: '1rem', fontSize: '1.75rem' }}>Local Operations</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Benghazi headquarters with onshore and offshore support capabilities across Libya.</p>
            </div>
          </div>
          <p className="text-center text-muted" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
            Licensed and registered with Libyan authorities across all operating sectors.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="mb-6" style={{ color: 'var(--color-navy)' }}>Why Market Entry Fails Without a Local Partner</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem' }}>The Libyan market offers significant opportunities but presents complex operational challenges. Foreign companies often struggle with:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span> <span style={{ color: 'var(--color-slate)' }}>Complex regulatory and licensing navigation</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span> <span style={{ color: 'var(--color-slate)' }}>Securing reliable local procurement networks</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span> <span style={{ color: 'var(--color-slate)' }}>Sourcing compliant and skilled workforce</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span> <span style={{ color: 'var(--color-slate)' }}>Navigating cultural and operational nuances</span></li>
              </ul>
            </div>
            
            <div className="media-wrapper" style={{ position: 'relative', height: '500px' }}>
              <Image 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Business meeting" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
             <div className="media-wrapper" style={{ position: 'relative', height: '500px', order: -1 }}>
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Operations and execution" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>

            <div>
              <h2 className="mb-6 text-gold">The Arkan Solution</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem', opacity: 0.9 }}>We provide an established, integrated operating platform so you can focus on your core business without the typical friction of new market entry.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span className="text-gold" style={{ fontWeight: 'bold' }}>✓</span> <span style={{ opacity: 0.9 }}>Ready-to-use corporate structure and licenses</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span className="text-gold" style={{ fontWeight: 'bold' }}>✓</span> <span style={{ opacity: 0.9 }}>Established vendor and supply chain networks</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span className="text-gold" style={{ fontWeight: 'bold' }}>✓</span> <span style={{ opacity: 0.9 }}>Dedicated local and expat staffing solutions</span></li>
                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.0625rem' }}><span className="text-gold" style={{ fontWeight: 'bold' }}>✓</span> <span style={{ opacity: 0.9 }}>Trusted relationships with key stakeholders</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#FFFFFF' }}>
        <ProcessSteps />
      </section>

      <section id="contact" className="section section--mid">
        <div className="container">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
