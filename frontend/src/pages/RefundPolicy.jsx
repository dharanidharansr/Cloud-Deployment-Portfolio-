import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
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

        <h1 className="text-4xl font-bold mb-4">Refund and Cancellation Policy</h1>
        <p className="text-gray-400 mb-8">
          Last Updated: November 18, 2025
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Overview
            </h2>
            <p>
              This Refund and Cancellation Policy applies to the "Buy Me Coffee"
              payment feature on dharanidharansr.tech. We are committed to
              ensuring your satisfaction and addressing any issues that may arise
              with your transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Nature of Service
            </h2>
            <p>
              The "Buy Me Coffee" feature is a voluntary support mechanism that
              allows users to show appreciation for the content and work
              displayed on this website. Payments made through this feature are
              considered voluntary donations or tips.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Refund Policy
            </h2>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              3.1 General Policy
            </h3>
            <p className="mb-4">
              As payments are voluntary contributions to support my work, they
              are generally non-refundable. However, we understand that mistakes
              can happen.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2">
              3.2 Eligible Refund Cases
            </h3>
            <p className="mb-4">Refunds will be considered in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Duplicate Transactions:</strong> If you were charged
                multiple times for the same transaction due to a technical error
              </li>
              <li>
                <strong>Unauthorized Transactions:</strong> If you can prove
                that the transaction was made without your authorization
              </li>
              <li>
                <strong>Technical Errors:</strong> If the payment was processed
                but you received an error message indicating payment failure
              </li>
              <li>
                <strong>Incorrect Amount:</strong> If you were charged an amount
                different from what you intended to pay
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              3.3 Non-Refundable Cases
            </h3>
            <p className="mb-4">Refunds will NOT be provided in the following cases:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Change of mind after completing a voluntary payment</li>
              <li>Accidental payment where you intentionally initiated the transaction</li>
              <li>Dissatisfaction with free content on the website</li>
              <li>After 30 days from the date of transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Cancellation Policy
            </h2>
            <p className="mb-4">
              Since payments are processed instantly through Razorpay:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Payments cannot be cancelled once the transaction is completed
              </li>
              <li>
                You can close the payment window before completing the payment
                to avoid charges
              </li>
              <li>
                No subscription or recurring charges are involved - all payments
                are one-time transactions
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Refund Request Process
            </h2>
            <p className="mb-4">
              To request a refund for an eligible transaction, please follow
              these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Contact Us:</strong> Send an email to
                dharanidharan.sr@outlook.com within 7 days of the transaction
              </li>
              <li>
                <strong>Provide Details:</strong> Include the following
                information:
                <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                  <li>Transaction ID or Payment ID</li>
                  <li>Date and time of transaction</li>
                  <li>Amount paid</li>
                  <li>Reason for refund request</li>
                  <li>
                    Any supporting documentation (screenshots, receipts, etc.)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Review Period:</strong> We will review your request
                within 5-7 business days
              </li>
              <li>
                <strong>Decision:</strong> You will be notified via email about
                the decision regarding your refund request
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Refund Processing Time
            </h2>
            <p className="mb-4">
              If your refund request is approved:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Refunds will be processed within 7-10 business days from the
                date of approval
              </li>
              <li>
                The refund will be credited to the original payment method used
                for the transaction
              </li>
              <li>
                Depending on your bank or payment provider, it may take an
                additional 5-7 business days for the refund to appear in your
                account
              </li>
              <li>
                You will receive a confirmation email once the refund has been
                processed
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Payment Gateway Charges
            </h2>
            <p>
              Please note that payment gateway charges (if any) are
              non-refundable and will be deducted from the refund amount. The
              net amount received by you in the original transaction will be
              refunded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Dispute Resolution
            </h2>
            <p>
              If you have any disputes regarding a transaction or refund
              decision, please contact us at dharanidharan.sr@outlook.com. We
              are committed to resolving all disputes in a fair and timely
              manner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Chargebacks
            </h2>
            <p>
              We strongly encourage you to contact us directly before initiating
              a chargeback with your bank or credit card company. Initiating a
              chargeback without first attempting to resolve the issue with us
              may result in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Delays in resolution</li>
              <li>Additional fees</li>
              <li>Possible restrictions on future transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We reserve the right to modify this Refund and Cancellation Policy
              at any time. Any changes will be effective immediately upon posting
              on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Contact Information
            </h2>
            <p className="mb-4">
              For any questions, concerns, or refund requests related to this
              policy, please contact us:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>
                <strong>Email:</strong> dharanidharan.sr@outlook.com
              </li>
              <li>
                <strong>Website:</strong> https://dharanidharansr.tech
              </li>
              <li>
                <strong>Response Time:</strong> We typically respond within 24-48
                hours during business days
              </li>
            </ul>
          </section>

          <section className="bg-[#18181b] border border-[#232323] rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Important Note
            </h3>
            <p>
              By making a payment through the "Buy Me Coffee" feature, you
              acknowledge that you have read, understood, and agree to this
              Refund and Cancellation Policy. All payments are processed securely
              through Razorpay, and their terms and conditions also apply.
            </p>
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
