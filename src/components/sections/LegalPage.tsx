'use client';

import { useLang } from '@/lib/LangContext';

interface LegalContent {
  hero: { overline: string; headline: string; updated: string };
  intro: string;
  sections: { heading: string; body: string }[];
  note: string;
}

export function LegalPage({ content }: { content: LegalContent }) {
  const { isArabic } = useLang();
  const c = content;
  const align = isArabic ? 'right' : 'left';
  const FONT = 'Inter, system-ui, sans-serif';

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      {/* Hero (compact, navy) */}
      <header style={{ backgroundColor: '#0B1B32', padding: 'clamp(140px, 18vh, 200px) 0 clamp(56px, 7vw, 80px)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: align }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span style={{ fontFamily: FONT, fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>{c.hero.overline}</span>
          </div>
          <h1 style={{ fontFamily: FONT, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#FFFFFF', margin: '0 0 16px' }}>{c.hero.headline}</h1>
          <p style={{ fontFamily: FONT, fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{c.hero.updated}</p>
        </div>
      </header>

      {/* Body */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vw, 96px) 0' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: align }}>
          <p style={{ fontFamily: FONT, fontSize: 'clamp(18px, 2.2vw, 20px)', lineHeight: 1.7, color: '#0B1B32', fontWeight: 500, margin: '0 0 48px' }}>{c.intro}</p>

          {c.sections.map((s, i) => (
            <div key={s.heading} style={{ marginBottom: '36px' }}>
              <h2 style={{ fontFamily: FONT, fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.01em', margin: '0 0 12px', display: 'flex', alignItems: 'baseline', gap: '12px', justifyContent: justifyStart(isArabic) }}>
                <span style={{ color: '#B89460', fontSize: '14px', fontWeight: 600 }}>{(i + 1).toString().padStart(2, '0')}</span>
                {s.heading}
              </h2>
              <p style={{ fontFamily: FONT, fontSize: '16.5px', lineHeight: 1.85, color: '#374151', margin: 0 }}>{s.body}</p>
            </div>
          ))}

          <p style={{ fontFamily: FONT, fontSize: '13px', lineHeight: 1.7, color: '#9CA3AF', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>{c.note}</p>
        </div>
      </section>
    </div>
  );
}

function justifyStart(isArabic: boolean) {
  return isArabic ? 'flex-end' : 'flex-start';
}
