'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';
import { ArticleCard } from '@/components/ui/ArticleCard';
import {
  INSIGHTS,
  INSIGHT_CATEGORIES,
  getFeaturedInsights,
  type InsightCategory,
} from '@/lib/insights';

export default function InsightsPage() {
  const { t, isArabic } = useLang();
  const [activeCategory, setActiveCategory] = useState<(InsightCategory | 'All')>('All');

  const featured = getFeaturedInsights();
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return INSIGHTS;
    return INSIGHTS.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  const latestArticles = filteredArticles.filter((article) => !article.featured);

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1800&q=80"
        eyebrow={t.insightsPage.hero.overline}
        headline={t.insightsPage.hero.headline}
        subheader={t.insightsPage.hero.subtitle}
        align="center"
      />

      <section className="bg-white" style={{ padding: '100px 0 60px' }}>
        <div className="container">
          <h2 style={{ marginBottom: '40px', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            {t.insightsPage.featuredTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {featured.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                readLabel={t.insightsPage.read}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream" style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            {INSIGHT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '10px 18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: activeCategory === category ? '1px solid #0B1B32' : '1px solid #D4CFC7',
                  background: activeCategory === category ? '#0B1B32' : '#FFFFFF',
                  color: activeCategory === category ? '#FFFFFF' : '#0B1B32',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <h2 style={{ marginBottom: '40px', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            {t.insightsPage.latestTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                readLabel={t.insightsPage.read}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy section--dark" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#FFFFFF', marginBottom: '12px' }}>{t.insightsPage.cta.headline}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
            {t.insightsPage.cta.subtitle}
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#B89460',
              color: '#0B1B32',
              padding: '16px 32px',
              fontWeight: 600,
            }}
          >
            {t.insightsPage.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
