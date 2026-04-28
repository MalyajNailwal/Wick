import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import WhyWickATESClient from '@/components/WhyWickATESClient';
import { whyWickATESMetadata } from '@/app/metadata';

export const metadata = whyWickATESMetadata;

export default function WhyWickATESPage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[{ name: 'Why Choose Wick ATES', url: '/why-wick-ates' }]}
            className="mb-8"
          />
        </div>
      </div>
      <WhyWickATESClient />
    </main>
  );
}