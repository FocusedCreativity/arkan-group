import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LangProvider } from '@/lib/LangContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arkan.ly'),
  title: {
    default: 'Libya Market Entry Partner | Arkan Holding Group',
    template: '%s | Arkan Group',
  },
  description:
    'Enter Libya with a trusted local operating partner. Arkan helps foreign and regional companies assess, enter, and operate in Libya.',
  keywords: [
    'Libya market entry',
    'Libya operating partner',
    'Arkan Group',
    'Libya business partner',
    'Libya construction',
    'Libya oil and gas',
    'Benghazi Libya',
    'foreign companies Libya',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arkan.ly',
    siteName: 'Arkan Group',
    title: 'Libya Market Entry Partner | Arkan Holding Group',
    description:
      'Enter Libya with a trusted local operating partner. Arkan helps foreign and regional companies assess, enter, and operate in Libya.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Libya Market Entry Partner | Arkan Holding Group',
    description:
      'Enter Libya with a trusted local operating partner. Arkan helps foreign and regional companies assess, enter, and operate in Libya.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arkan Group',
  url: 'https://arkan.ly',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+218-21-000-0000',
      contactType: 'customer service',
      areaServed: 'LY',
      availableLanguage: ['English', 'Arabic'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Benghazi',
    addressCountry: 'LY',
  },
  foundingDate: '1994',
  description:
    'A Libyan operating group helping foreign and regional companies assess, enter, and operate in Libya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
        {/* GA4 — replace G-XXXXXXXXXX with your Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
