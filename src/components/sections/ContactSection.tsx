'use client';

import { useLang } from '@/lib/LangContext';
import { LeadForm } from '@/components/sections/LeadForm';

export function ContactSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 104px) 0', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="contact-heading"
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {/* Context column */}
        <div>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px',
              justifyContent: isArabic ? 'flex-end' : 'flex-start',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>
              {t.firstConversation.overline}
            </span>
          </div>

          <h2
            id="contact-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: '0 0 20px',
            }}
          >
            {t.firstConversation.headline}
          </h2>

          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', margin: '0 0 36px', maxWidth: '440px' }}>
            {t.firstConversation.body}
          </p>

          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B89460', marginBottom: '18px' }}>
            {t.firstConversation.captureLabel}
          </p>
          <ul
            className="contact-capture"
            style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}
          >
            {t.firstConversation.captureItems.map((item) => (
              <li key={item} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#B89460', fontSize: '11px' }}>●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form column */}
        <div>
          <LeadForm embedded />
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 460px) {
          .contact-capture { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
