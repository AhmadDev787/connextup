"use client";

import { motion } from "framer-motion";

export default function PrivacySection({ id, title, icon: Icon, content }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[30px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B45] text-white">
          <Icon size={28} />
        </div>

        <h2 className="text-3xl font-bold text-[#071B45]">{title}</h2>
      </div>

      <div className="mt-8 space-y-6">
        {content.map((text, index) => (
          <p key={index} className="leading-8 text-slate-600 text-lg">
            {text}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
