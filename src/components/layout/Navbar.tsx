'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLang, isArabic, lang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const logoColor = scrolled ? '#0B1B32' : '#FFFFFF';
  const textColor = scrolled ? '#0B1B32' : '#FFFFFF';
  const dividerColor = scrolled ? 'rgba(11,27,50,0.2)' : 'rgba(255,255,255,0.3)';

  const navItems = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.sectors, href: '/sectors' },
    { label: t.nav.whyArkan, href: '/why-arkan' },
    { label: t.nav.insights, href: '/insights' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: scrolled ? '#FFFFFF' : 'transparent', borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', display: 'flex', alignItems: 'center', height: '72px', direction: isArabic ? 'rtl' : 'ltr' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <ArkanIcon />
            <span style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', color: logoColor, transition: 'color 0.3s ease' }}>ARKAN</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', margin: '0 auto' }} className="nav-desktop-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ fontSize: '14px', fontWeight: 400, color: textColor, textDecoration: 'none', transition: 'opacity 0.2s ease', position: 'relative', paddingBottom: '2px', whiteSpace: 'nowrap' }} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }} className="nav-desktop-right">
            <div style={{ width: '1px', height: '20px', backgroundColor: dividerColor, transition: 'background-color 0.3s ease' }} />
            <button onClick={toggleLang} style={{ fontSize: '14px', fontWeight: 400, color: textColor, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s ease', letterSpacing: '0.02em' }}>
              {lang === 'en' ? 'EN / ع' : 'ع / EN'}
            </button>
            <Link href="/#contact" style={{ fontSize: '13px', fontWeight: 500, color: '#FFFFFF', backgroundColor: '#0B1B32', padding: '10px 22px', borderRadius: '2px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }} className="nav-contact-btn">
              {t.nav.bookCall}
            </Link>
          </div>

          <button onClick={() => setMobileOpen(true)} aria-label="Open navigation menu" style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', marginLeft: isArabic ? '0' : 'auto', marginRight: isArabic ? 'auto' : '0' }} className="nav-hamburger">
            {[0, 1, 2].map((i) => <span key={i} style={{ display: 'block', width: '22px', height: '2px', backgroundColor: textColor, borderRadius: '2px' }} />)}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: '#0B1B32', display: 'flex', flexDirection: 'column', padding: '0 clamp(24px, 6vw, 48px)', direction: isArabic ? 'rtl' : 'ltr' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '72px', justifyContent: 'space-between' }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <ArkanIcon />
              <span style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase' }}>ARKAN</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF', padding: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '40px' }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ fontSize: '28px', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.01em' }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button onClick={() => { toggleLang(); setMobileOpen(false); }} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', textAlign: isArabic ? 'right' : 'left', padding: 0 }}>
              {lang === 'en' ? 'EN / ع' : 'ع / EN'}
            </button>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, color: '#0B1B32', backgroundColor: '#FFFFFF', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none', textAlign: 'center' }}>
              {t.nav.bookCall}
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-right { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: currentColor; transition: width 0.25s ease; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { opacity: 0.75; }
        .nav-contact-btn:hover { opacity: 0.85; }
      `}</style>
    </>
  );
}

function ArkanIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0" y="10" width="5" height="16" rx="1" fill="#B89460" />
      <rect x="8" y="6" width="5" height="20" rx="1" fill="#B89460" />
      <rect x="16" y="2" width="5" height="24" rx="1" fill="#B89460" />
    </svg>
  );
}
