'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function GovernancePage() {
  const { t, isArabic } = useLang();
  const g = t.governancePage;
  const align = isArabic ? 'right' : 'left';
  const justify = isArabic ? 'flex-end' : 'flex-start';

  const overline = (label: string, light = false) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: justify }}>
      <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
      <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: light ? '#D4B07A' : '#B89460' }}>{label}</span>
    </div>
  );

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1900&q=80"
        eyebrow={g.hero.overline}
        headline={g.hero.headline}
        subheader={g.hero.subtitle}
        isArabic={isArabic}
      />

      {/* Lead */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 10vw, 130px) 0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: align }}>
          <div style={{ width: '48px', height: '2px', background: '#B89460', marginBottom: '32px', marginInlineStart: isArabic ? 'auto' : 0 }} />
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#0B1B32', margin: 0 }}>{g.lead}</p>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ backgroundColor: '#EDE9E1', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          {overline(g.pillarsOverline)}
          <div className="gov-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
            {g.pillars.map((p, i) => (
              <div key={p.title} style={{ background: '#FFFFFF', border: '1px solid #D4CFC7', borderRadius: '4px', padding: 'clamp(26px, 3vw, 36px)', textAlign: align }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#B89460', marginBottom: '18px' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0B1B32', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards / frameworks (navy) */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div className="gov-frameworks" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start', textAlign: align }}>
          <div>
            {overline(g.frameworksOverline, true)}
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 16px' }}>{g.frameworksTitle}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '420px', marginInlineStart: isArabic ? 'auto' : 0 }}>{g.frameworksBody}</p>
          </div>
          <div style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
            {g.frameworks.map((f) => (
              <div key={f.name} style={{ background: '#0B1B32', padding: 'clamp(22px, 2.6vw, 30px)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px', alignItems: 'baseline' }}>
                <span style={{ color: '#B89460', fontSize: '14px' }}>✓</span>
                <div>
                  <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px' }}>{f.name}</h3>
                  <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}>{g.ctaHeadline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '17px', lineHeight: 1.7, color: '#6B7280', margin: '0 auto 32px', maxWidth: '540px' }}>{g.ctaBody}</p>
          <Link href="/contact" className="gov-cta-btn">{g.ctaButton} {isArabic ? '←' : '→'}</Link>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12.5px', lineHeight: 1.6, color: '#9CA3AF', margin: '32px auto 0', maxWidth: '520px' }}>{g.note}</p>
        </div>
      </section>

      <style>{`
        .gov-cta-btn { display: inline-block; font-family: Inter, system-ui, sans-serif; font-size: 15px; font-weight: 500; letter-spacing: 0.02em; color: #FFFFFF; background: #0B1B32; padding: 16px 36px; border-radius: 2px; text-decoration: none; transition: background-color 0.25s ease, color 0.25s ease; }
        .gov-cta-btn:hover { background: #B89460; color: #0B1B32; }
        @media (max-width: 900px) {
          .gov-grid { grid-template-columns: 1fr !important; }
          .gov-frameworks { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
