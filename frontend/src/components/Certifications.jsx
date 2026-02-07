import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const certifications = [
  {
    id: 8,
    name: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    year: "2025",
    image: "/GENAINV.png",
    text: `Completed NVIDIA course: Generative AI with Diffusion Models

Demonstrated competence in core diffusion model principles, generative AI toolsets, and practical implementation of diffusion-based generative frameworks for AI-driven content creation.`
  },
  {
    id: 2,
    name: "MongoDB Certified Associate Developer",
    issuer: "MongoDB, Inc.",
    year: "2025",
    image: "/mongodb.png",
    text: `Awarded MongoDB Certified Associate Developer

Demonstrated proficiency in building and deploying applications using MongoDB, understanding document databases, and real-world NoSQL solutions.`
  },
  {
    id: 1,
    name: "Data Analytics Job Simulation Certificate",
    issuer: "Forage (Deloitte Forensic Technology)",
    year: "2025",
    image: "/DSJS.png",
    text: `Completed Data Analytics Job Simulation

Gained practical experience in forensic data analysis, real-world analytics tasks, and business problem-solving using analytics methodologies.`
  },
  {
    id: 3,
    name: "Oracle Cloud Infrastructure Certified Generative AI Professional",
    issuer: "Oracle University",
    year: "2025",
    image: "/GEN.png",
    text: `Earned Oracle Cloud Infrastructure 2025 Certified Generative AI Professional

Learned advanced techniques in generative AI, deploying modern AI models on Oracle Cloud, and integrating generative solutions into business applications.`
  },
  {
    id: 10,
    name: "Accelerating End-to-End Data Science Workflows",
    issuer: "NVIDIA",
    year: "2025",
    image: "/DSNV.png",
    text: `Completed NVIDIA course: Accelerating End-to-End Data Science Workflows

Acquired skills to optimize and accelerate the entire data science pipeline, utilizing NVIDIA technologies for advanced workflow automation, large-scale data processing, and efficient AI/ML model deployment.`
  },
  {
    id: 4,
    name: "Oracle Cloud Infrastructure Certified Data Science Professional",
    issuer: "Oracle University",
    year: "2025",
    image: "/DS.png",
    text: `Achieved Oracle Cloud Infrastructure 2025 Certified Data Science Professional

Recognized expertise in implementing data science workflows, leveraging Oracle Cloud tools for predictive analytics, and solving real business challenges.`
  },
  {
    id: 9,
    name: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    year: "2025",
    image: "/DL.png",
    text: `Completed NVIDIA course: Getting Started with Deep Learning.

Demonstrated foundational skills in deep learning, basic neural networks, and practical model development.`
  },
  {
    id: 5,
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
    image: "/AIF.png",
    text: `Completed Oracle Cloud Infrastructure 2025 AI Foundations Associate

Acquired essential AI concepts, cloud infrastructure fundamentals, and foundational skills for building AI-powered cloud solutions.`
  },
  {
    id: 6,
    name: "Oracle APEX Cloud Developer Certified Professional",
    issuer: "Oracle University",
    year: "2025",
    image: "/APEX.png",
    text: `Certified as Oracle APEX Cloud Developer Professional

Validated skills in rapid application development, building scalable database cloud solutions, and deploying Oracle APEX apps in enterprise environments.`
  },
  {
    id: 7,
    name: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle University",
    year: "2025",
    image: "/VS.png",
    text: `Oracle AI Vector Search Certified Professional

Mastered building and querying advanced AI-based vector search solutions, optimizing information retrieval in modern enterprise search systems.`
  },
];

export default function Certifications() {
  const [openImg, setOpenImg] = useState(null);

  return (
    <section
      id="certifications"
      className="mb-10 w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto"
    >
      <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-left text-white tracking-tight">
        International Certifications
      </motion.h2>
      <Carousel className="w-full">
        <CarouselContent>
          {certifications.map((cert) => (
            <CarouselItem key={cert.id}>
              <div className="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-[#232323] bg-[#16181c]/80 p-4 sm:p-6 backdrop-blur-md shadow-lg w-full max-w-[90vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto z-10 text-left">
                <div className="flex items-center mb-3">
                  <img
                    src="/profile.jpg"
                    alt="DSR"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 mr-3"
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="font-bold text-white text-sm sm:text-base md:text-lg">
                        Dharanidharan S&nbsp;
                      </span>
                      <span className="font-bold text-white text-sm sm:text-base md:text-lg">
                        R
                      </span>
                    </div>

                    <span className="ml-2 text-gray-400 text-xs sm:text-sm md:text-base">
                      @dharanidharansr · {cert.year}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="whitespace-pre-line text-gray-100 text-xs sm:text-sm md:text-base">
                    {cert.text}
                  </span>
                </div>
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full rounded-lg border border-gray-700 mb-3 object-contain cursor-zoom-in"
                  onClick={() => setOpenImg(cert.image)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </Carousel>

      {/* Animated Modal for zoomed image */}
      <AnimatePresence>
        {openImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpenImg(null)}
          >
            <motion.img
              src={openImg}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain cursor-zoom-out"
              style={{ touchAction: "pinch-zoom" }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
