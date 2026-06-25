'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/lib/LangContext';

// Left padding that lines content up with the centred 1280px container.
const EDGE = 'max(clamp(24px, 6vw, 80px), calc((100vw - 1280px) / 2))';

export function FeaturedProjects() {
  const { t, isArabic } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const total = t.currentWork.items.length;
  const [range, setRange] = useState<[number, number]>([1, Math.min(3, total)]);

  const step = useCallback((dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || '24') || 24;
    const amount = (card.offsetWidth + gap) * (isArabic ? -dir : dir);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, [isArabic]);

  const updateRange = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || '24') || 24;
    const cardW = card.offsetWidth + gap;
    const perView = Math.max(1, Math.round(el.clientWidth / cardW));
    const first = Math.min(
      total - perView + 1,
      Math.max(1, Math.round(Math.abs(el.scrollLeft) / cardW) + 1)
    );
    setRange([Math.max(1, first), Math.min(total, first + perView - 1)]);
  }, [total]);

  useEffect(() => {
    updateRange();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateRange, { passive: true });
    window.addEventListener('resize', updateRange);
    return () => {
      el.removeEventListener('scroll', updateRange);
      window.removeEventListener('resize', updateRange);
    };
  }, [updateRange]);

  return (
    <section
      style={{ backgroundColor: '#FFFFFF', padding: '120px 0 110px', direction: isArabic ? 'rtl' : 'ltr' }}
      aria-labelledby="projects-heading"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
        <div
          className="projects-head"
          style={{
            display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px',
            alignItems: 'flex-end', marginBottom: '48px', textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>
                {t.currentWork.overline}
              </span>
            </div>
            <h2
              id="projects-heading"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}
            >
              {t.currentWork.title}
            </h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: '#6B7280', margin: 0, maxWidth: '520px' }}>
              {t.currentWork.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed track: cards start at the container edge and run off-screen */}
      <div
        ref={trackRef}
        className="projects-track"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollPaddingInlineStart: EDGE,
          paddingInlineStart: EDGE,
          paddingInlineEnd: 'clamp(24px, 6vw, 80px)',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
        }}
      >
          {t.currentWork.items.map((p) => (
            <Link
              key={p.title}
              href="/projects"
              data-card
              className="project-card"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                quality={80}
                className="project-card__img"
                style={{ objectFit: 'cover' }}
              />
              <div className="project-card__scrim" />
              <div className="project-card__body" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                <span className="project-card__loc">{p.location}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
              </div>
              <span className="project-card__arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d={isArabic ? 'M14 5l-7 7 7 7' : 'M10 5l7 7-7 7'} stroke="#0B1B32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
        ))}
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px',
            justifyContent: isArabic ? 'flex-end' : 'flex-start', flexDirection: isArabic ? 'row-reverse' : 'row',
          }}
        >
          <button onClick={() => step(-1)} className="projects-nav" aria-label="Previous projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0B1B32', letterSpacing: '0.04em', minWidth: '88px', textAlign: 'center' }}>
            {t.currentWork.counter(range[0], range[1], total)}
          </span>
          <button onClick={() => step(1)} className="projects-nav" aria-label="Next projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      <style>{`
        .projects-track::-webkit-scrollbar { display: none; }
        .project-card {
          position: relative;
          flex: 0 0 clamp(280px, 30vw, 380px);
          aspect-ratio: 3 / 4;
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          background: #0B1B32;
          display: block;
        }
        .project-card__img { transition: transform 0.7s cubic-bezier(0.2,0.8,0.2,1); }
        .project-card:hover .project-card__img { transform: scale(1.06); }
        .project-card__scrim {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(11,27,50,0.92) 0%, rgba(11,27,50,0.35) 45%, rgba(11,27,50,0.05) 75%);
        }
        .project-card__body {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 28px 24px;
        }
        .project-card__loc {
          display: block;
          font-family: Inter, system-ui, sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          color: #D4B07A; margin-bottom: 10px;
        }
        .project-card__title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 20px; font-weight: 700; line-height: 1.25;
          color: #FFFFFF; margin: 0; letter-spacing: -0.01em;
        }
        .project-card__desc {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.82);
          margin: 0;
          max-height: 0; opacity: 0; overflow: hidden;
          transition: max-height 0.45s ease, opacity 0.45s ease, margin-top 0.45s ease;
        }
        .project-card:hover .project-card__desc,
        .project-card:focus-visible .project-card__desc {
          max-height: 140px; opacity: 1; margin-top: 12px;
        }
        .project-card__arrow {
          position: absolute; bottom: 24px; inset-inline-end: 24px;
          width: 44px; height: 44px; border-radius: 999px;
          background: var(--color-gold);
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }
        .project-card:hover .project-card__arrow { transform: scale(1.08); background: var(--color-gold-light); }
        .projects-nav {
          width: 44px; height: 44px; border-radius: 999px;
          border: 1px solid #D4CFC7; background: #FFFFFF; color: #0B1B32;
          display: inline-flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .projects-nav:hover { border-color: #B89460; background: #B89460; color: #0B1B32; }
        @media (max-width: 640px) {
          .project-card { flex-basis: 78vw; }
          .project-card__desc { max-height: 140px; opacity: 1; margin-top: 12px; }
        }
      `}</style>
    </section>
  );
}
