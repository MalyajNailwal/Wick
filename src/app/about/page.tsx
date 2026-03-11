import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import AboutClient from '@/components/AboutClient';
import { aboutMetadata } from '@/app/metadata';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[{ name: 'About Wick ATES', url: '/about' }]}
            className="mb-8"
          />
        </div>
      </div>
      <AboutClient />
    </main>
  );
}