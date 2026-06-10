import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Wick',
  description: 'Wick terms of service for the TyreRakhshak mobile application and ATES products. Read the terms governing your use of our CPMS app and services.',
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
        <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the TyreRakhshak App or accessing wick.co.in, you agree to these Terms of Service. If you do not agree, do not use the App. These Terms apply to all users including fleet managers, transport operators, and company administrators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age and have authority to manage the fleet or vehicles you register in the App. By using the App you confirm you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You must create an account to use the App.</li>
              <li>You are responsible for keeping your login credentials confidential.</li>
              <li>You agree to provide accurate and complete information during registration.</li>
              <li>Notify us immediately at office@wick.co.in if you suspect unauthorized account access.</li>
              <li>We may suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What the App Does</h2>
            <p>
              TyreRakhshak is a Centralized Pressure Monitoring System (CPMS) companion app. It connects via Bluetooth to TyreRakhshak ATES hardware installed on your commercial vehicles and provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Real-time centralized tyre pressure readings per wheel and axle</li>
              <li>Automatic pressure deviation alerts (under-inflation, over-inflation, sudden loss)</li>
              <li>Pressure equalization status monitoring</li>
              <li>Historical pressure data and trend analysis</li>
              <li>Multi-vehicle fleet pressure overview from a single dashboard</li>
            </ul>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> The App is a monitoring and alerting tool. It does not replace regular physical inspection of tyres and vehicles by qualified personnel.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Permitted Use</h2>
            <p>You may use the App only for lawful commercial fleet management purposes. You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Reverse engineer, decompile, or tamper with the App or ATES hardware</li>
              <li>Attempt unauthorized access to Wick&apos;s systems or other users&apos; fleet data</li>
              <li>Use the App in a way that violates Indian or international law</li>
              <li>Transmit harmful code, spam, or malicious content through the App</li>
              <li>Resell or sublicense access to the App without written permission from Wick</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hardware, Installation &amp; Compatibility</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>TyreRakhshak ATES hardware must be installed by authorized Wick technicians for warranty validity and proper CPMS function.</li>
              <li>The App requires Bluetooth to connect to ATES hardware and an internet connection to sync data.</li>
              <li>Self-installation or modification of ATES hardware voids the warranty and may result in inaccurate pressure readings.</li>
              <li>Wick is not liable for damages arising from improper hardware installation or use.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Accuracy of Pressure Data</h2>
            <p>
              The App displays data as received from TyreRakhshak ATES sensors. While we strive for accuracy, sensor readings may occasionally be affected by hardware faults, connectivity issues, or environmental factors.
            </p>
            <p className="mt-3">
              Do not rely solely on App readings for safety-critical decisions. Always follow physical inspection protocols and applicable road safety regulations.
            </p>
            <p className="mt-3">
              Wick is not liable for any loss, accident, or damage resulting from reliance on CPMS data displayed in the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p>
              All content in the App and on the Website &mdash; including the TyreRakhshak brand, ATES technology, software, UI design, logos, and documentation &mdash; is the property of Wick and is protected under Indian and international intellectual property laws. Unauthorized copying, reproduction, or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Uninterrupted or error-free App operation</li>
              <li>That all pressure readings will be perfectly accurate at all times</li>
              <li>Compatibility with all Android devices or future OS versions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Indian law, Wick&apos;s total liability to you shall not exceed the amount you paid for the ATES product or service giving rise to the claim. Wick is not liable for indirect, incidental, or consequential damages including loss of business, vehicle damage, or road incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Warranty on Hardware</h2>
            <p>ATES hardware products come with a standard manufacturer&apos;s warranty. Warranty is valid only when:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Installation is performed by an authorized Wick technician</li>
              <li>The device is used as intended and has not been physically tampered with or damaged</li>
            </ul>
            <p className="mt-4">Specific warranty terms are provided at the time of purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Account Termination &amp; Data Deletion</h2>
            <p>
              You may delete your account by emailing office@wick.co.in. All personal data will be removed within 30 days except where retention is required by law. We may terminate accounts that violate these Terms without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Material changes will be notified via the App or email. Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law &amp; Disputes</h2>
            <p>
              These Terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
            <p><strong>Wick</strong></p>
            <p>Email: office@wick.co.in</p>
            <p>Address: House Of Wick, 33B, NIT, Faridabad, Haryana 121001, India</p>
          </section>
        </div>
      </div>
    </main>
  );
}
