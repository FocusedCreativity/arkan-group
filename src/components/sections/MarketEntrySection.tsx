'use client';

import { useLang } from '@/lib/LangContext';

export function MarketEntrySection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="market-entry"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="market-entry-heading"
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
            {t.marketEntry.overline}
          </span>
        </div>

        <h2
          id="market-entry-heading"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: '#0B1B32',
            maxWidth: '720px',
            marginBottom: '24px',
          }}
        >
          {t.marketEntry.headline}
        </h2>

        <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
          {t.marketEntry.body.split('\n\n').map((paragraph: string, idx: number) => (
            <p
              key={idx}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B7280',
                margin: 0,
                marginTop: idx > 0 ? '16px' : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
          className="market-entry-grid"
        >
          {t.marketEntry.pillars.map((pillar: { title: string; desc: string }) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: '#F8F7F5',
                borderRadius: '4px',
                border: '1px solid #E5E7EB',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0B1B32',
                  margin: 0,
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
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .market-entry-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
