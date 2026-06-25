'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';
import { YouTubeBackground } from '@/components/ui/YouTubeBackground';
import { YOUTUBE, FALLBACK_IMAGES } from '@/lib/constants';

const EDGE = 'max(clamp(24px, 6vw, 80px), calc((100vw - 1280px) / 2))';

export default function AboutPage() {
  const { t, isArabic } = useLang();
  const a = t.aboutPage;

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage={FALLBACK_IMAGES.whyArkan[0]}
        eyebrow={a.hero.overline}
        headline={a.hero.headline}
        subheader={a.hero.subtitle}
        isArabic={isArabic}
      />

      {/* Lead statement */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 10vw, 130px) 0', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: isArabic ? 'right' : 'left' }}>
          <div style={{ width: '48px', height: '2px', background: '#B89460', marginBottom: '32px', marginInlineStart: isArabic ? 'auto' : 0 }} />
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#0B1B32', margin: 0 }}>
            {a.lead}
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(56px, 7vw, 80px) 0', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div className="about-stats" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {a.statsList.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#D4B07A', marginTop: '12px', letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach — text + full-bleed video */}
      <section style={{ backgroundColor: '#FFFFFF', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div className="about-approach" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', minHeight: 'clamp(520px, 76vh, 800px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingInlineStart: EDGE, paddingInlineEnd: 'clamp(24px, 5vw, 72px)', paddingBlock: 'clamp(64px, 9vh, 110px)', textAlign: isArabic ? 'right' : 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{a.approach.overline}</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2rem, 3.6vw, 3rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 24px', maxWidth: '520px' }}>{a.approach.headline}</h2>
            <div style={{ maxWidth: '520px' }}>
              {a.approach.body.split('\n\n').map((p, i) => (
                <p key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#6B7280', margin: i > 0 ? '16px 0 0' : 0 }}>{p}</p>
              ))}
            </div>
          </div>
          <div className="about-approach__media" style={{ position: 'relative', overflow: 'hidden', background: '#0B1B32', minHeight: '320px' }}>
            <YouTubeBackground videoId={YOUTUBE.id} posterSrc={FALLBACK_IMAGES.whyArkan[2]} alt="" start={YOUTUBE.start} isArabic={isArabic} overlayOpacity={0.12} lazy />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#EDE9E1', padding: 'clamp(72px, 9vw, 120px) 0', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{a.valuesOverline}</span>
          </div>
          <div className="about-values" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', border: '1px solid #D4CFC7', borderRadius: '4px', overflow: 'hidden' }}>
            {a.values.map((v, i) => (
              <div key={v.title} style={{ background: '#FFFFFF', padding: 'clamp(28px, 3.5vw, 48px)', textAlign: isArabic ? 'right' : 'left' }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#B89460', marginBottom: '20px' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#0B1B32', margin: '0 0 12px', letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#6B7280', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 120px) 0', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div className="about-mv" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 56px)', textAlign: isArabic ? 'right' : 'left' }}>
          {[a.mission, a.vision].map((card) => (
            <div key={card.overline}>
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>{card.overline}</span>
              <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '16px 0 16px' }}>{card.headline}</h2>
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '480px', marginInlineStart: isArabic ? 'auto' : 0 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 120px) 0', direction: isArabic ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}>{a.ctaHeadline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', lineHeight: 1.7, color: '#6B7280', margin: '0 auto 32px', maxWidth: '560px' }}>{a.ctaBody}</p>
          <Link href="/contact" className="about-cta-btn">{a.ctaButton} {isArabic ? '←' : '→'}</Link>
        </div>
      </section>

      <style>{`
        .about-cta-btn {
          display: inline-block;
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px; font-weight: 500; letter-spacing: 0.02em;
          color: #FFFFFF; background: #0B1B32;
          padding: 16px 36px; border-radius: 2px; text-decoration: none;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .about-cta-btn:hover { background: #B89460; color: #0B1B32; }
        @media (max-width: 900px) {
          .about-approach { grid-template-columns: 1fr !important; }
          .about-approach__media { order: -1; min-height: 56vw !important; }
          .about-mv { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 760px) {
          .about-stats { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-values { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
