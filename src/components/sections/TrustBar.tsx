'use client';

import { useLang } from '@/lib/LangContext';

export function TrustBar() {
  const { t, isArabic } = useLang();

  return (
    <section
      aria-label="Trust signals"
      style={{
        backgroundColor: '#0B1B32',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '28px clamp(24px, 6vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}
        className="trust-bar-grid"
      >
        {t.trustBar.items.map((item, index) => (
          <div
            key={item}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              paddingRight: !isArabic && index < t.trustBar.items.length - 1 ? '24px' : 0,
              paddingLeft: isArabic && index < t.trustBar.items.length - 1 ? '24px' : 0,
              borderRight: !isArabic && index < t.trustBar.items.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              borderLeft: isArabic && index < t.trustBar.items.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .trust-bar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
