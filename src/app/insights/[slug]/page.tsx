import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleCard } from '@/components/ui/ArticleCard';
import {
  INSIGHTS,
  getInsightBySlug,
  getRelatedInsights,
} from '@/lib/insights';

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

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const related = getRelatedInsights(article.relatedSlugs);

  return (
    <article>
      <header style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11,27,50,0.95) 0%, rgba(11,27,50,0.4) 100%)',
          }}
        />
        <div
          className="container"
          style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '60px' }}
        >
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#B89460',
              textTransform: 'uppercase',
            }}
          >
            {article.category}
          </span>
          <time
            style={{
              display: 'block',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              margin: '12px 0',
            }}
          >
            {article.date}
          </time>
          <h1 style={{ color: '#FFFFFF', maxWidth: '800px', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {article.title}
          </h1>
        </div>
      </header>

      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ fontSize: '20px', lineHeight: 1.8, color: '#0B1B32', marginBottom: '48px' }}>
            {article.intro}
          </p>
          {article.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>{section.heading}</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#0B1B32',
              color: '#FFFFFF',
              padding: '16px 32px',
              fontWeight: 600,
            }}
          >
            Book a Libya Market Entry Call
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white" style={{ padding: '80px 0 100px' }}>
          <div className="container">
            <h2 style={{ marginBottom: '40px' }}>Related insights</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
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
