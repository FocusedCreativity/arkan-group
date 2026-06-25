'use client';

import { SectorPageHero } from '@/components/sections/SectorPageHero';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { LeadForm } from '@/components/sections/LeadForm';
import { useLang } from '@/lib/LangContext';
import { YOUTUBE } from '@/lib/constants';
import { SECTOR_PAGES, type SectorSlug } from '@/lib/sectorPages';

export function SectorPageTemplate({ slug }: { slug: SectorSlug }) {
  const { lang, isArabic } = useLang();
  const c = SECTOR_PAGES[slug][lang];
  const watchUrl = `https://www.youtube.com/watch?v=${YOUTUBE.id}`;
  const align = isArabic ? 'right' : 'left';
  const justify = isArabic ? 'flex-end' : 'flex-start';

  const overlineRow = (label: string, light = false) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: justify }}>
      <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
      <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: light ? '#D4B07A' : '#B89460' }}>{label}</span>
    </div>
  );

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <SectorPageHero
        badge={c.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        cta={c.cta.button}
        capabilities={c.hero.capabilities}
        image={c.hero.image}
        isArabic={isArabic}
      />

      {/* Positioning */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div className="sec-pos" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start', textAlign: align }}>
          <div>
            {overlineRow(c.positioning.overline)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: 0 }}>{c.positioning.headline}</h2>
          </div>
          <div>
            {c.positioning.body.map((p, i) => (
              <p key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', lineHeight: 1.8, color: '#6B7280', margin: i > 0 ? '18px 0 0' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: '#EDE9E1', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px', textAlign: align, marginInlineEnd: isArabic ? 0 : 'auto', marginInlineStart: isArabic ? 'auto' : 0 }}>
            {overlineRow(c.services.overline)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}>{c.services.headline}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{c.services.intro}</p>
          </div>
          <div className="sec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {c.services.items.map((s, i) => (
              <div key={s.title} style={{ background: '#FFFFFF', border: '1px solid #D4CFC7', borderRadius: '4px', padding: 'clamp(26px, 3vw, 36px)', textAlign: align }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#B89460', marginBottom: '18px' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0B1B32', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed video band */}
      <section style={{ position: 'relative', minHeight: '78vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <YouTubeBackground videoId={YOUTUBE.id} posterSrc={c.videoBand.poster} alt="" start={YOUTUBE.start} isArabic={isArabic} overlayOpacity={0.5} lazy />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(11,27,50,0.9) 0%, rgba(11,27,50,0.3) 42%, transparent 72%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', paddingBottom: 'clamp(56px, 8vh, 96px)', textAlign: align }}>
          {overlineRow(c.videoBand.overline, true)}
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#FFFFFF', maxWidth: '780px', margin: isArabic ? '0 0 0 auto' : 0, textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}>{c.videoBand.headline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '600px', marginTop: '20px', marginInlineStart: isArabic ? 'auto' : 0 }}>{c.videoBand.body}</p>
          <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="circle-cta" style={{ marginTop: '32px', justifyContent: justify }}>
            <span className="circle-cta__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="#0B1B32" /></svg>
            </span>
            <span className="circle-cta__label" style={{ color: '#FFFFFF' }}>{c.videoBand.watch}</span>
          </a>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ marginBottom: '56px', maxWidth: '640px', textAlign: align, marginInlineStart: isArabic ? 'auto' : 0 }}>
            {overlineRow(c.process.overline)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: 0 }}>{c.process.headline}</h2>
          </div>
          <div className="sec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {c.process.steps.map((s, i) => (
              <div key={s.title} style={{ borderTop: '2px solid #B89460', paddingTop: '20px', textAlign: align }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#B89460', marginBottom: '10px' }}>{isArabic ? `خطوة ${i + 1}` : `STEP ${i + 1}`}</div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '19px', fontWeight: 700, color: '#0B1B32', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arkan (navy) */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div className="sec-why" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start', textAlign: align }}>
          <div>
            {overlineRow(c.why.overline, true)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}>{c.why.headline}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 40px' }} className="sec-why-points">
            {c.why.points.map((p) => (
              <div key={p.title}>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: justify }}>
                  <span style={{ color: '#B89460' }}>—</span>{p.title}
                </h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#EDE9E1', padding: 'clamp(48px, 6vw, 72px) 0' }}>
        <div className="sec-stats" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {c.stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#6B7280', marginTop: '10px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact band */}
      <section id="contact" style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 104px) 0' }}>
        <div className="sec-contact" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: '0.85fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start', textAlign: align }}>
          <div>
            {overlineRow(c.cta.overline, true)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 18px' }}>{c.cta.headline}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', margin: '0 0 32px', maxWidth: '440px', marginInlineStart: isArabic ? 'auto' : 0 }}>{c.cta.body}</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}>
              {c.cta.points.map((p) => (
                <li key={p} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: justify }}>
                  <span style={{ color: '#B89460', fontSize: '11px' }}>●</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div><LeadForm embedded /></div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sec-pos { grid-template-columns: 1fr !important; gap: 28px !important; }
          .sec-why { grid-template-columns: 1fr !important; }
          .sec-contact { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 820px) {
          .sec-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .sec-grid { grid-template-columns: 1fr !important; }
          .sec-why-points { grid-template-columns: 1fr !important; }
          .sec-stats { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
