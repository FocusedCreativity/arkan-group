import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { INSIGHTS, getInsightBySlug, getRelatedInsights } from '@/lib/insights';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return { title: 'Insight Not Found' };
  return { title: `${article.title} | Arkan Insights`, description: article.excerpt };
}

const FONT = 'Inter, system-ui, sans-serif';

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const related = getRelatedInsights(article.relatedSlugs);

  return (
    <article>
      {/* Hero */}
      <header style={{ position: 'relative', minHeight: '64vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image src={article.image} alt={article.title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,50,0.96) 0%, rgba(11,27,50,0.55) 45%, rgba(11,27,50,0.2) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', paddingTop: '160px', paddingBottom: 'clamp(48px, 7vh, 80px)' }}>
          <Link href="/insights" style={{ fontFamily: FONT, fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
            ← Insights
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0B1B32', background: '#B89460', padding: '6px 14px', borderRadius: '999px' }}>{article.category}</span>
            <span style={{ fontFamily: FONT, fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{article.date} · {article.readMins} min read</span>
          </div>
          <h1 style={{ fontFamily: FONT, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: '#FFFFFF', maxWidth: '820px', margin: 0, textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}>{article.title}</h1>
        </div>
      </header>

      {/* Body */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
          <p style={{ fontFamily: FONT, fontSize: 'clamp(19px, 2.4vw, 22px)', lineHeight: 1.6, color: '#0B1B32', fontWeight: 500, margin: '0 0 8px' }}>{article.intro}</p>

          {article.keyStats && article.keyStats.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${article.keyStats.length}, 1fr)`, gap: '1px', background: '#E5E7EB', border: '1px solid #E5E7EB', borderRadius: '6px', overflow: 'hidden', margin: '40px 0 8px' }}>
              {article.keyStats.map((s) => (
                <div key={s.label} style={{ background: '#F8F7F5', padding: '24px 18px', textAlign: 'center' }}>
                  <div style={{ fontFamily: FONT, fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: FONT, fontSize: '12.5px', color: '#6B7280', marginTop: '8px', lineHeight: 1.35 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '48px' }}>
            {article.sections.map((section) => (
              <div key={section.heading} style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: FONT, fontSize: 'clamp(1.4rem, 2.6vw, 1.75rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.01em', margin: '0 0 12px' }}>{section.heading}</h2>
                <p style={{ fontFamily: FONT, fontSize: '17px', lineHeight: 1.85, color: '#374151', margin: 0 }}>{section.body}</p>
              </div>
            ))}
          </div>

          {article.sources && article.sources.length > 0 && (
            <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid #E5E7EB' }}>
              <h3 style={{ fontFamily: FONT, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B89460', margin: '0 0 14px' }}>Sources</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '8px' }}>
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: FONT, fontSize: '14px', color: '#6B7280', textDecoration: 'none', borderBottom: '1px solid #D4CFC7', paddingBottom: '1px' }}>{s.label} ↗</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B1B32', padding: 'clamp(56px, 7vw, 88px) 0' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONT, fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 24px' }}>
            Turn this into a plan for your company.
          </h2>
          <Link href="/contact" style={{ display: 'inline-block', fontFamily: FONT, fontSize: '15px', fontWeight: 500, color: '#0B1B32', background: '#B89460', padding: '16px 36px', borderRadius: '2px', textDecoration: 'none' }}>
            Book a Libya Market Entry Call →
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 8vw, 100px) 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }}>
            <h2 style={{ fontFamily: FONT, fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 700, color: '#0B1B32', letterSpacing: '-0.02em', marginBottom: '40px' }}>Related insights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} readLabel="Read article" />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
