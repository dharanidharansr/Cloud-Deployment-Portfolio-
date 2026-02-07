import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import GithubGraph from "../components/GithubGraph";
import ProfileCard from "../components/ProfileCard";
import Projects from "../components/Projects";
import QuoteBox from "../components/QuoteBox";
import ContactSection from "../components/ContactSection";
import TechMarquee from "../components/TechMarquee";
import Footer from "../components/Footer";
import DiagonalBackground from "../components/DiagonalBackground";
import GridLines from "../components/GridLines";
import SectionDivider from "../components/SectionDivider";
import Clock from "../components/Clock";
import Certifications from "@/components/Certifications";
import AnimatedLogo from "../components/AnimatedLogo";

export default function Landing() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Remove logo after fade out completes
    const removeTimer = setTimeout(() => {
      setShowLogo(false);
    }, 3700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLogo && (
          <AnimatedLogo fadeOut={fadeOut} />
        )}
      </AnimatePresence>

      {!showLogo && (
        <DiagonalBackground className="min-h-screen">
          <GridLines />
          <div className="flex flex-col md:flex-row min-h-screen bg-[#080808]/95 text-[#f5f5f7] overflow-x-hidden">
            <Sidebar />
        <main className="flex-1 flex flex-col items-center justify-center px-0 py-2 md:py-4 mt-0 md:mt-0 w-full">
          <div className="w-full max-w-[98vw] md:max-w-2xl px-2 md:px-0 flex justify-end items-center mb-4">
            <Clock />
          </div>
          <SectionDivider className="mb-11" />

          <div className="w-full max-w-[98vw] md:max-w-2xl px-2 md:px-0">
            <ProfileCard />
          </div>

          <SectionDivider className="my-2" />
          <SectionDivider className="mt-2" />

          <div className="w-full max-w-[98vw] md:max-w-2xl px-2 md:px-0">
            <section className="mt-4 md:mt-12 mb-10 md:mb-20 w-full">
              <p
                className="text-gray-300 font-extralight text-sm md:text-md leading-relaxed text-left"
                style={{ fontWeight: 200 }}
              >
                I’m a full-stack developer specializing in the MERN stack with a strong passion for AI and machine learning. 
                I’m currently pursuing my studies in Artificial Intelligence and Data Science at Kongu Engineering College.
              </p>
              <p
                className="text-gray-300 mt-6 md:mt-10 font-extralight leading-relaxed text-left text-sm md:text-md"
                style={{ fontWeight: 200 }}
              >
                I enjoy exploring new technologies and transforming ideas into real projects. 
                I’m always eager to learn, grow, and collaborate with others.
              </p>
            </section>
          </div>

          <SectionDivider className="mt-[-2rem] mb-14" />

          <div className="w-full max-w-[98vw] md:max-w-2xl px-2 sm:px-4">
            <section id="github" className="mb-10 md:mb-20">
              <GithubGraph username="dharanidharansr" />
            </section>
          </div>

          <SectionDivider className="mt-[-1.5rem]" />
          <SectionDivider className="mt-2" />

          <TechMarquee />

          <SectionDivider className="mt-[-0.75rem]" />

          <Projects />

          <SectionDivider className="mt-[-3.5rem] mb-12" />

          <Certifications />

          <SectionDivider className="mt-3" />

          <div className="w-full max-w-[98vw] md:max-w-2xl px-2">
            <ContactSection />
          </div>

          <SectionDivider className="mt-8" />

          <div className="w-full max-w-[98vw] md:max-w-2xl px-2 ">
            <QuoteBox>
              'commit: hard-work + dedication + obsession → deploy excellence'
            </QuoteBox>
          </div>

          <SectionDivider className="mt-8" />

          <Footer />
        </main>
      </div>
    </DiagonalBackground>
      )}
    </>
  );
}
