"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Luxury Easing Curve for ultra-smooth animations
const luxuryEase = [0.22, 1, 0.36, 1];

// Stagger Variants for Content Section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Items will appear one by one with a 0.2s gap
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: luxuryEase },
  },
};

const Hero = () => {
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
          {/* <Image
            src="/homepageBg.webp"
            alt="Creative marketing team"
            fill
            // height={"1000"}
            // width={"1000"}
            priority
            quality={100}
            sizes="100vw"
            className="object-cover "
          /> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            // h-[450px] md:h-[550px]
            className="
             w-full object-cover h-full transition-transform duration-1000 "
          >
            {/* group-hover:scale-110 */}
            <source src={"/homePageVid.mp4"} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* TOP NAVBAR */}

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-[100vh] items-center justify-center px-6 py-24 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl">
              La visione che diventa risultato.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="" aria-labelledby="vision-content">
        <div className="mx-auto container py-20 px-[30px] sm:px-[50px]  md:px-[80px] lg:px-[100px] lg:py-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-5xl"
          >
            <h2 id="vision-content" className="sr-only">
              Contenuto della visione strategica
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-2xl font-light leading-[1.15] tracking-tight text-cu-blue sm:text-3xl md:text-4xl"
            >
              Dietro ogni conversione c&apos;è una scelta.
              <br />
              Dietro ogni scelta, un&apos;intenzione intercettata
              <br />
              al momento giusto.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-10 text-2xl font-medium leading-[1.15] tracking-tight text-cu-blue sm:text-3xl md:text-4xl"
            >
              <span className="font-black">
                Noi ci collochiamo in quello spazio,
              </span>
              <br />
              dove la strategia si affina sui dati e la visione
              <br />
              acquista l&apos;unica forma che conta:
              <span className="font-black"> quella misurabile.</span>
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-14">
              <Link
                href="/servizi"
                className="group inline-flex items-center gap-3 rounded-full border border-cu-blue px-7 py-4 text-sm font-semibold text-cu-blue transition duration-300 hover:cu-blue hover:font-bold"
              >
                Scopri di più
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
