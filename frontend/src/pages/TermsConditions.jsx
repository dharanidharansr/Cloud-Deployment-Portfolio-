import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
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

        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8">
          Last Updated: November 18, 2025
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using dharanidharansr.tech (the "Website"), you
              accept and agree to be bound by the terms and provisions of this
              agreement. If you do not agree to these Terms and Conditions,
              please do not use this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials
              (information or software) on dharanidharansr.tech for personal,
              non-commercial viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or public display
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the Website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. "Buy Me Coffee" Service
            </h2>
            <p className="mb-4">
              The "Buy Me Coffee" feature allows users to support my work
              through voluntary payments. By using this service:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                You acknowledge that payments are voluntary and non-refundable
                (except as outlined in our Refund Policy)
              </li>
              <li>You agree to provide accurate payment information</li>
              <li>
                You understand that payments are processed securely through
                Razorpay
              </li>
              <li>
                You will not dispute legitimate charges made through this service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Payment Processing
            </h2>
            <p>
              All payments are processed by Razorpay, a third-party payment
              gateway. By making a payment, you agree to Razorpay's terms of
              service and privacy policy. We do not store your payment card
              information on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. User Conduct
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Use the Website for any unlawful purpose or in violation of
                these Terms
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Website
              </li>
              <li>
                Interfere with or disrupt the Website or servers or networks
                connected to the Website
              </li>
              <li>
                Upload or transmit viruses or any other type of malicious code
              </li>
              <li>Collect or harvest any personal data of other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Intellectual Property
            </h2>
            <p>
              The content, features, and functionality of the Website, including
              but not limited to text, graphics, logos, images, and software,
              are the exclusive property of Dharanidharan S R and are protected
              by international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Third-Party Links
            </h2>
            <p>
              The Website may contain links to third-party websites or services
              (including Spotify, GitHub, LinkedIn, etc.). We are not
              responsible for the content, privacy policies, or practices of any
              third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Disclaimer
            </h2>
            <p>
              The materials on the Website are provided on an "as is" basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Limitations of Liability
            </h2>
            <p>
              In no event shall Dharanidharan S R or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Contact Form
            </h2>
            <p>
              By submitting information through our contact form, you agree that
              we may use your email address and message content to respond to
              your inquiry. Your information will be stored securely and will
              not be shared with third parties except as necessary to respond to
              your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. We will notify users of any material changes by updating the
              "Last Updated" date at the top of this page. Your continued use of
              the Website after such modifications constitutes your acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Website immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              14. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please
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
