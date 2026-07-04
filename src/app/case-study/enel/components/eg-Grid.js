"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  caseStudyEnel1,
  caseStudyEnel2,
  caseStudyEnel3,
} from "../../../components/paths.json";
const images = [caseStudyEnel1, caseStudyEnel2, caseStudyEnel3];

export default function Grid() {
  return (
    <section className="grid md:grid-cols-3">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
          }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src={img}
            alt=""
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      ))}
    </section>
  );
}
