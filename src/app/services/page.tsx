'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function ServicesPage() {
  const { t, isArabic } = useLang();

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
        eyebrow={t.servicesPage.hero.overline}
        headline={t.servicesPage.hero.headline}
        subheader={t.servicesPage.hero.subtitle}
      />

      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {t.servicesPage.services.map((service, index) => {
              const reversed = index % 2 === 1;
              return (
                <div
                  key={service.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      order: reversed ? 2 : 1,
                    }}
                    className="service-card-media"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
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
                    <h2 style={{ margin: '12px 0 16px', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '28px' }}>
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#0B1B32',
                        color: '#FFFFFF',
                        padding: '14px 28px',
                        fontWeight: 600,
                        fontSize: '15px',
                        transition: 'background 0.3s ease',
                      }}
                      className="service-cta"
                    >
                      {service.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
