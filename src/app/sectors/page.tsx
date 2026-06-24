'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function SectorsPage() {
  const { t, isArabic } = useLang();

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1800&q=80"
        eyebrow={t.sectorsOverviewPage.hero.overline}
        headline={t.sectorsOverviewPage.hero.headline}
        subheader={t.sectorsOverviewPage.hero.subtitle}
      />

      <section className="bg-cream" style={{ padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {t.sectorsOverviewPage.tiles.map((tile) => (
              <article
                key={tile.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="sector-tile"
              >
                <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover' }}
                    className="sector-tile-image"
                  />
                </div>
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>{tile.title}</h3>
                  <p style={{ fontSize: '15px', marginBottom: '20px' }}>{tile.shortDesc}</p>
                  <ul style={{ listStyle: 'none', marginBottom: '24px', flex: 1 }}>
                    {tile.services.map((service) => (
                      <li
                        key={service}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: '#6B7280',
                          marginBottom: '8px',
                        }}
                      >
                        <span style={{ color: '#B89460' }}>✦</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tile.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0B1B32',
                      fontWeight: 600,
                      fontSize: '14px',
                      borderTop: '1px solid #E5E7EB',
                      paddingTop: '20px',
                    }}
                    className="sector-tile-cta"
                  >
                    {tile.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
