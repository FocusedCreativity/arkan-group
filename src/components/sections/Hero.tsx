'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { VIDEO_PATHS, FALLBACK_IMAGES } from '@/lib/constants';

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const { t, isArabic } = useLang();

  useEffect(() => {
    const els = [headingRef.current, subtitleRef.current, ctasRef.current];
    const delays = [0, 200, 400];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(0.2,0.8,0.2,1), transform 0.9s cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delays[i] + 100);
    });
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-label="Hero — Enter Libya with the right local partner"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <VideoBackground
          videoSrc={VIDEO_PATHS.heroMarketEntry}
          posterSrc={FALLBACK_IMAGES.hero}
          alt="Operational environment in Libya"
          isArabic={isArabic}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          paddingTop: '120px',
          paddingBottom: '80px',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
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
            {t.hero.overline}
          </span>
        </div>

        <h1
          ref={headingRef}
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            maxWidth: '700px',
            marginBottom: 0,
          }}
        >
          {t.hero.headline}
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '520px',
            marginTop: '24px',
          }}
        >
          {t.hero.subtitle}
        </p>

        <div
          ref={ctasRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginTop: '40px',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="#contact"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.85)',
              padding: '14px 32px',
              borderRadius: '2px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background-color 0.25s ease, color 0.25s ease',
              display: 'inline-block',
            }}
            className="hero-cta-primary"
          >
            {t.hero.cta1} {isArabic ? '←' : '→'}
          </Link>
          <Link
            href="/Arkan_Company_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: '#FFFFFF',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease',
            }}
            className="hero-cta-secondary"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          {t.hero.videoCaption}
        </span>
        <div
          aria-hidden="true"
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        .hero-cta-primary:hover {
          background-color: #FFFFFF !important;
          color: #0B1B32 !important;
        }
        .hero-cta-secondary:hover {
          opacity: 0.75;
        }
      `}</style>
    </section>
  );
}
