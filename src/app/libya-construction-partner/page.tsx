import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Construction & Real Estate Partner | Arkan Holding Group',
  description:
    'End-to-end construction partnership in Libya: development, project management, design, construction manpower, and procurement — one accountable operating group from groundbreaking to handover.',
};

export default function ConstructionPage() {
  return <SectorPageTemplate slug="construction" />;
}
