import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Wick',
  description: 'Wick terms of service. Read the terms and conditions governing your use of our website, ATES products, and services.',
  alternates: {
    canonical: 'https://wick.co.in/terms-of-service',
  },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: May 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website wick.co.in and purchasing our ATES (Automatic Tyre Equalisation System) products, you accept and agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Products and Services</h2>
            <p>
              Wick manufactures and sells the TyreRakhshak ATES and related products for commercial vehicles. All product descriptions, specifications, and pricing are subject to change without notice. Custom pricing is provided based on fleet size and requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Wick and is protected by Indian and international copyright laws. The TyreRakhshak brand and ATES technology are trademarks of Wick.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
            <p>
              Wick shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services. Our liability is limited to the amount paid for the specific product or service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranty</h2>
            <p>
              Our ATES products come with a standard manufacturer warranty. Specific warranty terms are provided with each product purchase. Installation must be performed by authorized Wick technicians to maintain warranty validity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p>
              For questions about these Terms, contact us at office@wick.co.in or visit us at House Of Wick, 33B, NIT, Faridabad, Haryana 121001.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
