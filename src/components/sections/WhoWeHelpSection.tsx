'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { FALLBACK_IMAGES } from '@/lib/constants';

export function WhoWeHelpSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      id="who-we-help"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="who-we-help-heading"
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
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B89460' }}>
            {t.whoWeHelp.overline}
          </span>
        </div>

        <h2
          id="who-we-help-heading"
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
          {t.whoWeHelp.headline}
        </h2>

        <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
          {t.whoWeHelp.paragraphs.map((paragraph) => (
            <p key={paragraph} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: '#6B7280', margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '56px',
          }}
          className="who-we-help-grid"
        >
          {t.whoWeHelp.cards.map((card, idx) => (
            <article
              key={card.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src={FALLBACK_IMAGES.whoWeHelp[idx]}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#0B1B32',
                    lineHeight: 1.35,
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: '#6B7280',
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="#contact"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#FFFFFF',
            backgroundColor: '#0B1B32',
            padding: '14px 32px',
            borderRadius: '2px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            display: 'inline-block',
            transition: 'opacity 0.2s ease',
          }}
          className="who-we-help-cta"
        >
          {t.whoWeHelp.cta} {isArabic ? '←' : '→'}
        </Link>
      </div>

      <style>{`
        .who-we-help-cta:hover { opacity: 0.85; }
        @media (max-width: 900px) {
          .who-we-help-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .who-we-help-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
