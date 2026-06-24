'use client';
import { useLang } from '@/lib/LangContext';

export function AboutSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="about-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
        }}
      >
        {/* Two-column main layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '80px',
            alignItems: 'start',
            textAlign: isArabic ? 'right' : 'left',
          }}
          className="about-grid"
        >
          {/* Left column */}
          <div>
            {/* Overline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
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
                {t.about.overline}
              </span>
            </div>

            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#6B7280',
              }}
            >
              {t.about.sideText}
            </p>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {/* Large paragraph */}
            <p
              id="about-heading"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                lineHeight: 1.5,
                fontWeight: 400,
                color: '#0B1B32',
              }}
            >
              {t.about.mainText}&nbsp;
              <em
                style={{
                  fontStyle: 'italic',
                  color: '#B89460',
                }}
              >
                {t.about.mainTextGold}
              </em>
            </p>

            {/* Two card sub-grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
              }}
              className="about-cards"
            >
              <div>
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
                  {t.about.card1Title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: 0,
                  }}
                >
                  {t.about.card1Desc}
                </p>
              </div>
              <div>
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
                  {t.about.card2Title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: 0,
                  }}
                >
                  {t.about.card2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          .about-cards {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
