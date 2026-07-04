"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
export default function TeamCard({ item, index, progress }) {
  const start = Math.min(index * 0.05, 0.4);

  const rotateY = useTransform(progress, [start, start + 0.35], [180, 0]);

  const opacity = useTransform(progress, [start, start + 0.25], [0, 1]);

  const scale = useTransform(progress, [start, start + 0.35], [0.8, 1]);

  return (
    <motion.div
      style={{
        rotateY,
        opacity,
        scale,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      className={`absolute overflow-hidden rounded-[18px] sm:rounded-[24px] border border-white/30 bg-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl ${item.className}`}
    >
      <Image
        src={item.image}
        alt="team"
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}
