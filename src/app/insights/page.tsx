'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';
import { ArticleCard } from '@/components/ui/ArticleCard';
import {
  INSIGHTS,
  INSIGHT_CATEGORIES,
  INSIGHT_STATS,
  RESOURCES,
  getFeaturedInsights,
  type InsightCategory,
} from '@/lib/insights';

export default function InsightsPage() {
  const { t, isArabic } = useLang();
  const ip = t.insightsPage;
  const [activeCategory, setActiveCategory] = useState<(InsightCategory | 'All')>('All');

  const featured = getFeaturedInsights();
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return INSIGHTS;
    return INSIGHTS.filter((article) => article.category === activeCategory);
  }, [activeCategory]);
  const latestArticles = filteredArticles.filter((article) => !article.featured);
  const align = isArabic ? 'right' : 'left';

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1900&q=80"
        eyebrow={ip.hero.overline}
        headline={ip.hero.headline}
        subheader={ip.hero.subtitle}
        align="center"
        isArabic={isArabic}
      />

      {/* Libya by the numbers — story in stat cards */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(72px, 9vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px', textAlign: align, marginInlineStart: isArabic ? 'auto' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4B07A' }}>{ip.statsOverline}</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 14px' }}>{ip.statsTitle}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{ip.statsSubtitle}</p>
          </div>

          <div className="ins-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
            {INSIGHT_STATS.map((s) => (
              <div key={s.label} style={{ background: '#0B1B32', padding: 'clamp(28px, 3vw, 40px)', textAlign: align }}>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', fontWeight: 600, color: '#D4B07A', margin: '14px 0 8px' }}>{s.label}</div>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.66)', margin: '0 0 12px' }}>{s.context}</p>
                <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1px' }}>{s.source} ↗</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 110px) 0 60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', marginBottom: '40px', textAlign: align }}>{ip.featuredTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} readLabel={ip.read} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Filter + latest */}
      <section style={{ backgroundColor: '#EDE9E1', padding: '60px 0 clamp(72px, 9vw, 110px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
            {INSIGHT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="ins-chip"
                style={{
                  border: activeCategory === category ? '1px solid #0B1B32' : '1px solid #D4CFC7',
                  background: activeCategory === category ? '#0B1B32' : 'transparent',
                  color: activeCategory === category ? '#FFFFFF' : '#0B1B32',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', marginBottom: '40px', textAlign: align }}>{ip.latestTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} readLabel={ip.read} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '720px', marginBottom: '48px', textAlign: align, marginInlineStart: isArabic ? 'auto' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B89460' }}>{ip.resourcesOverline}</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', margin: '0 0 14px' }}>{ip.resourcesTitle}</h2>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: '#6B7280', margin: 0 }}>{ip.resourcesSubtitle}</p>
          </div>

          <div className="ins-res-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {RESOURCES.map((r) => (
              <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" download className="ins-res-card" style={{ textAlign: align }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#B89460', border: '1px solid rgba(184,148,96,0.4)', borderRadius: '999px', padding: '5px 12px' }}>{r.format}</span>
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#9CA3AF' }}>{r.size}</span>
                </div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '19px', fontWeight: 700, color: '#0B1B32', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{r.title}</h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14.5px', lineHeight: 1.7, color: '#6B7280', margin: '0 0 24px', flex: 1 }}>{r.desc}</p>
                <span className="ins-res-cta" style={{ justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
                  {ip.download}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '12px' }}>{ip.cta.headline}</h2>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', marginBottom: '28px' }}>{ip.cta.subtitle}</p>
          <Link href="/contact" className="ins-cta-btn">{ip.cta.button} {isArabic ? '←' : '→'}</Link>
        </div>
      </section>

      <style>{`
        .ins-chip { padding: 9px 18px; font-family: Inter, system-ui, sans-serif; font-size: 13px; font-weight: 600; border-radius: 999px; cursor: pointer; transition: all 0.2s ease; }
        .ins-chip:hover { border-color: #B89460 !important; }
        .ins-res-card { display: flex; flex-direction: column; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; padding: clamp(26px, 3vw, 36px); text-decoration: none; transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; }
        .ins-res-card:hover { border-color: rgba(184,148,96,0.5); box-shadow: 0 24px 50px rgba(11,27,50,0.1); transform: translateY(-4px); }
        .ins-res-cta { display: inline-flex; align-items: center; gap: 8px; font-family: Inter, system-ui, sans-serif; font-size: 14px; font-weight: 600; color: #0B1B32; margin-top: auto; transition: color 0.25s ease, gap 0.25s ease; }
        .ins-res-card:hover .ins-res-cta { color: #B89460; gap: 12px; }
        .ins-cta-btn { display: inline-block; font-family: Inter, system-ui, sans-serif; font-size: 15px; font-weight: 500; letter-spacing: 0.02em; color: #0B1B32; background: #B89460; padding: 16px 36px; border-radius: 2px; text-decoration: none; transition: background-color 0.25s ease; }
        .ins-cta-btn:hover { background: #D4B07A; }
        @media (max-width: 820px) { .ins-stats-grid { grid-template-columns: 1fr 1fr !important; } .ins-res-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 520px) { .ins-stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
