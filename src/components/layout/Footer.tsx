'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

function ArkanIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0"  y="10" width="5" height="16" rx="1" fill="#FFFFFF" />
      <rect x="8"  y="6"  width="5" height="20" rx="1" fill="#FFFFFF" />
      <rect x="16" y="2"  width="5" height="24" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

export function Footer() {
  const { t, isArabic } = useLang();

  const groupLinks = t.footer.groupLinks;
  const groupHrefs = ['/about', '/services', '/sectors', '/why-arkan'];

  const companyLinks = t.footer.companyLinks;
  const companyHrefs = ['/insights', '/contact', '/impact', '/contact'];

  return (
    <footer style={{ backgroundColor: '#0B1B32', color: 'rgba(255,255,255,0.7)', direction: isArabic ? 'rtl' : 'ltr' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px clamp(24px, 6vw, 80px) 60px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
          }}
          className="footer-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <ArkanIcon />
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                ARKAN
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '220px',
              }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B89460',
                marginBottom: '20px',
              }}
            >
              {t.footer.group}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              {groupLinks.map((label, idx) => (
                <li key={label}>
                  <Link
                    href={groupHrefs[idx]}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B89460',
                marginBottom: '20px',
              }}
            >
              {t.footer.company}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              {companyLinks.map((label, idx) => (
                <li key={label}>
                  <Link
                    href={companyHrefs[idx]}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#B89460',
                marginBottom: '20px',
              }}
            >
              {t.footer.contact}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: t.footer.address },
                { label: t.footer.email, href: `mailto:${t.footer.email}` },
                { label: t.footer.phone, href: `tel:${t.footer.phone.replace(/\s+/g, '')}` },
              ].map(({ label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      direction: 'ltr',
                      textAlign: isArabic ? 'right' : 'left',
                    }}
                    className="footer-link"
                  >
                    {label}
                  </a>
                ) : (
                  <span
                    key={label}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '24px clamp(24px, 6vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.45)',
            margin: 0,
            lineHeight: 1,
            direction: 'ltr',
          }}
        >
          {t.footer.copyright}
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: t.footer.privacy, href: '/privacy' },
            { label: t.footer.terms, href: '/terms' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              className="footer-link"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #FFFFFF !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
