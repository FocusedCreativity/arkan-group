'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export function CTASection() {
  const { t, isArabic } = useLang();

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        padding: '100px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="cta-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '64px',
          alignItems: 'center',
          textAlign: isArabic ? 'right' : 'left',
        }}
        className="cta-grid"
      >
        <div>
          <h2
            id="cta-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#0B1B32',
              maxWidth: '500px',
              marginBottom: '16px',
            }}
          >
            {t.cta.headline}
          </h2>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#6B7280',
              maxWidth: '440px',
              margin: 0,
            }}
          >
            {t.cta.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: isArabic ? 'flex-start' : 'flex-end',
            flexShrink: 0,
          }}
        >
          <Link
            href="#contact"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: '#FFFFFF',
              backgroundColor: '#0B1B32',
              padding: '18px 36px',
              borderRadius: '2px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s ease',
              display: 'inline-block',
              textAlign: 'center',
            }}
            className="cta-btn-primary"
          >
            {t.cta.button} {isArabic ? '←' : '→'}
          </Link>
          <Link
            href="/Arkan_Company_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#0B1B32',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            className="cta-btn-secondary"
          >
            {t.cta.secondary}
          </Link>
        </div>
      </div>

      <style>{`
        .cta-btn-primary:hover, .cta-btn-secondary:hover { opacity: 0.85; }
        @media (max-width: 700px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
