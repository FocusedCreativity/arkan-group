'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function WhyArkanPage() {
  const { t, isArabic } = useLang();

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=80"
        eyebrow={t.whyArkanPage.hero.overline}
        headline={t.whyArkanPage.hero.headline}
        subheader={t.whyArkanPage.hero.subtitle}
      />

      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
            {t.whyArkanPage.sections.map((section, index) => {
              const reversed = index % 2 === 1;
              return (
                <div
                  key={section.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ order: reversed ? 2 : 1, position: 'relative', aspectRatio: '4/3' }}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ order: reversed ? 1 : 2 }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        color: '#B89460',
                        textTransform: 'uppercase',
                      }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h2 style={{ margin: '12px 0 16px', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                      {section.title}
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: 1.8 }}>{section.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy section--dark" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            {t.whyArkanPage.cta}
          </h2>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#B89460',
              color: '#0B1B32',
              padding: '16px 32px',
              fontWeight: 600,
              fontSize: '15px',
            }}
          >
            {t.whyArkanPage.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
