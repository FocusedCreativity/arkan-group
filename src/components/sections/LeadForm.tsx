'use client';

import { useState, FormEvent, Suspense } from 'react';
import { trackFormSubmit, getStoredUTM } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/lib/LangContext';

export const LeadFormInner = ({ embedded = false }: { embedded?: boolean }) => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [utmParams] = useState<Record<string, string>>(() =>
    typeof window !== 'undefined' ? getStoredUTM() : {}
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const sector = (formData.get('sector') as string) || 'Unknown';
    const country = (formData.get('country') as string) || 'Unknown';

    trackFormSubmit(sector, country);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '24px', maxWidth: '600px', margin: '0 auto', background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', marginBottom: '2rem', boxShadow: '0 0 30px rgba(37, 211, 102, 0.15)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>{t.leadForm.successTitle}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>{t.leadForm.successMessage}</p>
      </div>
    );
  }

  const f = t.leadForm.fields;
  const p = t.leadForm.placeholders;
  const s = t.leadForm.sectorOptions;
  const tl = t.leadForm.timelineOptions;

  return (
    <div
      className={embedded ? 'lead-form lead-form--compact' : 'lead-form'}
      style={{
        background: '#FFFFFF',
        padding: embedded ? 'clamp(1.5rem, 3vw, 2.25rem)' : 'clamp(3rem, 6vw, 4.5rem)',
        borderRadius: embedded ? '16px' : '24px',
        maxWidth: embedded ? '100%' : '850px',
        margin: embedded ? 0 : '0 auto',
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: embedded ? '0 24px 60px rgba(11,27,50,0.28)' : '0 24px 48px rgba(0,0,0,0.05)',
      }}
    >
      {!embedded && (
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', textAlign: 'center', fontWeight: 700, color: 'var(--color-navy)' }}>
            {t.leadForm.title}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 3rem' }}>
            {t.leadForm.intro}
          </p>
        </>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 2rem 1.5rem; }
        @media (min-width: 640px) { .form-grid { grid-template-columns: 1fr 1fr; } }
        .form-group { display: flex; flex-direction: column; gap: 0.625rem; }
        .form-group.full-width { grid-column: 1 / -1; }
        .form-label { font-size: 0.9rem; color: var(--color-navy); font-weight: 600; letter-spacing: 0.02em; }
        .form-label span { color: #EF4444; margin-left: 2px; }
        .form-input {
          background: #FAFAFA;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          color: var(--color-text);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        /* Compact (embedded on homepage) */
        .lead-form--compact .form-grid { gap: 1rem 1.1rem; }
        .lead-form--compact .form-group { gap: 0.35rem; }
        .lead-form--compact .form-label { font-size: 0.78rem; }
        .lead-form--compact .form-input { padding: 0.6rem 0.85rem; border-radius: 8px; font-size: 0.9rem; }
        .lead-form--compact .form-input::placeholder { font-size: 0.9rem; }
        .lead-form--compact textarea.form-input { min-height: 64px; }
        .lead-form--compact .mt-6 { margin-top: 0.75rem !important; }
        .form-input:focus {
          outline: none;
          border-color: var(--color-gold);
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.1);
        }
        .form-input::placeholder { color: rgba(0, 0, 0, 0.3); }
        select.form-input option { background: #FFFFFF; color: var(--color-text); }
      `}} />

      <form onSubmit={handleSubmit} className="form-grid">
        {Object.entries(utmParams).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}

        <div className="form-group">
          <label className="form-label" htmlFor="sector">{f.sector} <span>*</span></label>
          <select id="sector" name="sector" className="form-input" required defaultValue="">
            <option value="" disabled>{s.select}</option>
            <option value="All Sectors">{s.all}</option>
            <option value="Oil & Gas">{s.oilGas}</option>
            <option value="Construction">{s.construction}</option>
            <option value="Trading & Distribution">{s.trading}</option>
            <option value="Manpower & Staffing">{s.manpower}</option>
            <option value="Education">{s.education}</option>
            <option value="Marketing Services">{s.marketing}</option>
            <option value="Other">{s.other}</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="country">{f.country} <span>*</span></label>
          <input type="text" id="country" name="country" className="form-input" placeholder={p.country} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="company">{f.company} <span>*</span></label>
          <input type="text" id="company" name="company" className="form-input" placeholder={p.company} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="website">{f.website}</label>
          <input type="url" id="website" name="website" className="form-input" placeholder={p.website} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="name">{f.name} <span>*</span></label>
          <input type="text" id="name" name="name" className="form-input" placeholder={p.name} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="role">{f.role} <span>*</span></label>
          <input type="text" id="role" name="role" className="form-input" placeholder={p.role} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">{f.email} <span>*</span></label>
          <input type="email" id="email" name="email" className="form-input" placeholder={p.email} required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">{f.phone}</label>
          <input type="tel" id="phone" name="phone" className="form-input" placeholder={p.phone} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="timeline">{f.timeline}</label>
          <select id="timeline" name="timeline" className="form-input" defaultValue="Exploring options">
            <option value="Exploring options">{tl.exploring}</option>
            <option value="Within 3 months">{tl.within3}</option>
            <option value="3-6 months">{tl.three6}</option>
            <option value="6-12 months">{tl.six12}</option>
            <option value="12+ months">{tl.twelvePlus}</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="callTime">{f.callTime}</label>
          <input type="text" id="callTime" name="callTime" className="form-input" placeholder={p.callTime} />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="support">{f.support}</label>
          <textarea id="support" name="support" rows={3} className="form-input" placeholder={p.support}></textarea>
        </div>

        <div className="form-group full-width mt-6">
          <Button type="submit" variant="primary" size="lg" fullWidth>
            {t.leadForm.submit}
          </Button>
          <p className="text-center mt-6" style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
            {t.leadForm.privacy}
          </p>
        </div>
      </form>
    </div>
  );
};

export const LeadForm = ({ embedded = false }: { embedded?: boolean }) => {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading form...</div>}>
      <LeadFormInner embedded={embedded} />
    </Suspense>
  );
};
