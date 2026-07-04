"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudyElectric } from "../../../components/paths.json";
export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <Image
        src={caseStudyElectric}
        alt="Settore Energia"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center"
      >
        <div className="mx-auto container px-6 w-full">
          <h1 className="text-white font-bold uppercase tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl">
            Settore ENERGIA
          </h1>

          <p className="text-white mt-4 text-xl sm:text-3xl">
            Operatore energetico in crescita
          </p>
          <p className="text-white mt-4 text-xl sm:text-3xl">
            con +37% di vendite
          </p>
        </div>
      </motion.div>
    </section>
  );
}
