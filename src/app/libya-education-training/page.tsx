import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Education & Training Partner | Arkan Holding Group',
  description:
    'Workforce development and vocational training in Libya: technical programs, institutional partnerships, on-site corporate training, and certification — building local capability for every sector.',
};

export default function EducationPage() {
  return <SectorPageTemplate slug="education" />;
}
