import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import WickVsCompetitorsClient from '@/components/WickVsCompetitorsClient';
import { wickVsCompetitorsMetadata } from '@/app/metadata';

export const metadata = wickVsCompetitorsMetadata;

export default function WickVsCompetitorsPage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[{ name: 'Wick vs Competitors', url: '/wick-vs-competitors' }]}
            className="mb-8"
          />
        </div>
      </div>
      <WickVsCompetitorsClient />
    </main>
  );
}