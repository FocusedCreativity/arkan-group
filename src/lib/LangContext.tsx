'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Lang } from './i18n';
import { translations } from './i18n';

interface LangContextValue {
  lang: Lang;
  t: typeof translations['en'];
  toggleLang: () => void;
  isArabic: boolean;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  t: translations.en,
  toggleLang: () => {},
  isArabic: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');
  const isArabic = lang === 'ar';
  const t = translations[lang];

  // Update html dir and lang attributes
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  return (
    <LangContext.Provider value={{ lang, t, toggleLang, isArabic }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
