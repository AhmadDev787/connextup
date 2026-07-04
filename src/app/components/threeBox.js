"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import VideoCarousel from "./videoCarousel";

const cards = [
  {
    id: 1,
    title: "OFFERTA VALIDA SOLO\nPER NUOVI CLIENTI",
    subtitle: "Partner di vendita online",
    video: "/vid.mp4",
    bg: "from-[#ff006e] to-[#d90467]",
  },
  {
    id: 2,
    title: "OFFERTA VALIDA SOLO\nPER NUOVI CLIENTI",
    subtitle: "Partner di vendita online",
    video: "/vid.mp4",
    bg: "from-[#ff006e] to-[#d90467]",
  },
  {
    id: 3,
    title: "Con il nostro\npercorso business",
    subtitle: "Luxury AI Experience",
    video: "/vid2.mp4",
  },
];
const videos = ["/vid.mp4", "/vid.mp4", "/vid2.mp4"];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LuxuryCardsSection() {
  return (
    <>
      <div className="  bg-white container mx-auto px-[30px] sm:px-[50px]  md:px-[80px] lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl mt-16 font-black leading-[1.05] tracking-tight text-cu-blue  md:text-4xl">
            Progettiamo, sviluppiamo e ottimizziamo
          </h2>

          <p className="mt-2 text-2xl font-medium leading-[1.1] tracking-tight text-cu-blue sm:text-3xl md:text-4xl">
            sistemi digitali orientati al risultato.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href="/case-study"
              className="group inline-flex items-center gap-2 border-b border-cu-blue pb-1 text-[13px] font-semibold tracking-wide text-cu-blue transition-all hover:gap-3"
            >
              SCOPRI I case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <section className="relative overflow-hidden mx-6 md:mx-10 py-10 sm:py-14 lg:py-12">
        {/* Background Glow */}
        {/* <div className="absolute left-[-200px] top-10 h-[350px] w-[350px] rounded-full bg-pink-400/20 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-300/20 blur-[120px]" /> */}

        {/* <div className="relative z-10 mx-auto max-w-[95vw]  sm:px-4 lg:px-8">
          {/* Cards */}
        {/* <div className="grid gap-6 md:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }} */}
        {/* className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[3/5]">
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))} */}
        {/* </div>
        </div>  */}
      </section>
      <VideoCarousel />
    </>
  );
}
