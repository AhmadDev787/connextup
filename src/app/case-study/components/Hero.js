"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const luxuryEase = [0.22, 1, 0.36, 1];
  return (
    <main className="w-full ">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden border "
        aria-label="Hero Section"
      >
        {/* Background Image with Cinematic Scale Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: luxuryEase }}
          className="absolute inset-0"
        >
          <Image
            src="/caseStudyBg.png"
            alt="Creative marketing team"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-bottom "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* HERO CONTENT */}
        <div className="relative mx-auto container z-10 flex min-h-[100vh] items-center justify-start px-4 py-24 text-center lg:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="max-w-7xl flex gap-2 flex-col items-start"
          >
            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl  lg:text-6xl">
              CASE STUDY.
            </h1>
            <h2 className="text-lg tracking-normal md:tracking-[2px]  leading-[0.95]  text-white sm:text-2xl lg:text-3xl">
              Strategie che trasformano dati,
            </h2>
            <h2 className="text-lg  leading-[0.95] tracking-normal md:tracking-[2px]  text-white sm:text-2xl  lg:text-3xl">
              budget e creatività in risultati
            </h2>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
