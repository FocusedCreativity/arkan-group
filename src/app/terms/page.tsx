'use client';

import { LegalPage } from '@/components/sections/LegalPage';
import { useLang } from '@/lib/LangContext';

export default function TermsPage() {
  const { t } = useLang();
  return <LegalPage content={t.termsPage} />;
}
