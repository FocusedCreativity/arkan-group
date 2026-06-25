'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE, FALLBACK_IMAGES } from '@/lib/constants';

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);
  const { t, isArabic } = useLang();

  useEffect(() => {
    const els = [overlineRef.current, headingRef.current, subtitleRef.current, ctasRef.current];
    const delays = [0, 150, 320, 480];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(0.2,0.8,0.2,1), transform 0.9s cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delays[i] + 120);
    });
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-label="Hero — Enter Libya with the right local partner"
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <YouTubeBackground
          videoId={YOUTUBE.id}
          posterSrc={FALLBACK_IMAGES.hero}
          alt="Operational environment in Libya"
          start={YOUTUBE.start}
          isArabic={isArabic}
          overlayOpacity={0.5}
          priority
        />
      </div>

      {/* Extra bottom gradient so the headline always reads cleanly over motion */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to top, rgba(11,27,50,0.85) 0%, rgba(11,27,50,0.25) 38%, transparent 70%)',
        }}
      />

      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          paddingBottom: 'clamp(96px, 14vh, 160px)',
          paddingTop: '140px',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div
          ref={overlineRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '28px',
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
            {t.hero.overline}
          </span>
        </div>

        <h1
          ref={headingRef}
          className="hero-headline"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            maxWidth: '880px',
            marginBottom: 0,
            textShadow: '0 2px 30px rgba(0,0,0,0.35)',
          }}
        >
          {t.hero.headline}
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '560px',
            marginTop: '24px',
            marginInline: isArabic ? '0 0' : '0',
          }}
        >
          {t.hero.subtitle}
        </p>

        <div
          ref={ctasRef}
          className="hero-ctas"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            marginTop: '40px',
            flexWrap: 'wrap',
            justifyContent: isArabic ? 'flex-end' : 'flex-start',
          }}
        >
          <Link href="#contact" className="hero-cta-primary">
            {t.hero.cta1} {isArabic ? '←' : '→'}
          </Link>
          <Link
            href="/Arkan_Company_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>

      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '28px',
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
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          {t.hero.videoCaption}
        </span>
        <div
          aria-hidden="true"
          style={{
            width: '1px',
            height: '44px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        .hero-cta-primary {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #FFFFFF;
          background: rgba(184,148,96,0.0);
          border: 1px solid rgba(255,255,255,0.85);
          padding: 16px 36px;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
          display: inline-block;
        }
        .hero-cta-primary:hover {
          background-color: #B89460;
          border-color: #B89460;
          color: #0B1B32;
        }
        .hero-cta-secondary {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #FFFFFF;
          text-decoration: underline;
          text-underline-offset: 5px;
          letter-spacing: 0.02em;
          transition: opacity 0.2s ease;
        }
        .hero-cta-secondary:hover { opacity: 0.75; }

        @media (max-width: 640px) {
          .hero-ctas { gap: 18px; }
          .hero-cta-primary { padding: 15px 28px; width: 100%; text-align: center; }
          .hero-cta-secondary { width: 100%; text-align: center; }
          .hero-scroll { display: none; }
          .hero-content { padding-bottom: 72px; }
        }
      `}</style>
    </section>
  );
}
