"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formab } from "../../../components/paths.json";
export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      <Image src={formab} alt="formab" fill priority className="object-cover" />

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col justify-center gap-10"
      >
        <section className="mx-auto container px-6 w-full">
          <Image
            src={"/clientLogos/7.png"}
            height={200}
            width={350}
            alt="formab's logo"
            className=" h-[70px] md:h-[100px] w-[120px] md:w-[180px]"
          />
        </section>
        <div className="mx-auto container px-6 w-full">
          <h1 className="text-white  uppercase tracking-tight leading-none text-4xl sm:text-6xl">
            -59% CPL,
          </h1>
          <p className="text-white tracking-wide text-2xl sm:text-4xl">
            300 lead al giorno,
          </p>
          <p className="text-white text-2xl tracking-wide sm:text-4xl">
            20% di conversione
          </p>
        </div>
      </motion.div>
    </section>
  );
}
