'use client';

import { useLang } from '@/lib/LangContext';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE, FALLBACK_IMAGES } from '@/lib/constants';

export function VideoFeatureSection() {
  const { t, isArabic } = useLang();
  const watchUrl = `https://www.youtube.com/watch?v=${YOUTUBE.id}`;

  return (
    <section
      className="video-feature"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="video-feature-heading"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <YouTubeBackground
          videoId={YOUTUBE.id}
          posterSrc={FALLBACK_IMAGES.whyArkan[0]}
          alt=""
          start={YOUTUBE.start}
          isArabic={isArabic}
          overlayOpacity={0.45}
          lazy
        />
      </div>

      {/* Bottom gradient for legibility of the anchored text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to top, rgba(11,27,50,0.9) 0%, rgba(11,27,50,0.3) 40%, transparent 72%)',
        }}
      />

      <div
        className="video-feature__inner"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          paddingBottom: 'clamp(64px, 9vh, 110px)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '48px',
          alignItems: 'end',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              justifyContent: isArabic ? 'flex-end' : 'flex-start',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#D4B07A',
              }}
            >
              {t.videoSection.overline}
            </span>
          </div>

          <h2
            id="video-feature-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
              textShadow: '0 2px 30px rgba(0,0,0,0.4)',
            }}
          >
            {t.videoSection.title}
          </h2>

          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="circle-cta"
            style={{ marginTop: '36px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}
          >
            <span className="circle-cta__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="#0B1B32" />
              </svg>
            </span>
            <span className="circle-cta__label" style={{ color: '#FFFFFF' }}>{t.videoSection.watchCta}</span>
          </a>
        </div>

        <p
          className="video-feature__body"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(15px, 1.6vw, 17px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
            paddingBottom: '6px',
          }}
        >
          {t.videoSection.body}
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .video-feature__inner { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .video-feature { min-height: 84vh; }
        }
      `}</style>
    </section>
  );
}
