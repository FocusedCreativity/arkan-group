'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export function NewsSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="news"
      style={{ backgroundColor: '#EDE9E1', padding: '120px 0', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="news-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
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
              {t.news.overline}
            </span>
          </div>
          <h2
            id="news-heading"
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
            {t.news.headline}
          </h2>
        </div>

        {/* News rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {t.news.items.map((item, index) => (
            <Link
              key={index}
              href="/news"
              style={{
                display: 'grid',
                gridTemplateColumns: isArabic ? 'auto 1fr 120px' : '120px 1fr auto',
                alignItems: 'center',
                gap: '32px',
                padding: '28px 0',
                borderTop: '1px solid rgba(11,27,50,0.12)',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              className="news-row"
              aria-label={`Read article: ${item.headline}`}
            >
              {/* Date (First in DOM, rendering depends on grid-template-columns) */}
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#B89460',
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  order: isArabic ? 3 : 1,
                  textAlign: isArabic ? 'left' : 'left',
                }}
              >
                {item.date}
              </span>

              {/* Headline */}
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#0B1B32',
                  lineHeight: 1.5,
                  order: 2,
                }}
              >
                {item.headline}
              </span>

              {/* Read link */}
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#0B1B32',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  order: isArabic ? 1 : 3,
                }}
              >
                {t.news.read} {isArabic ? '←' : '→'}
              </span>
            </Link>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(11,27,50,0.12)' }} />
        </div>
      </div>

      <style>{`
        .news-row:hover {
          opacity: 0.7;
        }
        @media (max-width: 560px) {
          .news-row {
            grid-template-columns: 1fr auto !important;
            grid-template-rows: auto auto;
            gap: 8px 16px !important;
          }
          .news-row > span:nth-child(1) {
            grid-column: ${isArabic ? '2' : '1'};
            grid-row: 1;
            order: unset !important;
          }
          .news-row > span:nth-child(2) {
            grid-column: 1 / -1;
            grid-row: 2;
            order: unset !important;
          }
          .news-row > span:nth-child(3) {
            grid-column: ${isArabic ? '1' : '2'};
            grid-row: 1;
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
