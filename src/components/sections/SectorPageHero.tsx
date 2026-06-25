'use client';

import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE } from '@/lib/constants';

interface SectorPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  capabilities: string[];
  /** Deprecated — kept for API compatibility. Brand colour is always gold now. */
  sectorColor?: string;
  /** Poster image shown behind the video while it loads / as a fallback. */
  image?: string;
  isArabic?: boolean;
}

export const SectorPageHero = ({
  badge,
  title,
  subtitle,
  cta,
  capabilities,
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80',
  isArabic = false,
}: SectorPageHeroProps) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <YouTubeBackground
          videoId={YOUTUBE.id}
          posterSrc={image}
          alt={title}
          start={YOUTUBE.start}
          isArabic={isArabic}
          overlayOpacity={0.5}
          priority
        />
      </div>

      {/* Bottom gradient for legibility */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(11,27,50,0.92) 0%, rgba(11,27,50,0.3) 45%, transparent 75%)',
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1280px', width: '100%', margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          paddingTop: '160px',
          paddingBottom: 'clamp(64px, 9vh, 110px)',
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>
            {badge}
          </span>
        </div>

        <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.07, letterSpacing: '-0.025em', color: '#FFFFFF', maxWidth: '880px', margin: 0, textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}>
          {title}
        </h1>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', maxWidth: '620px', marginTop: '24px' }}>
          {subtitle}
        </p>

        <div className="sector-hero-ctas" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '36px', alignItems: 'center', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
          <Link href="/contact" className="sector-hero-primary">
            {cta} {isArabic ? '←' : '→'}
          </Link>
          <a href="/Arkan_Company_Profile.pdf" target="_blank" rel="noopener noreferrer" className="sector-hero-secondary">
            {isArabic ? 'تحميل ملف الشركة' : 'Download Company Profile'}
          </a>
        </div>

        {/* Capabilities */}
        <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px 28px', marginTop: '48px', maxWidth: '920px',
            borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px',
          }}
        >
          {capabilities.map((cap) => (
            <div key={cap} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(184,148,96,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                <IconCheck size={13} color="#D4B07A" stroke={3} />
              </span>
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', color: 'rgba(255,255,255,0.9)', fontSize: '15px', fontWeight: 500, lineHeight: 1.4 }}>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sector-hero-primary {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px; font-weight: 500; letter-spacing: 0.02em;
          color: #0B1B32; background: #B89460;
          padding: 16px 36px; border-radius: 2px; text-decoration: none;
          transition: background-color 0.25s ease;
          display: inline-block;
        }
        .sector-hero-primary:hover { background: #D4B07A; }
        .sector-hero-secondary {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px; font-weight: 400; color: #FFFFFF;
          text-decoration: underline; text-underline-offset: 5px; letter-spacing: 0.02em;
          transition: opacity 0.2s ease;
        }
        .sector-hero-secondary:hover { opacity: 0.75; }
        @media (max-width: 600px) {
          .sector-hero-primary, .sector-hero-secondary { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
};
