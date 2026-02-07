import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-8 mb-20 md:mb-0">
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-4 py-6">
          {/* Policy Links */}
          {/* <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              to="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div> */}
          
          {/* Copyright */}
          <div className="text-center text-sm text-gray-300">
            © 2025 Dharanidharan S R. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}