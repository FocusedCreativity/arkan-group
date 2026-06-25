'use client';

import { ReactNode } from 'react';
import { YouTubeBackground } from './YouTubeBackground';
import { YOUTUBE } from '@/lib/constants';

interface PageVideoHeroProps {
  /** Kept for API compatibility; the shared YouTube placeholder is used as the background. */
  videoSrc?: string | null;
  fallbackImage: string;
  eyebrow: string;
  headline: string;
  subheader?: string;
  children?: ReactNode;
  minHeight?: string;
  align?: 'left' | 'center';
  isArabic?: boolean;
}

export function PageVideoHero({
  fallbackImage,
  eyebrow,
  headline,
  subheader,
  children,
  minHeight = '70vh',
  align = 'left',
  isArabic = false,
}: PageVideoHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <YouTubeBackground
          videoId={YOUTUBE.id}
          posterSrc={fallbackImage}
          alt=""
          start={YOUTUBE.start}
          isArabic={isArabic}
          overlayOpacity={0.62}
          priority
        />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '160px clamp(24px, 6vw, 80px) 100px',
          textAlign: align === 'center' ? 'center' : 'left',
        }}
      >
        <div style={{ maxWidth: align === 'center' ? '800px' : '720px', margin: align === 'center' ? '0 auto' : undefined }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              justifyContent: align === 'center' ? 'center' : 'flex-start',
            }}
          >
            <span style={{ width: '32px', height: '1px', background: '#B89460', flexShrink: 0 }} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: '#B89460',
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: subheader ? '16px' : '0',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {headline}
          </h1>
          {subheader && (
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: align === 'center' ? '0 auto' : undefined,
              }}
            >
              {subheader}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
