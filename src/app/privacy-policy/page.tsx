import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wick',
  description: 'Wick privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.',
  alternates: {
    canonical: 'https://wick.co.in/privacy-policy',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: May 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Wick (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website wick.co.in. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact forms or request a quote.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process quote requests and deliver our ATES products and services</li>
              <li>To send you technical notices, updates, and promotional communications</li>
              <li>To improve our website and user experience</li>
              <li>To monitor and analyze usage trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide service on our behalf, or perform service-related activities. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at office@wick.co.in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Email: office@wick.co.in</li>
              <li>Address: House Of Wick, 33B, NIT, Faridabad, Haryana 121001</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
