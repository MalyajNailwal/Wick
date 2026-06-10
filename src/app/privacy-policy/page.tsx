import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wick',
  description: 'Wick privacy policy for the TyreRakhshak mobile application and wick.co.in. Learn how we collect, use, and protect your tyre pressure monitoring data.',
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
        <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Wick (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the TyreRakhshak mobile application (&quot;App&quot;) and the website wick.co.in. This Privacy Policy describes how we collect, use, and protect your information when you use our App to monitor centralized tyre pressure data via our ATES (Automatic Tyre Equalisation System) hardware.
            </p>
            <p>By installing or using the App, you agree to this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2a. Account Information</h3>
            <p>Name, email address, phone number, and fleet/company name when you register.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2b. Vehicle &amp; Fleet Configuration</h3>
            <p>Vehicle registration numbers, axle configurations, and fleet profiles you set up in the App.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2c. CPMS Sensor Data (Core App Function)</h3>
            <p>The primary purpose of the App is to receive, display, and analyze centralized tyre pressure data from your TyreRakhshak ATES hardware. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Real-time tyre pressure readings per wheel/axle position</li>
              <li>Pressure deviation events (over-inflation, under-inflation, sudden pressure drop)</li>
              <li>Pressure equalization status across axles</li>
              <li>Sensor health and battery status</li>
              <li>Historical pressure logs for trend analysis and reporting</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2d. Bluetooth Data</h3>
            <p>The App uses Bluetooth to connect with TyreRakhshak ATES hardware units installed on your vehicles. We collect hardware device IDs and sensor pairing data required to establish and maintain this connection.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2e. Device &amp; Diagnostic Data</h3>
            <p>Device model, Android OS version, App version, crash logs, and performance diagnostics used to maintain App stability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Data Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-3">Show live centralized pressure readings on dashboard</td><td className="border border-gray-200 px-4 py-3">CPMS sensor data via Bluetooth</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Send push alerts for abnormal pressure levels</td><td className="border border-gray-200 px-4 py-3">Sensor data, notifications</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Display pressure history and trend graphs</td><td className="border border-gray-200 px-4 py-3">Historical sensor logs</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Manage multiple vehicles from one central view</td><td className="border border-gray-200 px-4 py-3">Fleet configuration + sensor data</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Secure your account and fleet data</td><td className="border border-gray-200 px-4 py-3">Account information</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Fix bugs and improve App performance</td><td className="border border-gray-200 px-4 py-3">Crash logs, diagnostics</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Send product/service updates (with your consent)</td><td className="border border-gray-200 px-4 py-3">Email address</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">We do not use your data for advertising and we do not sell it to any third party.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Android Permissions We Request</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Permission</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Why We Need It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">BLUETOOTH_SCAN</td><td className="border border-gray-200 px-4 py-3">Detect nearby TyreRakhshak ATES hardware</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">BLUETOOTH_CONNECT</td><td className="border border-gray-200 px-4 py-3">Pair with and receive live pressure data from ATES units</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">ACCESS_FINE_LOCATION</td><td className="border border-gray-200 px-4 py-3">Required by Android OS to use Bluetooth scanning (no location data is stored or used by us)</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">FOREGROUND_SERVICE</td><td className="border border-gray-200 px-4 py-3">Maintain active Bluetooth connection while App is open</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">POST_NOTIFICATIONS</td><td className="border border-gray-200 px-4 py-3">Send real-time pressure alerts to your device</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">INTERNET</td><td className="border border-gray-200 px-4 py-3">Sync pressure logs and fleet data to our secure servers</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3 font-mono text-sm">RECEIVE_BOOT_COMPLETED</td><td className="border border-gray-200 px-4 py-3">Restore pressure monitoring after device restart</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note on Location Permission:</strong> Android requires apps to request location permission in order to scan for Bluetooth devices. We request this permission solely to enable Bluetooth functionality. We do not collect, store, or use your GPS or physical location.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Data Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-3">Real-time pressure readings</td><td className="border border-gray-200 px-4 py-3">Displayed live; not stored beyond active session unless logging is on</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Historical pressure logs</td><td className="border border-gray-200 px-4 py-3">Up to 12 months for trend analysis</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Account &amp; fleet configuration</td><td className="border border-gray-200 px-4 py-3">While your account is active</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">After account deletion</td><td className="border border-gray-200 px-4 py-3">All personal data removed within 30 days</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing</h2>
            <p>We do not sell your data. We share it only where necessary:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Cloud infrastructure providers</strong> &mdash; for secure backend storage of your fleet and pressure data</li>
              <li><strong>Crash analytics</strong> &mdash; anonymized crash reports only (e.g., Firebase Crashlytics)</li>
              <li><strong>Legal authorities</strong> &mdash; if required by Indian law or a valid court order</li>
            </ul>
            <p className="mt-4">All third-party providers are bound by contract to process your data only as instructed by us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>All data between the App and our servers is encrypted via HTTPS/TLS</li>
              <li>Bluetooth communication with ATES hardware uses secure pairing protocols</li>
              <li>Fleet data is accessible only to authenticated account holders</li>
              <li>We follow appropriate technical and organizational security measures under India&apos;s IT Act, 2000</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              The TyreRakhshak App is designed for commercial fleet operators and is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has registered, contact us at office@wick.co.in and we will delete the data immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights (India &mdash; DPDP Act 2023)</h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Erase your personal data (subject to legal retention requirements)</li>
              <li>Withdraw consent at any time</li>
              <li>Nominate a person to exercise your rights on your behalf</li>
            </ul>
            <p className="mt-4">To exercise any right, email us at office@wick.co.in. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. For significant changes, we will notify you via the App or email. Continued use after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p><strong>Wick</strong></p>
            <p>Email: office@wick.co.in</p>
            <p>Address: House Of Wick, 33B, NIT, Faridabad, Haryana 121001, India</p>
          </section>
        </div>
      </div>
    </main>
  );
}
