"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { enel, caseStudyElectric } from "../../../components/paths.json";
import Link from "next/link";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Insights() {
  return (
    <section className=" py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* BOTTOM IMAGES */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="group overflow-hidden rounded-3xl"
          >
            <Link href={"/case-study/energia-generico"}>
              <Image
                src={caseStudyElectric}
                alt="Campaign result"
                width={900}
                height={700}
                className="h-[260px] md:h-[420px] w-full hover:cursor-pointer object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="group overflow-hidden rounded-3xl"
          >
            <Link href={"/case-study/enel"}>
              <Image
                src={enel}
                alt="Marketing analytics"
                width={900}
                height={700}
                className="h-[260px] md:h-[420px] w-full hover:cursor-pointer object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
