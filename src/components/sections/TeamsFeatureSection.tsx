'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE, FALLBACK_IMAGES } from '@/lib/constants';

// Left padding that lines content up with the centred 1280px container.
const EDGE = 'max(clamp(24px, 6vw, 80px), calc((100vw - 1280px) / 2))';

export function TeamsFeatureSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      className="teams-feature"
      style={{ backgroundColor: '#FFFFFF', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="teams-feature-heading"
    >
      <div
        className="teams-feature__grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'stretch',
          minHeight: 'clamp(560px, 80vh, 840px)',
        }}
      >
        <div
          className="teams-feature__text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingInlineStart: EDGE,
            paddingInlineEnd: 'clamp(24px, 5vw, 72px)',
            paddingBlock: 'clamp(64px, 9vh, 110px)',
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px',
              justifyContent: isArabic ? 'flex-end' : 'flex-start',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>
              {t.teamsFeature.overline}
            </span>
          </div>

          <h2
            id="teams-feature-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0B1B32',
              margin: '0 0 24px',
              maxWidth: '520px',
            }}
          >
            {t.teamsFeature.title}
          </h2>

          <div style={{ maxWidth: '520px', marginBottom: '36px' }}>
            {t.teamsFeature.body.split('\n\n').map((p, i) => (
              <p key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#6B7280', margin: i > 0 ? '16px 0 0' : 0 }}>
                {p}
              </p>
            ))}
          </div>

          <Link href={t.teamsFeature.ctaHref} className="circle-cta">
            <span className="circle-cta__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d={isArabic ? 'M14 5l-7 7 7 7' : 'M10 5l7 7-7 7'} stroke="#0B1B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="circle-cta__label">{t.teamsFeature.cta}</span>
          </Link>
        </div>

        <div className="teams-feature__media" style={{ position: 'relative', overflow: 'hidden', background: '#0B1B32', minHeight: '320px' }}>
          <YouTubeBackground
            videoId={YOUTUBE.id}
            posterSrc={FALLBACK_IMAGES.whyArkan[1]}
            alt=""
            start={YOUTUBE.start}
            isArabic={isArabic}
            overlayOpacity={0.12}
            lazy
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .teams-feature__grid { grid-template-columns: 1fr !important; }
          .teams-feature__media { order: -1; min-height: 56vw !important; }
          .teams-feature__text { padding-inline: clamp(24px, 6vw, 80px) !important; padding-block: 72px !important; }
        }
      `}</style>
    </section>
  );
}
