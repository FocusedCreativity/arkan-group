'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { InsightArticle } from '@/lib/insights';

interface ArticleCardProps {
  article: InsightArticle;
  readLabel: string;
  variant?: 'default' | 'featured';
}

export function ArticleCard({ article, readLabel, variant = 'default' }: ArticleCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Link href={`/insights/${article.slug}`} className="article-card group">
      <div className={`article-card__inner ${isFeatured ? 'article-card__inner--featured' : ''}`}>
        <div
          className={`article-card__media ${isFeatured ? 'article-card__media--featured' : ''}`}
          style={{
            position: 'relative',
            aspectRatio: isFeatured ? '16 / 9' : '16 / 10',
            overflow: 'hidden',
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={isFeatured ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 100vw, 400px'}
            style={{ objectFit: 'cover' }}
            className="article-card__image"
          />
          <span className="article-card__category">{article.category}</span>
        </div>
        <div className="article-card__body">
          <time className="article-card__date">{article.date}</time>
          <h3 className={`article-card__title ${isFeatured ? 'article-card__title--featured' : ''}`}>
            {article.title}
          </h3>
          {article.excerpt && (
            <p className="article-card__excerpt">{article.excerpt}</p>
          )}
          <span className="article-card__read">
            {readLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
