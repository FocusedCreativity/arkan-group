'use client';

import { useLang } from '@/lib/LangContext';
import { useState } from 'react';
import { PageVideoHero } from '@/components/ui/PageVideoHero';

export default function ContactPage() {
  const { t, isArabic } = useLang();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <PageVideoHero
        fallbackImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1800&q=80"
        eyebrow={t.contactPage.hero.overline}
        headline={t.contactPage.hero.headline}
        subheader={t.contactPage.hero.subtitle}
      />

      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '64px',
            }}
          >
            <div
              style={{
                background: '#EDE9E1',
                padding: '40px',
                border: '1px solid #D4CFC7',
              }}
            >
              <h3 style={{ marginBottom: '24px', fontSize: '20px' }}>{t.contactPage.info.office}</h3>
              <p style={{ whiteSpace: 'pre-line', lineHeight: 1.8, marginBottom: '32px' }}>
                {t.contactPage.info.address}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                    {t.contactPage.info.phoneLabel}
                  </h4>
                  <p style={{ margin: 0 }}>{t.contactPage.info.phone1}</p>
                  <p style={{ margin: 0 }}>{t.contactPage.info.phone2}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                    {t.contactPage.info.emailLabel}
                  </h4>
                  <a href={`mailto:${t.contactPage.info.emailAddress}`} style={{ color: '#6B7280' }}>
                    {t.contactPage.info.emailAddress}
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '40px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 20px 40px rgba(11, 27, 50, 0.06)',
              }}
            >
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(37, 211, 102, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{t.contactPage.form.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.yourName}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contactPage.form.yourNamePh}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.company}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contactPage.form.companyPh}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.contactPage.form.website}
                    </label>
                    <input
                      type="url"
                      placeholder={t.contactPage.form.websitePh}
                      className="contact-input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contactPage.form.emailPh}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.phone}
                      </label>
                      <input
                        type="tel"
                        placeholder={t.contactPage.form.phonePh}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.sector}
                      </label>
                      <select required defaultValue="" className="contact-input">
                        <option value="" disabled>Select a sector</option>
                        <option value="Oil & Gas">Oil & Gas</option>
                        <option value="Construction">Construction & Real Estate</option>
                        <option value="Trading">Trading & Distribution</option>
                        <option value="Manpower">Manpower & Staffing</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                        {t.contactPage.form.country}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contactPage.form.countryPh}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.contactPage.form.timeline}
                    </label>
                    <select className="contact-input" defaultValue="Exploring options">
                      <option value="Exploring options">Exploring options</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12+ months">12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.contactPage.form.support}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.contactPage.form.supportPh}
                      className="contact-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      style={{
                        width: '100%',
                        background: '#0B1B32',
                        color: '#FFFFFF',
                        padding: '16px',
                        fontWeight: 600,
                        fontSize: '15px',
                        border: 'none',
                        cursor: formStatus === 'submitting' ? 'wait' : 'pointer',
                        opacity: formStatus === 'submitting' ? 0.7 : 1,
                      }}
                    >
                      {formStatus === 'submitting' ? '...' : t.contactPage.form.send}
                    </button>
                    <p style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '16px', textAlign: 'center' }}>
                      {t.contactPage.form.privacy}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
