import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f7] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">
          Last Updated: November 18, 2025
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to dharanidharansr.tech ("we," "our," or "us"). We are
              committed to protecting your personal information and your right
              to privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              2.1 Personal Information
            </h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fill out the contact form (name and email address)</li>
              <li>Make a payment through our "Buy Me Coffee" feature</li>
              <li>Subscribe to our newsletter (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              2.2 Payment Information
            </h3>
            <p>
              When you make a payment, your payment information is processed
              securely by Razorpay. We do not store your credit card details or
              payment information on our servers. Please refer to Razorpay's
              privacy policy for more information on how they handle your
              payment data.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              2.3 Automatically Collected Information
            </h3>
            <p className="mb-4">We automatically collect certain information when you visit our website:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and messages</li>
              <li>Process payments and transactions</li>
              <li>Send you updates and notifications (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Razorpay:</strong> For payment processing
              </li>
              <li>
                <strong>Firebase:</strong> For storing contact form submissions
              </li>
              <li>
                <strong>Spotify API:</strong> To display currently playing music
              </li>
              <li>
                <strong>Vercel:</strong> For website hosting and deployment
              </li>
            </ul>
            <p className="mt-4">
              These services may collect and process your data according to
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to track
              activity on our website and store certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>
                <strong>Email:</strong> dharanidharan.sr@outlook.com
              </li>
              <li>
                <strong>Website:</strong> https://dharanidharansr.tech
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
