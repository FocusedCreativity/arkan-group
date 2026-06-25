'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE } from '@/lib/constants';

// Left padding that lines content up with the centred 1280px container.
const EDGE = 'max(clamp(24px, 6vw, 80px), calc((100vw - 1280px) / 2))';

export default function WhyArkanPage() {
  const { t, isArabic } = useLang();
  const w = t.whyArkanPage;
  const align = isArabic ? 'right' : 'left';
  const justify = isArabic ? 'flex-end' : 'flex-start';
  const watchUrl = `https://www.youtube.com/watch?v=${YOUTUBE.id}`;

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1900&q=80"
        eyebrow={w.hero.overline}
        headline={w.hero.headline}
        subheader={w.hero.subtitle}
        isArabic={isArabic}
      />

      {/* Lead */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 10vw, 130px) 0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: align }}>
          <div style={{ width: '48px', height: '2px', background: '#B89460', marginBottom: '32px', marginInlineStart: isArabic ? 'auto' : 0 }} />
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#0B1B32', margin: 0 }}>{w.lead}</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(56px, 7vw, 80px) 0' }}>
        <div className="wa-stats" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {w.statsList.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#D4B07A', marginTop: '12px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons — full-bleed alternating image sections */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: 'clamp(72px, 9vw, 120px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: justify }}>
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{w.reasonsOverline}</span>
          </div>
        </div>

        {w.sections.map((section, index) => {
          const reversed = index % 2 === 1;
          const innerPad = 'clamp(24px, 5vw, 72px)';
          return (
            <div key={section.title} className="wa-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', minHeight: 'clamp(440px, 64vh, 680px)' }}>
              <div
                className="wa-row-text"
                style={{
                  order: reversed ? 2 : 1,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  paddingInlineStart: reversed ? innerPad : EDGE,
                  paddingInlineEnd: reversed ? EDGE : innerPad,
                  paddingBlock: 'clamp(56px, 8vh, 96px)',
                  textAlign: align,
                }}
              >
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#B89460', marginBottom: '14px' }}>{(index + 1).toString().padStart(2, '0')}</div>
                <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px', maxWidth: '480px', marginInlineStart: isArabic ? 'auto' : 0 }}>{section.title}</h2>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', lineHeight: 1.8, color: '#6B7280', margin: '0 0 24px', maxWidth: '480px', marginInlineStart: isArabic ? 'auto' : 0 }}>{section.body}</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px' }}>
                  {section.points.map((p) => (
                    <li key={p} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#0B1B32', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: justify }}>
                      <span style={{ color: '#B89460' }}>—</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="wa-row-media" style={{ order: reversed ? 1 : 2, position: 'relative', overflow: 'hidden', background: '#0B1B32', minHeight: '300px' }}>
                <Image src={section.image} alt={section.title} fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          );
        })}
      </section>

      {/* The difference (contrast) */}
      <section style={{ backgroundColor: '#EDE9E1', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '680px', marginBottom: '48px', textAlign: align, marginInlineStart: isArabic ? 'auto' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: justify }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{w.difference.overline}</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: 0 }}>{w.difference.headline}</h2>
          </div>
          <div className="wa-compare" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #D4CFC7', borderRadius: '4px', padding: 'clamp(28px, 3.5vw, 44px)', textAlign: align }}>
              <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: 700, color: '#9CA3AF', margin: '0 0 20px', letterSpacing: '0.02em' }}>{w.difference.withoutLabel}</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '14px' }}>
                {w.difference.without.map((p) => (
                  <li key={p} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', lineHeight: 1.5, color: '#6B7280', display: 'flex', alignItems: 'flex-start', gap: '10px', justifyContent: justify }}>
                    <span style={{ color: '#C0C0C0', flexShrink: 0 }}>✕</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#0B1B32', borderRadius: '4px', padding: 'clamp(28px, 3.5vw, 44px)', textAlign: align }}>
              <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: 700, color: '#D4B07A', margin: '0 0 20px', letterSpacing: '0.02em' }}>{w.difference.withLabel}</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '14px' }}>
                {w.difference.with.map((p) => (
                  <li key={p} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', lineHeight: 1.5, color: 'rgba(255,255,255,0.88)', display: 'flex', alignItems: 'flex-start', gap: '10px', justifyContent: justify }}>
                    <span style={{ color: '#B89460', flexShrink: 0 }}>✓</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video band */}
      <section style={{ position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <YouTubeBackground videoId={YOUTUBE.id} posterSrc={w.videoBand.poster} alt="" start={YOUTUBE.start} isArabic={isArabic} overlayOpacity={0.5} lazy />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(11,27,50,0.9) 0%, rgba(11,27,50,0.3) 42%, transparent 72%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', paddingBottom: 'clamp(56px, 8vh, 96px)', textAlign: align }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: justify }}>
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>{w.videoBand.overline}</span>
          </div>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#FFFFFF', maxWidth: '780px', margin: isArabic ? '0 0 0 auto' : 0, textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}>{w.videoBand.headline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '600px', marginTop: '20px', marginInlineStart: isArabic ? 'auto' : 0 }}>{w.videoBand.body}</p>
          <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="circle-cta" style={{ marginTop: '32px', justifyContent: justify }}>
            <span className="circle-cta__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="#0B1B32" /></svg>
            </span>
            <span className="circle-cta__label" style={{ color: '#FFFFFF' }}>{w.videoBand.watch}</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}>{w.ctaHeadline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', lineHeight: 1.7, color: '#6B7280', margin: '0 auto 32px', maxWidth: '560px' }}>{w.ctaBody}</p>
          <Link href="/contact" className="wa-cta-btn">{w.ctaButton} {isArabic ? '←' : '→'}</Link>
        </div>
      </section>

      <style>{`
        .wa-cta-btn { display: inline-block; font-family: Inter, system-ui, sans-serif; font-size: 15px; font-weight: 500; letter-spacing: 0.02em; color: #FFFFFF; background: #0B1B32; padding: 16px 36px; border-radius: 2px; text-decoration: none; transition: background-color 0.25s ease, color 0.25s ease; }
        .wa-cta-btn:hover { background: #B89460; color: #0B1B32; }
        @media (max-width: 820px) {
          .wa-row { grid-template-columns: 1fr !important; min-height: 0 !important; }
          .wa-row .wa-row-media { order: -1 !important; min-height: 56vw !important; }
          .wa-row .wa-row-text { order: 0 !important; padding-inline: clamp(24px, 6vw, 80px) !important; padding-block: 56px !important; }
          .wa-compare { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .wa-stats { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
