'use client';
import { useLang } from '@/lib/LangContext';
import Link from 'next/link';
import { HOMEPAGE_SECTOR_LINKS } from '@/lib/constants';

export function SectorGrid() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="sectors"
      style={{ backgroundColor: '#EDE9E1', padding: '120px 0', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="sectors-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'flex-end',
            marginBottom: '64px',
            textAlign: isArabic ? 'right' : 'left',
          }}
          className="sectors-header"
        >
          <div>
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
                {t.sectors.overline}
              </span>
            </div>
            <h2
              id="sectors-heading"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#0B1B32',
                margin: 0,
              }}
            >
              {t.sectors.headline}
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#6B7280',
              margin: 0,
              maxWidth: '400px',
            }}
          >
            {t.sectors.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            border: '1px solid #D4CFC7',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          className="sectors-grid"
        >
          {t.sectors.items.map((sector, idx) => (
            <SectorCard
              key={sector.num}
              number={sector.num}
              title={sector.title}
              description={sector.desc}
              cta={sector.cta}
              href={HOMEPAGE_SECTOR_LINKS[idx]}
              isArabic={isArabic}
            />
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: isArabic ? 'right' : 'left' }}>
          <Link
            href="/sectors"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#0B1B32',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              borderBottom: '1px solid #B89460',
              paddingBottom: '4px',
              transition: 'opacity 0.2s ease',
            }}
            className="sectors-explore-link"
          >
            {t.sectors.cta} {isArabic ? '←' : '→'}
          </Link>
        </div>
      </div>

      <style>{`
        .sectors-explore-link:hover { opacity: 0.7; }
        @media (max-width: 900px) {
          .sectors-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .sectors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .sectors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SectorCard({
  number,
  title,
  description,
  cta,
  href,
  isArabic,
}: {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  isArabic: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        transition: 'background-color 0.25s ease',
        position: 'relative',
        width: '100%',
        textAlign: isArabic ? 'right' : 'left',
        minHeight: '100%',
      }}
      className="sector-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: '#B89460',
            letterSpacing: '0.05em',
          }}
        >
          {number}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          color: '#0B1B32',
          marginBottom: '12px',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          lineHeight: '1.65',
          color: '#6B7280',
          margin: '0 0 24px',
          flex: 1,
        }}
      >
        {description}
      </p>

      <Link
        href={href}
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          color: '#0B1B32',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: 'auto',
        }}
        className="sector-cta-link"
      >
        {cta} {isArabic ? '←' : '→'}
      </Link>

      <style>{`
        .sector-card:hover { background-color: #F8F7F5 !important; z-index: 1; }
        .sector-cta-link:hover { opacity: 0.7; }
      `}</style>
    </div>
  );
}
