'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LangContext';
import { FALLBACK_IMAGES } from '@/lib/constants';

export function WhyArkanSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="why-arkan"
      style={{
        backgroundColor: '#F8F7F5',
        padding: '120px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="why-arkan-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#B89460',
            }}
          >
            {t.whyArkan.overline}
          </span>
        </div>

        <h2
          id="why-arkan-heading"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: '#0B1B32',
            maxWidth: '640px',
            marginBottom: '20px',
          }}
        >
          {t.whyArkan.headline}
        </h2>

        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: 1.75,
            color: '#6B7280',
            maxWidth: '720px',
            marginBottom: '56px',
          }}
        >
          {t.whyArkan.intro}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="why-arkan-grid"
        >
          {t.whyArkan.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <Image
                  src={FALLBACK_IMAGES.whyArkan[idx]}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '32px 28px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0B1B32',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#6B7280',
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-arkan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
