"use client";

import { motion } from "framer-motion";

export default function PrivacyHero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[140px]" />

      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-[#071B45]">
            Legal Information
          </span>

          <h1 className="mt-8 text-5xl font-black text-[#071B45] lg:text-7xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We believe transparency builds trust. This Privacy Policy explains
            how your information is collected, processed, and protected while
            using our website and digital services.
          </p>

          <div className="mt-10 inline-flex rounded-full bg-[#071B45] px-6 py-3 text-white">
            Last Updated · June 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
