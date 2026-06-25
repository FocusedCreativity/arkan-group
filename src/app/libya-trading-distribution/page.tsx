import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Trading & Distribution Partner | Arkan Holding Group',
  description:
    'Import, export, commodities, and distribution into Libya: customs and compliance, letters of credit, logistics, warehousing, and local buyer access — the full trade cycle from border to buyer.',
};

export default function TradingPage() {
  return <SectorPageTemplate slug="trading" />;
}
