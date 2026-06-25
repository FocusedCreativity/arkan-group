import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Manpower & Staffing Solutions | Arkan Holding Group',
  description:
    'Workforce solutions for Libya operations: recruitment, vetting, site mobilization, specialist technical teams, and HR compliance — local and expatriate crews, managed end to end.',
};

export default function ManpowerPage() {
  return <SectorPageTemplate slug="manpower" />;
}
