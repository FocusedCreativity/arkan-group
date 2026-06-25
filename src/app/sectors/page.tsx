'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';
import { HOMEPAGE_SECTOR_LINKS, FALLBACK_IMAGES } from '@/lib/constants';
import { SECTOR_PAGES, type SectorSlug } from '@/lib/sectorPages';

const SLUG_ORDER: SectorSlug[] = ['oil-gas', 'construction', 'manpower', 'trading', 'education', 'media'];

export default function SectorsPage() {
  const { t, lang, isArabic } = useLang();
  const align = isArabic ? 'right' : 'left';

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1900&q=80"
        eyebrow={t.sectorsOverviewPage.hero.overline}
        headline={t.sectorsOverviewPage.hero.headline}
        subheader={t.sectorsOverviewPage.hero.subtitle}
        isArabic={isArabic}
      />

      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px', textAlign: align, marginInlineStart: isArabic ? 'auto' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{t.sectors.overline}</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0B1B32', margin: '0 0 16px' }}>{t.sectors.headline}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{t.sectors.subtitle}</p>
          </div>

          <div className="sectors-overview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {t.sectors.items.map((item, i) => {
              const slug = SLUG_ORDER[i];
              const img = SECTOR_PAGES[slug]?.[lang].hero.image ?? FALLBACK_IMAGES.hero;
              const href = HOMEPAGE_SECTOR_LINKS[i];
              return (
                <Link key={item.num} href={href} className="sector-ov-card" style={{ textAlign: align }}>
                  <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden' }}>
                    <Image src={img} alt={item.title} fill sizes="(max-width: 820px) 100vw, 400px" style={{ objectFit: 'cover' }} className="sector-ov-img" />
                    <div className="sector-ov-scrim" />
                    <span className="sector-ov-num">{item.num}</span>
                  </div>
                  <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '20px', fontWeight: 700, color: '#0B1B32', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.65, color: '#6B7280', margin: '0 0 20px', flex: 1 }}>{item.desc}</p>
                    <span className="sector-ov-cta">{item.cta} {isArabic ? '←' : '→'}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 16px' }}>
            {isArabic ? 'لست متأكدًا من القطاع الذي تبدأ به؟' : 'Not sure which sector to start with?'}
          </h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', margin: '0 auto 32px', maxWidth: '520px' }}>
            {isArabic ? 'ابدأ بمكالمة دخول السوق وسنوجّهك إلى الدعم المناسب لهدفك في ليبيا.' : 'Start with a Market Entry Call and we’ll point you to the right support for your goal in Libya.'}
          </p>
          <Link href="/contact" className="sectors-ov-btn">
            {isArabic ? 'احجز مكالمة دخول السوق' : 'Book a Market Entry Call'} {isArabic ? '←' : '→'}
          </Link>
        </div>
      </section>

      <style>{`
        .sector-ov-card {
          display: flex; flex-direction: column;
          background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 4px;
          overflow: hidden; text-decoration: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .sector-ov-card:hover { border-color: rgba(184,148,96,0.5); box-shadow: 0 24px 50px rgba(11,27,50,0.12); transform: translateY(-4px); }
        .sector-ov-img { transition: transform 0.6s cubic-bezier(0.2,0.8,0.2,1); }
        .sector-ov-card:hover .sector-ov-img { transform: scale(1.06); }
        .sector-ov-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,27,50,0.45) 0%, rgba(11,27,50,0.05) 50%); }
        .sector-ov-num { position: absolute; top: 16px; inset-inline-start: 16px; font-family: Inter, system-ui, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; color: #FFFFFF; background: rgba(11,27,50,0.55); backdrop-filter: blur(6px); padding: 6px 12px; border-radius: 999px; }
        .sector-ov-cta { margin-top: auto; font-family: Inter, system-ui, sans-serif; font-size: 14px; font-weight: 600; color: #0B1B32; border-top: 1px solid #E5E7EB; padding-top: 18px; transition: color 0.25s ease; }
        .sector-ov-card:hover .sector-ov-cta { color: #B89460; }
        .sectors-ov-btn { display: inline-block; font-family: Inter, system-ui, sans-serif; font-size: 15px; font-weight: 500; letter-spacing: 0.02em; color: #0B1B32; background: #B89460; padding: 16px 36px; border-radius: 2px; text-decoration: none; transition: background-color 0.25s ease; }
        .sectors-ov-btn:hover { background: #D4B07A; }
        @media (max-width: 820px) { .sectors-overview-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .sectors-overview-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
