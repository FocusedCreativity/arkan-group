'use client';

import { useLang } from '@/lib/LangContext';

export function TrustSignalsSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      style={{
        backgroundColor: '#EDE9E1',
        padding: '100px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-label={t.trustSignals.overline}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
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
            {t.trustSignals.overline}
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px 32px',
          }}
          className="trust-grid"
        >
          {t.trustSignals.items.map((item) => (
            <div
              key={item}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: 1.5,
                color: '#0B1B32',
                paddingTop: '16px',
                borderTop: '2px solid #B89460',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
