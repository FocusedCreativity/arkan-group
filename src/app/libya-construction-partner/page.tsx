import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { LeadForm } from '@/components/sections/LeadForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Construction Partner | Arkan Holding Group',
  description: 'End-to-end construction partnership for international companies in Libya: project management, development, design, and construction manpower.',
};

export default function ConstructionPage() {
  return (
    <>
      <SectorPageHero
        badge="CONSTRUCTION & REAL ESTATE"
        title="Your Construction and Real Estate Development Partner in Libya"
        subtitle="From project management and development to design, investment, and construction manpower, Arkan provides end-to-end construction partnership for international companies in Libya."
        cta="Discuss Construction Partnership"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
        capabilities={[
          'Real estate development and investment',
          'Construction project management',
          'Architectural design and engineering support',
          'Sustainability and regulatory compliance',
          'Construction manpower solutions'
        ]}
        sectorColor="#3B82F6"
      />

      <section className="section section--mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-navy)' }}>End-to-End Construction Support</h2>
          </div>
          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Development & Investment</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Strategic partnerships for commercial and residential real estate development across key Libyan cities.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Project Management</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Comprehensive oversight, contractor management, and QA/QC for large-scale infrastructure projects.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Construction Manpower</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Sourcing and deployment of skilled engineers, site managers, and construction labor crews.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="media-wrapper" style={{ position: 'relative', height: '450px', order: -1 }}>
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Construction site" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <h2 className="mb-6">Building Libya's Future</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem', opacity: 0.9 }}>As Libya enters a phase of extensive reconstruction, international EPCs and developers need a reliable local partner to navigate the supply chain and regulatory landscape.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Established Supply Chain</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Access to reliable local materials and verified subcontractors.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Regulatory Expertise</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Deep understanding of Libyan building codes, permits, and land regulations.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>30 Years Experience</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>A proven track record of successful project delivery in Libya.</p>
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
