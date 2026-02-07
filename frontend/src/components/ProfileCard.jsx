import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFilePdf,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div
      className="w-full max-w-full md:max-w-2xl mx-auto rounded-xl shadow-lg p-4 sm:p-6 md:p-7 mb-8 flex flex-col gap-3 md:gap-4 border border-[#232323] relative text-left"
      style={{
        background: `linear-gradient(135deg, 
             #1a1a1d 0%, 
             #18181b 15%, 
             #16161a 50%, 
             #141418 85%, 
             #121216 100%
           )`,
        boxShadow: `
             0 4px 6px -1px rgba(0, 0, 0, 0.3),
             0 2px 4px -1px rgba(0, 0, 0, 0.2),
             inset 0 1px 0 rgba(255, 255, 255, 0.05)
           `,
      }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2 relative">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#f5f5f7]">
            Dharanidharan S R
          </div>
          <div id="about" className="text-xs md:text-sm text-gray-400">
            19, Full Stack developer with a passion for AI/ML. <br />
          </div>
          {/* Socials: always top-right */}
          <div className="flex gap-3 md:gap-6 absolute right-0 top-0">
            <a
              href="https://leetcode.com/dharanidharansr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <FaLaptopCode className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-[#f5f5f7] transition" />
            </a>
            <a
              href="https://github.com/dharanidharansr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-[#f5f5f7] transition" />
            </a>
            <a
              href="https://linkedin.com/in/dharanidharansr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaLinkedin className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-[#f5f5f7] transition" />
            </a>
            <a
              href="https://drive.google.com/file/d/1xH3JUvblpnKQQJdH7H2EYcXpw1x7khtT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaFilePdf className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-[#f5f5f7] transition" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400">
            <FaMapMarkerAlt /> Salem, TamilNadu, India
          </div>
          <a
            href="mailto:dharanidharan.sr@outlook.com"
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-[#f5f5f7] transition"
          >
            <FaEnvelope /> dharanidharan.sr@outlook.com
          </a>
          <a
            href="https://www.instagram.com/_patrick_bateman.18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-[#f5f5f7] transition"
          >
            <FaInstagram />
            dharanidharansr
          </a>
          
          <a
            href="https://blog.dharanidharansr.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-400 hover:text-[#f5f5f7] transition"
          >
            <FaGlobe />
            blog.dharanidharansr.tech
          </a>
        </div>
      </div>
      <div className="mt-2 md:mt-4 text-xs md:text-sm text-gray-300">
        Creative. Adaptive. Funny.
      </div>
    </div>
  );
}
