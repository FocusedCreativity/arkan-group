'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export function FirstConversationSection() {
  const { t, isArabic } = useLang();

  return (
    <section
      style={{
        backgroundColor: '#0B1B32',
        padding: '120px 0',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      aria-labelledby="first-conversation-heading"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          textAlign: isArabic ? 'right' : 'left',
        }}
        className="first-conversation-grid"
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: '#B89460', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B89460',
              }}
            >
              {t.firstConversation.overline}
            </span>
          </div>

          <h2
            id="first-conversation-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}
          >
            {t.firstConversation.headline}
          </h2>

          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '32px',
            }}
          >
            {t.firstConversation.body}
          </p>

          <Link
            href="#contact"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#0B1B32',
              backgroundColor: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '2px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              display: 'inline-block',
              transition: 'opacity 0.2s ease',
            }}
            className="first-conversation-cta"
          >
            {t.firstConversation.cta} {isArabic ? '←' : '→'}
          </Link>
        </div>

        <div>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#B89460',
              marginBottom: '24px',
            }}
          >
            {t.firstConversation.captureLabel}
          </p>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px 32px',
            }}
            className="capture-list"
          >
            {t.firstConversation.captureItems.map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#B89460', fontSize: '12px' }}>●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .first-conversation-cta:hover {
          opacity: 0.9;
        }
        @media (max-width: 768px) {
          .first-conversation-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .capture-list {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
