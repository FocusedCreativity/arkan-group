import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { LeadForm } from '@/components/sections/LeadForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Manpower & Staffing Solutions | Arkan Holding Group',
  description: 'Reliable workforce solutions for Libya operations. Skilled professionals, project site crews, and specialized technical teams.',
};

export default function ManpowerPage() {
  return (
    <>
      <SectorPageHero
        badge="MANPOWER & STAFFING"
        title="Reliable Workforce Solutions for Libya Operations"
        subtitle="Whether you need skilled professionals, project site crews, or specialized technical teams, Arkan provides end-to-end manpower solutions for international companies operating in Libya."
        cta="Discuss Workforce Support"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
        capabilities={[
          'Skilled and unskilled workforce recruitment',
          'Project and site mobilization',
          'Specialized technical team deployment',
          'Local and international workforce coordination',
          'HR compliance and registration'
        ]}
        sectorColor="#F59E0B"
      />

      <section className="section section--mid">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-navy)' }}>Comprehensive Workforce Support</h2>
          </div>
          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Recruitment</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Sourcing and vetting of both local Libyan talent and specialized expatriate professionals.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>Deployment & Mobilization</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Managing the logistics of getting personnel to site, including visas, flights, and accommodation.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 className="text-gold mb-4" style={{ fontSize: '1.5rem' }}>HR Compliance</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Payroll management, tax compliance, and adherence to Libyan labor laws.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--slate">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="media-wrapper" style={{ position: 'relative', height: '450px', order: -1 }}>
              <Image 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Technical workforce" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div>
              <h2 className="mb-6">The Arkan Staffing Advantage</h2>
              <p className="mb-8" style={{ fontSize: '1.125rem', opacity: 0.9 }}>Deploying a workforce in Libya requires navigating complex visa processes and labor regulations. We ensure your team is compliant and ready to work.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Established Networks</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Access to a deep pool of pre-vetted local and international talent.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Immigration Expertise</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>Dedicated team handling visas, work permits, and residency requirements.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="text-gold mt-1" style={{ fontSize: '1.25rem' }}>✓</span>
                  <div>
                    <h4 className="mb-1" style={{ color: 'var(--color-light)' }}>Turnkey Solutions</h4>
                    <p style={{ color: 'var(--color-light)', opacity: 0.8 }}>From recruitment to payroll to demobilization, we handle the entire HR lifecycle.</p>
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
