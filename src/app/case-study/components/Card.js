"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { enelLogo } from "../../components/paths.json";
import Link from "next/link";

export default function Card({
  image,
  title,
  subtitle,
  link,
  logo = false,
  logoImg = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <Link href={link} className="hover:cursor-pointer">
        <div className="relative hover:cursor-pointer h-[420px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {logo === true ? (
            <Image
              src={logoImg}
              height={150}
              width={150}
              className="absolute z-30 bottom-34 left-8"
              alt="enel's logo"
            />
          ) : (
            ""
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-2 text-base md:text-lg text-white/90">
              {subtitle}
            </p>
          </div>

          <div className="absolute right-6 top-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
              <ArrowUpRight className="text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
