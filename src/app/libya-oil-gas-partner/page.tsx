import { SectorPageTemplate } from '@/components/sections/SectorPageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Libya Oil & Gas Support Services | Arkan Holding Group',
  description:
    'Onshore and offshore oil & gas support in Libya: field operations, rig mobilization, maintenance, HSE, manpower, procurement and logistics — from a partner with 30+ years on the ground.',
};

export default function OilGasPage() {
  return <SectorPageTemplate slug="oil-gas" />;
}
