'use client';

// ─── GA4 Analytics Helpers ────────────────────────────────────────
// Replace G-XXXXXXXXXX in layout.tsx with your actual Measurement ID.
// These helpers fire events that map to GA4 conversion events.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

// Track when a CTA button is clicked
export function trackCTAClick(ctaLabel: string, destination: string) {
  gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaLabel,
    cta_destination: destination,
  });
}

// Track lead form submission
export function trackFormSubmit(sector: string, country: string) {
  gtag('event', 'generate_lead', {
    event_category: 'conversion',
    event_label: 'market_entry_form',
    sector,
    country,
    value: 1,
    currency: 'USD',
  });
}

// Track sector landing page view
export function trackSectorView(sectorId: string) {
  gtag('event', 'sector_view', {
    event_category: 'engagement',
    event_label: sectorId,
  });
}

// Track company profile PDF download
export function trackProfileDownload() {
  gtag('event', 'file_download', {
    event_category: 'engagement',
    event_label: 'company_profile_pdf',
    file_name: 'Arkan_Company_Profile.pdf',
  });
}

// Track WhatsApp click
export function trackWhatsAppClick() {
  gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: 'whatsapp_float_button',
  });
}

// ─── UTM Capture ─────────────────────────────────────────────────
// Call this once on app init to persist UTM params to sessionStorage
export function captureUTMParams() {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  params.forEach((param) => {
    const value = url.searchParams.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });
}

// Retrieve stored UTM params (for form hidden fields)
export function getStoredUTM(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const result: Record<string, string> = {};

  params.forEach((param) => {
    const value = sessionStorage.getItem(param);
    if (value) result[param] = value;
  });

  return result;
}
