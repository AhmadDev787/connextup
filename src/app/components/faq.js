"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  X,
  BarChart3,
  Sparkles,
  Target,
  Wand2,
  Wrench,
} from "lucide-react";
import { aiBanner } from "./paths.json";
const features = [
  {
    id: 1,
    title: "Analisi dei dati e insight operativi",
    icon: BarChart3,
    description:
      "L’IA elabora grandi volumi di dati generati dalle attività di marketing e vendita, identifica pattern ricorrenti e li traduce in insight operativi a supporto delle decisioni strategiche.",
  },
  {
    id: 2,
    title: "Ottimizzazione delle campagne pubblicitarie",
    icon: Sparkles,
    description:
      "L’IA supporta il monitoraggio e il miglioramento continuo delle campagne su Meta, TikTok e Google, attraverso l’analisi delle performance e dei comportamenti degli utenti. ",
  },
  {
    id: 3,
    title: "Potenziamento dei processi commerciali",
    icon: Target,
    description:
      "Supporta la gestione delle opportunità commerciali lungo tutto il ciclo di vendita, migliorando la qualità del follow-up, la prioritizzazione dei contatti e la continuità delle interazioni.",
  },
  {
    id: 4,
    title: "Supporto alla creazione dei contenuti",
    icon: Wrench,
    description:
      "Contribuisce alla produzione dei contenuti, migliorandone efficacia, coerenza e impatto sulle diverse audience. Favorisce un allineamento costante tra creatività, obiettivi di campagna e posizionamento del brand.",
  },
];

export default function AIIntegratedSection() {
  const [active, setActive] = useState(null);
  const orderedFeatures = [...features].sort((a, b) => {
    if (a.id === active) return -1;
    if (b.id === active) return 1;
    return 0;
  });

  return (
    <section className="relative overflow-hidden mx-2 sm:mx-6 md:mx-14  py-20 lg:py-28">
      {/* Background Glow */}
      {/* <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-[120px]" /> */}
      {/* <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cu-blue blur-[120px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-extrabold leading-[0.95] tracking-tight lg:text-5xl">
            <span className="text-cu-blue">IA:</span>
            <br />
            <span className="text-cu-blue">non accessorio,</span>
            <br />
            <span className="text-[#AEB8CF]">ma sistema</span>{" "}
            <span className="text-[#5D616A]">integrato</span>
          </h2>

          <motion.button
            whileHover={{ x: 5 }}
            className="group mt-8 inline-flex items-center gap-2 border-b border-cu-blue pb-1 text-base font-semibold text-[#03163D]"
          >
            Contattaci
            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[35px]"
          >
            {/* <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src={aiBanner}
              alt="Luxury stones"
              className="h-[350px] w-full object-cover sm:h-[500px] lg:h-[580px]"
            /> */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-[450px] md:h-[550px] w-full object-cover transition-transform duration-1000 "
            >
              {/* group-hover:scale-110 */}
              <source src={"/stones.mp4"} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#03163D]/10 to-transparent" />
          </motion.div>

          {/* Cards */}
          <LayoutGroup id="features">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {orderedFeatures.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  // <motion.div
                  //   key={item.id}
                  //   layout
                  //   // layout="size"
                  //   initial={{ opacity: 0, y: 60 }}
                  //   whileInView={{ opacity: 1, y: 0 }}
                  //   transition={{
                  //     duration: 0.6,
                  //     delay: index * 0.12,
                  //   }}
                  // <motion.div
                  //   key={item.id}
                  //   // layout="position"
                  //   layout
                  //   initial={{ opacity: 0, y: 60 }}
                  //   whileInView={{ opacity: 1, y: 0 }}
                  //   viewport={{ once: true }}
                  //   // transition={{
                  //   //   duration: 0.4,
                  //   //   delay: index * 0.08,
                  //   //   layout: {
                  //   //     duration: 0.45,
                  //   //   },
                  //   // }}
                  //   layoutId={`feature-${item.id}`}
                  //   transition={{
                  //     layout: {
                  //       type: "spring",
                  //       stiffness: 150,
                  //       damping: 18,
                  //     },
                  //   }}
                  //   className={`relative overflow-hidden rounded-[28px] bg-cu-blue p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-500 ${
                  //     isActive ? "sm:col-span-2" : ""
                  //   }`}
                  // >
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      y: isActive ? -12 : 0,
                      // rotate: isActive ? -1 : 0,
                    }}
                    transition={{
                      scale: {
                        duration: 0.95,
                      },
                      y: {
                        duration: 0.95,
                      },
                      rotate: {
                        duration: 0.95,
                      },
                      layout: {
                        // type: "spring",
                        duration: 1.7,
                        ease: [0.22, 1, 0.36, 1],
                        // stiffness: 20,
                        // damping: 18,
                        // mass: 2,
                        stiffness: 25,
                        damping: 20,
                        mass: 2.5,
                      },
                    }}
                    className={`relative overflow-hidden rounded-[28px] bg-cu-blue p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] ${
                      isActive ? "z-30 sm:col-span-2" : ""
                    }`}
                  >
                    {/* Glow */}
                    {/* <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[80px]" /> */}

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className=" gap-6">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            rotate: 8,
                          }}
                          className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full bg-cu-green"
                        >
                          <Icon className="text-white" size={24} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="max-w-[220px] mt-3 text-sm font-medium leading-snug text-white sm:text-base">
                          {item.title}
                        </h3>
                      </div>

                      {/* Toggle */}
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActive(isActive ? null : item.id)}
                        className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm"
                      >
                        <motion.div
                          animate={{
                            rotate: isActive ? 45 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          <Plus size={22} />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* EXPANDABLE */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.45,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5">
                            <div className="mb-5 h-px w-full bg-white/10" />

                            <motion.p
                              initial={{ y: 15 }}
                              animate={{ y: 0 }}
                              exit={{ y: 10 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm leading-relaxed text-white/75 sm:text-base"
                            >
                              {item.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}
