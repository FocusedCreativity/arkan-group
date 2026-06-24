'use client';
import { useLang } from '@/lib/LangContext';

export function StatsBanner() {
  const { t, isArabic } = useLang();

  return (
    <section
      style={{ backgroundColor: '#0B1B32', padding: '100px 0', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-label="Arkan by the numbers"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {/* Overline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '56px',
            justifyContent: isArabic ? 'flex-start' : 'flex-start',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '32px',
              height: '1px',
              backgroundColor: '#B89460',
              flexShrink: 0,
            }}
          />
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
            {t.stats.overline}
          </span>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            position: 'relative',
          }}
          className="stats-grid"
        >
          {t.stats.items.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingRight: isArabic ? (index > 0 ? '48px' : '0') : '48px',
                paddingLeft: isArabic ? '48px' : (index > 0 ? '48px' : '0'),
                borderRight: isArabic && index > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                borderLeft: !isArabic && index > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
              className="stat-item"
            >
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  direction: 'ltr',
                  textAlign: isArabic ? 'right' : 'left',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.01em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 48px 0;
          }
          .stat-item {
            padding-left: 0 !important;
            border-left: none !important;
            padding-right: 0 !important;
            border-right: none !important;
          }
          .stat-item:nth-child(even) {
            padding-left: ${isArabic ? '0' : '32px'} !important;
            border-left: ${isArabic ? 'none' : '1px solid rgba(255,255,255,0.12)'} !important;
            padding-right: ${isArabic ? '32px' : '0'} !important;
            border-right: ${isArabic ? '1px solid rgba(255,255,255,0.12)' : 'none'} !important;
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-item:nth-child(even) {
            padding-left: 0 !important;
            border-left: none !important;
            padding-right: 0 !important;
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
