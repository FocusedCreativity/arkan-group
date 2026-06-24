'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function ProjectsPage() {
  const { t, isArabic } = useLang();

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
        eyebrow={t.experiencePage.hero.overline}
        headline={t.experiencePage.hero.headline}
        subheader={t.experiencePage.hero.subtitle}
      />

      <section className="bg-cream" style={{ padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
            }}
          >
            {t.experiencePage.cards.map((card) => (
              <article
                key={card.title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <p
                    style={{
                      color: '#B89460',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {card.sector}
                  </p>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{card.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
